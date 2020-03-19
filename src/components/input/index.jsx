import React, {useEffect, useState} from 'react';
import classNames from 'classnames';
import './index.sass';
import PropTypes from 'prop-types';


Input.propTypes = {

};

function Input(props) {
    const {className,onChange,...other} = props;
   const [value,setValue] = useState("");
    const inputClassName = classNames(
        'bxer-input',
       className
    );

   function holdChange(e) {
       const {value} = e.currentTarget;
          setValue(value);
          onChange(value,e)
   }

   useEffect(()=>{
       if(props.value && value!==props.value){
           setValue(props.value)
       }
   },[props.value]);

    return (
        <input  onChange={holdChange}  className={inputClassName} {...other} value={value}/>
    );
}

export default Input;

