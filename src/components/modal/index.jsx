import React, {useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.sass'
import Icon from "../icon";

Modal.propTypes = {
    /**
     * 是否显示
     */
    open:PropTypes.bool,
    /**
     * 关闭回调
     */
    onClose:PropTypes.func,
    /**
     * 打开回调
     */
    onOpen:PropTypes.func,
    /**
     * 是否有子modal
     */
    hasChildModal:PropTypes.bool
};

function Modal(props) {

    const {title,children,hasChildModal=false,open:propOpen,onOpen=()=>{},onClose=()=>{}} = props;
    const [open, setOpen] = useState(false);
   const containerRef=  useRef();


    useEffect(()=>{
        containerRef.current = document.createElement('div')
        document.body.appendChild(containerRef.current)
    },[])


    useEffect(()=>{
        setOpen(propOpen);
        if(propOpen){
            onOpen(propOpen)
        }else{
            onClose(propOpen)
        }
    },[propOpen])

    if(containerRef.current){
        return ReactDOM.createPortal( <div className={classNames(
            {
                'bxer-modal__open':open,
                'bxer-modal__close':!open,
            },
            'bxer-modal',

            )}>
                <div  className={classNames(
                    'bxer-modal__background_drop'
                )}>
                    <div className={classNames(
                        'bxer-modal__dialog'
                    )}
                         style={  {top: hasChildModal && `-20px`}}
                    >
                        <div className={classNames(
                            'bxer-modal__header'
                        )}>
                            <div className={'bxer-modal__header-title'}>{title}</div>
                            <div className={'bxer-modal__header-extra'}>
                                <Icon onClick={()=>{
                                    props.onClose();
                                }} type={'close-fill'}/></div>
                        </div>
                        <div className={classNames(
                            'bxer-modal__body'
                        )}>
                            {children}
                        </div>

                    </div>

                </div>
            </div>
            ,containerRef.current)
    }


    return <></>
}

export default Modal;
