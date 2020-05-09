import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { useRef } from 'react';


InfiniteScroll.propTypes = {
    /**
     * 输入框的值
     */
    value: PropTypes.string,
    /**
     * 输入框改变的回调
     */
    onChange: PropTypes.func,
    /**
     * 是否禁用
     */
    disabled: PropTypes.bool,
    /**
     * 解决中文输入法获取空格字母问题
     */
    disabledZhInput: PropTypes.bool
};

function usePrevious(value) {
    const previous = useRef();
    useEffect(() => {
        previous.current = value
    })
    return previous.current;
}

function InfiniteScroll(props = {
    direction: 'ltr',
    itemData: undefined,
    overscanCount: 2,
    useIsScrolling: false,
}) {
    const { itemCount = 10 } = props;

    const [scrollOffset, setScrollOffset] = useState(0)
   

    let outerElementStyle = {
        position: 'relative',
        height: '100px',
        width: '200px',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
    }
    let innerElemenetStyle = {
        width: '100%',
        height: '300px'
    }

    function _getItemStyle(index) {
        let baseIndex = startIndex - 2;
        let top = index  * 20;
        return {
            top,
            width:"100%",
            height:'20px',
            position:'absolute',
        }
    }
    function _getRangeToRender(){
        let startIndex = Math.floor( scrollOffset / 20);
        let stopIndex = startIndex + 5;
        return [startIndex,stopIndex]
    }

    function handleScroll(event){
        const {clientHeight,scrollHeight,scrollTop} = event.currentTarget;
        const scrollOffset = Math.max(0,Math.min(scrollTop,scrollHeight-clientHeight));
        setScrollOffset(scrollOffset)
    }
  



    const [startIndex, stopIndex] = _getRangeToRender();

    const items = [];


    if (itemCount > 0) {
        for (let index = startIndex; index <= stopIndex; index++) {
            items.push(<div
                style={_getItemStyle(index)}
                key={index} index={index} >
                {index}
            </div>)
        }
    }

    return (
        <div style={outerElementStyle} onScroll={handleScroll}>
            <div style={innerElemenetStyle}>
                {items}
            </div>
        </div>
    );
}

export default InfiniteScroll;

