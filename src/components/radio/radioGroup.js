import React, {useState} from 'react';
import PropTypes from 'prop-types';

RadioGroup.propTypes = {

};

function RadioGroup(props) {

    const [activeKey, setActiveKey] = useState(null);
    const {children} = props;

   const injectChildren= React.Children.map(children,(Radio,index)=>{
        if(!React.isValidElement(Radio))return;
       const _value = Radio.props.value;
        return React.cloneElement(Radio,{
            checked:_value === activeKey,
            onChange:(e)=>{
               const {value }= e.target;
               setActiveKey(value)
            },
        })
    });

    return (
        <div className={"bxer-radio-group"}>{injectChildren}</div>
    );
}

export default RadioGroup;