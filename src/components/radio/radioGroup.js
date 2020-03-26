import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

RadioGroup.propTypes = {
    /**
     * 当前选中的Radio
     */
    value: PropTypes.string,
    /**
     * 勾选回调
     */
    onChange: PropTypes.func
};

function RadioGroup(props) {

    const [activeKey, setActiveKey] = useState(null);
    const {children,onChange} = props;

   const injectChildren= React.Children.map(children,(Radio,index)=>{
        if(!React.isValidElement(Radio))return;
       const _value = Radio.props.value;
        return React.cloneElement(Radio,{
            checked:_value === activeKey,
            onChange:(e)=>{
               const {value }= e.target;
               if(onChange){
                   onChange(value,e)
               }
                   setActiveKey(value)
            },
        })
    });

   useEffect(()=>{
       if(activeKey!=props.value){
           setActiveKey(props.value)
       }
   },[props.value])

    return (
        <div className={"bxer-radio-group"}>{injectChildren}</div>
    );
}

export default RadioGroup;
