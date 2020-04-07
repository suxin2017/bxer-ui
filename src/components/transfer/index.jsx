import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import CheckboxGroup from "../checkbox/checkboxGroup";
import { Button, Checkbox, Col, Row } from "../index";
import "./index.sass";
import Icon from "../icon";

Transfer.propTypes = {
  /**
   * 源数据
   */
  sourceData: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      text: PropTypes.any,
    })
  ),
  /**
   * 目标数据
   */
  targetData: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      text: PropTypes.any,
    })
  ),
  /**
   * 源选择
   */
  sourceSelected: PropTypes.arrayOf(PropTypes.string),
  /**
   * 目标选择
   */
  targetSelected: PropTypes.arrayOf(PropTypes.string),
  height: PropTypes.number,
  /**
   * 返回源数据和目标数据
   */
  onChange: PropTypes.func,
};

function isIndeterminate(selected, total) {
  if (selected.length === 0) return false;
  if (total.length === selected.length) return false;
  return true;
}

function isSelectedAll(selected, total) {
  if (selected.length === 0) return false;
  return selected.length === total.length;
}

function include(arr, item) {
  return arr.findIndex((value) => value === item.value) !== -1;
}
Transfer.defaultProps = {
  height: 200,
  onChange: (sourceData, targetData) => {},
};

function Transfer(props) {
  const [sourceData, setSourceData] = useState([]);
  const [sourceSelected, setSourceSelected] = useState([]);
  const [targetData, setTargetData] = useState([]);
  const [targetSelected, setTargetSelected] = useState([]);
  const {
    height,
    onChange,
    sourceData: propSourceData,
    sourceSelected: propSourceSelected,
    targetSelected: propTargetSelected,
    targetData: propsTargetData,
  } = props;
  useEffect(() => {
    if (propSourceData != null) {
      setSourceData(propSourceData);
    }
    if (propsTargetData != null) {
      setTargetData(propsTargetData);
    }
    if (propSourceSelected) {
      setSourceSelected(propSourceSelected);
    }
    if (propTargetSelected) {
      setTargetSelected(propTargetSelected);
    }
  }, [propSourceData, propsTargetData, propSourceSelected, propTargetSelected]);

  const command = {
    sourceTotarget: () => {
      const newSourceData = sourceData.filter(
        (item) => !include(sourceSelected, item)
      );
      const otherTargetData = sourceData.filter((item) =>
        include(sourceSelected, item)
      );
      const newTargetData = targetData.concat(otherTargetData);
      setSourceData([...newSourceData]);
      setTargetData(newTargetData);
      onChange(newSourceData, newTargetData);
      setSourceSelected([]);
    },
    targetToSource: () => {
      const newTargetData = targetData.filter(
        (item) => !include(targetSelected, item)
      );
      const newSourceData = targetData.filter((item) =>
        include(targetSelected, item)
      );
      setTargetData([...newTargetData]);
      setSourceData(sourceData.concat(newSourceData));
      setTargetSelected([]);
    },
  };

  function selectAllChange(checked, data, selectedSetFunc) {
    if (checked) {
      selectedSetFunc(data.map((item) => item.value));
    } else {
      selectedSetFunc([]);
    }
  }
  console.log(height);

  return (
    <div className={"bxer-transfer"}>
      <Row>
        <Col span={5}>
          <div className={"bxer-transfer__tool" + " bxer-transfer__tool-left"}>
            <Checkbox
              checked={isSelectedAll(sourceSelected, sourceData)}
              indeterminate={isIndeterminate(sourceSelected, sourceData)}
              onChange={(e) => {
                selectAllChange(
                  e.target.checked,
                  sourceData,
                  setSourceSelected
                );
              }}
            >
              全选
            </Checkbox>
          </div>
          <div
            style={{ height: `${height}px` }}
            className={"bxer-transfer__box bxer-transfer__left"}
          >
            <CheckboxGroup
              value={sourceSelected}
              row
              onChange={(values) => {
                setSourceSelected(values);
              }}
            >
              {sourceData.map(({ value, text }) => {
                return (
                  <Checkbox value={value} key={value}>
                    {text}
                  </Checkbox>
                );
              })}
            </CheckboxGroup>
          </div>
        </Col>
        <Col span={1}>
          <div className={"bxer-transfer__tool bxer-transfer__tool-middle"}>
            <Button
              icon={"arrow-right-line"}
              onClick={() => {
                command.sourceTotarget();
              }}
            />
            <Button
              icon={"arrow-left-line"}
              onClick={() => {
                command.targetToSource();
              }}
            />
          </div>
        </Col>
        <Col span={5}>
          <div className={"bxer-transfer__tool" + " bxer-transfer__tool-right"}>
            <Checkbox
              checked={isSelectedAll(targetSelected, targetData)}
              indeterminate={isIndeterminate(targetSelected, targetData)}
              onChange={(e) => {
                selectAllChange(
                  e.target.checked,
                  targetData,
                  setTargetSelected
                );
              }}
            >
              全选
            </Checkbox>
          </div>
          <div
            style={{ height: `${height}px` }}
            className={"bxer-transfer__box bxer-transfer__right"}
          >
            <CheckboxGroup
              value={targetSelected}
              row
              onChange={(values) => {
                setTargetSelected(values);
              }}
            >
              {targetData.map(({ value, text }) => {
                return (
                  <Checkbox value={value} key={value}>
                    {text}
                  </Checkbox>
                );
              })}
            </CheckboxGroup>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Transfer;
