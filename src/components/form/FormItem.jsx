import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from "../layout";
import './formItem.sass';
import {get} from "./util";


FormItem.propTypes = {

};

function FormItem(props) {
    const prefix = "bxer-form__item";
    const {labelSpan,wrapperSpan,label,children,dataKey} = props;
    const [value,setValue] = useState();


    const childLength = React.Children.count(children);

    const injectChildProp = childLength == 1?{
        value,
        onChange:(value,...args)=>{
            setValue(value);
            const {onChange=()=>{}} = children.props;
            props.onChange  && props.onChange(value)
        }
    }:{};

    const injectChild = React.Children.map(children,child=>{
        return React.cloneElement(child,injectChildProp)
    });

    useEffect(()=>{
        if(props.value!==value){
            setValue(props.value)
        }
    },[props.value])

    return (
        <div className={`${prefix}`}>
            <Row gutter={4}>
                <Col {...labelSpan}>
                    <div className={`${prefix}-label`}>
                        <span>{label}</span>
                        <span style={{marginLeft:'8px'}}>:</span>
                    </div>

                </Col>
                <Col {...wrapperSpan}>
                    <div className={`${prefix}-content`}>
                        {injectChild}
                    </div>
                </Col>
            </Row>

        </div>
    );
}

export default FormItem;