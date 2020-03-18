import React, {useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {addAnimation, capitalize, getCoordinate} from "./util";
import './index.sass';

Popover.propTypes = {
    trigger: PropTypes.oneOf(['click', 'hover', 'contextMenu', 'focus']),
    placement: PropTypes.oneOf(['up', 'right', 'bottom', 'left']),
    content: PropTypes.any,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    className: PropTypes.string
};

/**
 * getBoundingClientRect 应该在渲染之后获取
 *
 * @param props
 * @returns {React.DetailedReactHTMLElement<{onMouseOut?: (function(*): void), onMouseOver?: (function(*): void), ref: React.MutableRefObject<null>, onContextMenu?: (function(*): void)}, HTMLElement>}
 * @constructor
 */
function Popover(props) {
    const {
        children,
        trigger = 'click',
        placement = 'right',
        content,
        onOpen = () => {
        },
        onClose = () => {
        },
        className: wrapperClassName
    } = props;

    const triggerNode = React.Children.only(children);

    const [open, setOpen] = useState(false);
    /**
     *
     * @type {React.MutableRefObject<{current: HTMLElement}>}
     */
    const wrapperRef = useRef(null);

    const triggerRef = useRef(null);

    const timer = useRef(null);


    // 懒加载获取弹框容器
    function getPopover() {
        if (wrapperRef.current === null) {
            wrapperRef.current = document.createElement('div');
            wrapperRef.current.className = classNames('bxer-popover',
                `bxer-popover__${placement}`,
                wrapperClassName
            );

            document.body.appendChild(wrapperRef.current);
            renderPopover();
            setTimeout(() => {
                const [top, left] = getCoordinate(triggerRef.current,
                    wrapperRef.current,
                    placement);
                wrapperRef.current.style.top = `${top}px`;
                wrapperRef.current.style.left = `${left}px`;
                wrapperRef.current.style.display = 'none';
                wrapperRef.current.style.opacity = '0';
                if (trigger === 'hover') {
                    const handleEvent = {
                        onMouseOver: (e) => {
                            if (timer.current) {
                                clearTimeout(timer.current)
                            }
                            setOn()
                        },
                        onMouseOut: (e) => {
                            timer.current = setTimeout(() => {
                                    setOff()
                                }
                                , 200)
                        }
                    };

                    wrapperRef.current.onmouseover = handleEvent.onMouseOver;
                    wrapperRef.current.onmouseout = handleEvent.onMouseOut;
                }

            })
        }

        return wrapperRef.current;
    }

    function renderPopover() {
        return ReactDOM.render(
            <div className={'bxer-popover__content'} onClick={(e) => {
                e.stopPropagation()
            }} style={{maxWidth: "200px"}}>
                {content}</div>,
            wrapperRef.current
        );
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
            setTimeout(() => {
                current.style.display = 'none';
            }, 200)
        }
    }

    function handleWindowClick(e) {
        if (!e.path.includes(wrapperRef.current) && !e.path.includes(triggerRef.current)) {
            setOff()
        }
    }

    function setOn() {
        setOpen(true)
        onOpen()
    }

    function setOff() {
        setOpen(false)
        onClose()
    }

    function handleEventTrigger(eventType) {
        if (eventType === 'hover') {
            const handleEvent = {
                onMouseOver: (e) => {
                    if (timer.current) {
                        clearTimeout(timer.current)
                    }
                    setOn()

                },
                onMouseOut: (e) => {
                    timer.current = setTimeout(() => {
                            setOff()
                        }
                        , 200)
                }
            }

            return handleEvent;

        }
        const eventName = `on${capitalize(eventType)}`;

        if (eventType === 'contextMenu') {

            return {
                onContextMenu: (e) => {
                    e.preventDefault();
                    setOn()
                }
            }
        }

        return {
            [eventName]: (e) => {
                if (open) {
                    setOff()
                } else {
                    setOn()
                }
            },
        }
    }

    useEffect(() => {
        getPopover();
        window.addEventListener('click', handleWindowClick);
        return () => {
            window.removeEventListener('click', handleWindowClick);
            document.body.removeChild(wrapperRef.current);
        }
    }, []);


    useEffect(() => {
        handleShow();
        handleAnimation();
    }, [open]);

    useEffect(() => {
        if (props.open) {
            setOn()
        } else {
            setOff()
        }
    }, [props.open])

    useEffect(()=>{
        renderPopover()
    },[props.content])

    const option = {
        ref: triggerRef,
        ...handleEventTrigger(trigger)

    };


    return React.cloneElement(triggerNode, option);
}

export default Popover;