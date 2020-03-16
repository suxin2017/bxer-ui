import React, {useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {addAnimation, capitalize, getCoordinate} from "./util";
import './index.sass';

Popover.propTypes = {};


function Popover({children, trigger = 'click', placement = 'right'}) {
    const triggerNode = React.Children.only(children);

    const [open, setOpen] = useState(false);
    /**
     *
     * @type {React.MutableRefObject<{current: HTMLElement}>}
     */
    const wrapperRef = useRef(null);

    const triggerRef = useRef(null);


    // 懒加载获取弹框容器
    function getPopover() {
        if (wrapperRef.current === null) {
            wrapperRef.current = document.createElement('div');
            wrapperRef.current.className = classNames('bxer-popover',
                `bxer-popover__${placement}`
                );
            wrapperRef.current.addEventListener('click',(e)=>{
                e.stopPropagation()
            })
            document.body.appendChild(wrapperRef.current);
            renderPopover();
        }
        
        return wrapperRef.current;
    }

    function renderPopover() {
        return ReactDOM.render(
            <div className={'bxer-popover__content'} style={{maxWidth: "200px"}}>{placement}</div>,
            wrapperRef.current,
            () => {
                const [top, left] = getCoordinate(triggerRef.current,
                    wrapperRef.current, placement);
                wrapperRef.current.style.top = `${top}px`;
                wrapperRef.current.style.left = `${left}px`;
                wrapperRef.current.style.display = 'none';
                wrapperRef.current.style.opacity = '0';
            });
    }

    function handleAnimation() {
        const {classList} = wrapperRef.current;
        if (open) {
            addAnimation('bxer-open', classList);
        } else {
            addAnimation('bxer-close', classList);
        }
    }

    function handleShow() {
        const current = wrapperRef.current;
        if (open) {
            current.style.display = 'block';
            current.style.opacity = '1';
        } else {
            setTimeout(()=>{
            current.style.display = 'none';
            },200)
        }
    }
    function handleWindowClick(e) {
        if(e.target !== triggerRef.current){
            setOpen(false)
        }
    }


    useEffect(() => {
        getPopover();
        window.addEventListener('click',handleWindowClick);
        return () => {
            window.removeEventListener('click',handleWindowClick);
            document.body.removeChild(wrapperRef.current);
        }
    }, []);


    useEffect(() => {
        handleShow();
        handleAnimation();
    }, [open]);


    const option = {
        [`on${capitalize(trigger)}`]: () => {
            wrapperRef.current.style.display = 'block';
            setOpen(!open)
        },
        ref: triggerRef

    };


    return React.cloneElement(triggerNode, option);
}

export default Popover;