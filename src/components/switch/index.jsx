import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import './index.sass';
import {isBoolean} from "../util/type";

Switch.propTypes = {
    /**
     * 组件发生修改回调
     */
    onChange:PropTypes.func,
    /**
     * 是否勾选状态
     */
    checked:PropTypes.bool,
};

Switch.defaultProps = {
    onChange:()=>{}
};

function Switch(props) {
    const [checked, setChecked] = useState(true);
    const {onChange,checked:propChecked} = props;
    const switchClassName = classNames('bxer-switch',{
        'bxer-switch-left':!checked,
        'bxer-switch-right':checked,
    });

    useEffect(() => {
       if(isBoolean(propChecked)){
           setChecked(propChecked)
       }
    }, [propChecked]);


    return (
        <div className={switchClassName} tabIndex={0}
             onClick={()=>{
                 onChange(!checked);
                 setChecked(!checked)
             }}>
                <div className={'bxer-switch__round'}/>
        </div>
    );
}
export default Switch;
