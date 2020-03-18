import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from "../layout";
import './formItem.sass';


FormItem.propTypes = {

};

function FormItem(props) {
    const prefix = "bxer-form__item";
    const {labelSpan,wrapperSpan,name,children} = props;


    return (
        <div className={`${prefix}`}>
            <Row gutter={4}>
                <Col {...labelSpan}>
                    <div className={`${prefix}-label`}>
                        <span>{name}</span>
                        <span style={{marginLeft:'8px'}}>:</span>
                    </div>

                </Col>
                <Col {...wrapperSpan}>
                    <div className={`${prefix}-content`}>
                        {children}
                    </div>
                </Col>
            </Row>

        </div>
    );
}

export default FormItem;