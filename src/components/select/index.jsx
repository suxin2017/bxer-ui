import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import Popover from "../popover";
import Icon from "../icon";
import classNames from 'classnames';
import './index.sass'

Select.propTypes = {
    /**
     * 匹配的option 的值
     */
    value: PropTypes.string,
    /**
     * 回调改变
     */
    onChange:PropTypes.func
};


function Select(props) {

    /**
     *
     * @type {{current: HTMLElement}}
     */
    const selectRef = useRef(null);
    /**
     *
     * @type {{current: HTMLElement}}
     */
    const contentRef = useRef(null);

    const {children, onChange} = props;
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const [showTitle, setShowTitle] = useState('');
    const prefix = 'bxer-select';
    const selectClassName = classNames(prefix,
        {[`${prefix}__open`]: open});

    function changeValue(value) {
        setValue(value);
        if (onChange) {
            onChange(value);
        }
    }

    const options = React.Children.map(children, (option) => {
        const {props:oProps} = option;
        const {value: optionValue=''} = oProps;
        return React.cloneElement(option, {
            selected: optionValue === value,
            onClick: (e) => {
                const {dataset} = e.currentTarget;
                const {value} = dataset;
                changeValue(value);
                setOpen(false)
            }
        })
    });


    // 通过value 设置展示的内容
    useEffect(() => {
        React.Children.forEach(children, (option) => {
            const {props:oProps} = option;
            const { value: optionValue='', children} = oProps;
            if (optionValue === value) {
                setShowTitle(children)
            }
        })
    }, [ value]);

    // 监听prop 的 value
    useEffect(() => {
        if (value !== props.value) {
            setValue(props.value)
        }
    }, [props.value]);


    return (
        <div className={selectClassName} ref={selectRef} onClick={() => {
            setOpen(!open)
        }}>
            <Popover
                className={`${prefix}__popover`}
                trigger={"click"}
                placement={'bottom'}
                open={open}
                onOpen={() => {
                    setOpen(true)
                }}
                onClose={() => {
                    setOpen(false)
                }}
                content={<ul className={'bxer-option-group'} ref={contentRef}>
                    {options}
                </ul>}
            >
                <div className={`${prefix}__content`}>
                    <div>{showTitle}</div>
                    <Icon type={'arrow-left-s-fill'}/>
                </div>
            </Popover>
        </div>
    );
}

export default Select;
