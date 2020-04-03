import React from 'react';
import PropTypes from 'prop-types';
import './timelineItem.sass'
TimelineItem.propTypes = {
    /**
     * 圆圈颜色
     */
    color:PropTypes.string
};

function TimelineItem(props) {
    const {children,...other} = props;
    return (
        <div className={'bxer-timeline__item'} >
            <div className={'bxer-timeline__item-tail'}
                 style={{color:props.color}}/>
            <div className={'bxer-timeline__item-head'}/>
            <div className={'bxer-timeline__item-content'} {...other}>
                {children}
            </div>
        </div>
    );
}

export default TimelineItem;
