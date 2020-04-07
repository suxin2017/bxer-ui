import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./checkboxGroup.sass";
import { isNull } from "../util/type";

CheckboxGroup.propTypes = {
  /**
   * 选中的复选框，和复选框的value匹配
   */
  value: PropTypes.array,
  /**
   * 复选框改变的事件
   */
  onChange: PropTypes.func,
  /**
   * 是否是一行一行的排列
   */
  row: PropTypes.bool,
};

/**
 * 一组复选框
 */
function CheckboxGroup(props) {
  const [activeKeys, setActiveKeys] = useState([]);
  const { children, row } = props;

  const injectChildren = React.Children.map(children, (checkbox, index) => {
    if (!React.isValidElement(checkbox)) {
      throw new Error("CheckboxGroup 的子组件 应该是 Checkbox");
    }
    const _value = checkbox.props.value;

    const checkboxProps = {
      checked: activeKeys.includes(_value),
      onChange: (e) => {
        const { value, checked } = e.target;
        if (checked) {
          activeKeys.push(value);
        } else {
          const activeIndex = activeKeys.indexOf(value);
          activeKeys.splice(activeIndex, 1);
        }
        setActiveKeys([...activeKeys]);
        if (props.onChange) {
          props.onChange([...activeKeys]);
        }
      },
    };
    return React.cloneElement(checkbox, checkboxProps);
  });

  useEffect(() => {
    if (props.value != null && activeKeys !== props.value) {
      setActiveKeys(props.value);
    }
  }, [props.value]);

  const checkboxGroupClassName = classNames("bxer-checkbox-group", {
    "bxer-checkbox-group-row": row,
  });
  return <div className={checkboxGroupClassName}>{injectChildren}</div>;
}

export default CheckboxGroup;
