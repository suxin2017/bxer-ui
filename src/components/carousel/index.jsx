import React, {useEffect, useState, useRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.sass'
import {getOffset} from "./util";
import Icon from "../icon";
import {message} from "../message";

Carousel.propTypes = {
    /**
     * 宽
     */
    width:PropTypes.number.isRequired,
    /**
     * 高
     */
    height:PropTypes.number.isRequired,
    /**
     * 播放状态
     */
    state:PropTypes.oneOf(['play','stop']),
    /**
     * 延迟时间
     */
    delay:PropTypes.number,
    /**
     * 当前播放索引
     */
    current:PropTypes.number
};
Carousel.defaultProps = {
    delay: 2000
};

const colorMap = ['red', 'green', 'blue', 'yellow'];

const directionMap = {
    left: 'left',
    right: 'right'
};

const stateMap = {
    play: 'play',
    stop: 'stop',
};

function Carousel(props) {
    const [current, setCurrent] = useState(0);
    const [state, setState] = useState(stateMap.play);
    const {children,width,height,delay} = props;
    const countItem = React.Children.count(children);
    // 总宽度
    const totalWidth = countItem * width;
    // 当前偏移了量
    const currentOffset = useRef(1);
    // 获取偏移数组
    const offset = getOffset(width, countItem);
    // 当前计时器具柄
    const timer = useRef();
    // 改变状态的定时器具柄
    const changeStateTimer = useRef();



    useEffect(() => {
        if(state === stateMap.play){
            timer.current = setTimeout(() => {
                setCurrentChange();
            }, delay);
        }
        return () => {
            if (timer.current) {
                clearTimeout(timer.current)
            }
        }
    }, [current,state]);

    useEffect(()=>{

    })

    const injectChildren = React.Children.map(props.children, (child, index) => {
        const {className: childClassName,style:childStyle} = child.props;
        return React.cloneElement(child, {
            className: classNames('carousel-item', childClassName),
            style: {
                width: `${width}px`,
                height: `${height}px`,
                ...childStyle
            }
        })
    });

    function handleToolClick(type) {
        setState(stateMap.stop);
        if(changeStateTimer.current){
            clearTimeout(changeStateTimer.current)
            changeStateTimer.current= null
        }
        changeStateTimer.current = setTimeout(()=>{
            setState(stateMap.play)
        },2000);


        if(type === directionMap.left){
            if(current !== countItem - 1){
                setCurrent(current + 1)
            }
        }else{
            if(current !== 0){
                setCurrent(current - 1)
            }
        }
    }

    function setCurrentChange() {
        // 正在向左前进
        // 到了左边最后一个
        // 向右前进
        // 到了右边最后一个
        if (current === countItem - 1) {
            currentOffset.current = -1;
        }
        if (current === 0) {
            currentOffset.current = 1;
        }
        setCurrent((current + currentOffset.current));
    }

    return (
        <div className={'carousel'} style={{width: `${width}px`}}>
            <div className={'carousel__tool carousel__tool-left'}
                 onClick={() => {
                     handleToolClick(directionMap.left)
                 }}
            >
                <Icon type={'arrow-left-s-line'}/>
            </div>
            <div className={'carousel__container'} style={{
                width: totalWidth,
                transform: `translateX(-${offset[current]}px)`
            }}>
                {injectChildren}
            </div>
            <div className={'carousel__tool carousel__tool-right'}
                 onClick={() => {
                     handleToolClick(directionMap.right)
                 }}
            >
                <Icon type={'arrow-right-s-line'}/>
            </div>
        </div>
    );
}


export default Carousel;
