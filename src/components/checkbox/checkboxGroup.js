import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
CheckboxGroup.propTypes = {

};

function CheckboxGroup(props) {

    const [activeKeys, setActiveKeys] = useState([]);
    const {children} = props;

   const injectChildren= React.Children.map(children,(Checkbox,index)=>{
        if(!React.isValidElement(Checkbox))return;
       const _value = Checkbox.props.value;
        return React.cloneElement(Checkbox,{
            checked:activeKeys.includes(_value),
            onChange:(e)=>{
               const { value,checked }= e.target;
               if(checked){
                   activeKeys.push(value);
               }else{
                   const activeIndex = activeKeys.indexOf(value);
                   activeKeys.splice(activeIndex,1)
               }
                   setActiveKeys([...activeKeys])
               if(props.onChange){
                   props.onChange([...activeKeys]);
               }
            },
        })
    });

   useEffect(()=>{
       if(props.value&&activeKeys!==props.value){
           setActiveKeys(props.value)
       }
   },[props.value])

    return (
        <div className={"bxer-radio-group"}>{injectChildren}</div>
    );
}

export default CheckboxGroup;