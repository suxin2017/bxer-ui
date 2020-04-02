import React, {useEffect, useImperativeHandle, useState} from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from "../layout";
import './formItem.sass';
import {get, verifyRules} from "./util";
import {isEmptyObject, isFunction, isRegExp, isString} from "../util/type";
import classNames from 'classnames';
import Icon from "../icon";

FormItem.propTypes = {
    /**
     * 每一行为一个 [Row](/?path=/docs/layout--%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95)
     * 氛围wrapper 和 label 两部分
     * 布局参数请参考  [Layout](/?path=/docs/layout--%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95)
     * Col部分
     */
    wrapperSpan: PropTypes.object,
    /**
     * 每一行为一个 [Row](/?path=/docs/layout--%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95)
     * 氛围wrapper 和 label 两部分
     * 布局参数请参考  [Layout](/?path=/docs/layout--%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95)
     * Col部分
     */
    labelSpan: PropTypes.object,
    /**
     * 显示的label
     */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /**
     * 数据绑定的key
     */
    dataKey: PropTypes.string,
    rules: PropTypes.arrayOf(PropTypes.shape({
        rule: PropTypes.oneOfType([PropTypes.func, PropTypes.instanceOf(RegExp)]).isRequired,
        message: PropTypes.string.isRequired,
    })),
    /**
     * 提示信息
     * */
    helpTip: PropTypes.string,
    /**
     *是否必传
    */
     isRequest: PropTypes.bool,

};

function FormItem(props, ref) {
    const prefix = "bxer-form__item";
    const {labelSpan, wrapperSpan, label, children, dataKey,isRequest, rules=[]} = props;
    const [value, setValue] = useState();
    const [verify, setVerify] = useState();

    const {verify: propVerify, helpTip} = props;
    const childLength = React.Children.count(children);
    console.log(rules);



    const injectChildProp = childLength === 1 ? {
        value,
        onChange: (value, ...args) => {
            setValue(value);
            props.onChange && props.onChange(value)
            setVerify(verifyRules(rules, value))
        }
    } : {};

    const injectChild = childLength === 1 ? React.Children.map(children, child => {
        return React.cloneElement(child, injectChildProp)
    }) : children;

    useEffect(() => {
        if (props.value !== value) {
            setValue(props.value)
        }
    }, [props.value]);

    useEffect(() => {
        setVerify(propVerify)
    }, [propVerify]);


    return (
        <div className={`${prefix}`}>
            <Row gutter={4}>
                <Col {...labelSpan}>
                    <div className={`${prefix}-label`}>
                        {isRequest && <span className={`${prefix}-label__request`}>*</span>}
                        <span>{label}</span>
                        <span style={{marginLeft: '8px'}}>:</span>
                    </div>
                </Col>
                <Col {...wrapperSpan}>
                    <div className={`${prefix}-content`}>
                        {injectChild}
                    </div>
                    <div className={classNames(`${prefix}-tip`, {
                        [`${prefix}-tip-error`]: !isEmptyObject(verify),
                    })}>
                        <span className={`${prefix}-tip__icon`}>

                        {(helpTip || verify) && <Icon
                            type={!isEmptyObject(verify) ? 'information-line' : 'error-warning-line'}/>}
                        </span>
                        <span className={`${prefix}-tip__text`}>
                                {!isEmptyObject(verify) ? verify.message : helpTip}
                        </span>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default FormItem;
