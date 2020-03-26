import React, {
    useContext,
    useEffect,
    useReducer,
    useRef,
    useState
} from 'react';
import {get, set, verifyRules, versifyData} from "./util";
import PropTypes from "prop-types";

Form.propTypes = {
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
     * 表单回显数据
     */
    data: PropTypes.object,
    /**
     * 提交回调
     */
    onSubmit: PropTypes.func,
};


function Form(props) {
    const {children,wrapperSpan,labelSpan, data: propData} = props;
    const [data, setData] = useState({});
    const rules = useRef({});
    const [validate, setValidate] = useState({});

    const injectFormItem = React.Children.map(children, formItem => {
        const {dataKey = '', label, rules: formItemRules = [],
            isRequest,
            wrapperSpan:formItemWrapperSpan,
            labelSpan:formItemLabelSpan} = formItem.props;

        if (rules && formItemRules) {
            set(rules.current, dataKey, formItemRules)
        }
        if (isRequest) {
            formItemRules.push({
                rule: function (value) {
                    return value
                },
                message: `${label}不能为空`
            });
        }

        const formItemValue = get(data, dataKey, undefined);
        const formItemProps = {
            value: formItemValue,
            rules: formItemRules,
            wrapperSpan:formItemWrapperSpan || wrapperSpan,
            labelSpan:formItemLabelSpan || labelSpan,
            verify: get(validate, dataKey),
            onChange: (value) => {
                const newData = set(data, dataKey, value);
                setData(newData)
            }
        };

        return React.cloneElement(formItem, formItemProps)
    });

    function handleVerify() {
        setValidate(versifyData(data, rules.current))
    }

    useEffect(() => {
        setData(propData)
    }, [propData])


    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            props.onSubmit && props.onSubmit(data);
            handleVerify();
        }}>
            {injectFormItem}
        </form>
    );
}

export default Form;
