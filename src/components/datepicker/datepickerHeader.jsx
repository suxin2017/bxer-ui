import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from "../layout";
import Icon from "../icon";
import './datepickerHeader.sass';
import Button from "../button";

DatepickerHeader.propTypes = {
    onChange:PropTypes.func,
    currentDate: PropTypes.shape({
        year:PropTypes.number,
        month:PropTypes.number,
    }),
};

export const change_Type ={
    left:'0',
    right:'1',
}


function DatepickerHeader({currentDate,onChange}) {
    const {year,month} = currentDate;
    return (
        <div className={'bxer-datepicker__header'}>
            <Row>
                <Col span={2}>
                    <div className={'bxer-datepicker__header-left'}>
                        <Button onClick={()=>{onChange(change_Type.left)}} type={"ghost"} icon={'arrow-left-s-line'}/>
                    </div>
                </Col>
                <Col span={8}>
                    <div className={'bxer-datepicker__header-content'}>
                        {`${year}-${month}`}
                    </div>
                </Col>
                <Col span={2}>
                    <div className={'bxer-datepicker__header-right'}>
                        <Button onClick={()=>{onChange(change_Type.right)}} type={"ghost"} icon={'arrow-right-s-line'}/>

                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default DatepickerHeader;
