import React, {useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.sass'
import Icon from "../icon";
Modal.propTypes = {

};

function Modal(props) {

    const {lock,children,subCount=0,onOpen=()=>{}} = props;
    const [open, setOpen] = useState(false);
   const containerRef=  useRef();


    useEffect(()=>{
        containerRef.current = document.createElement('div')
        document.body.appendChild(containerRef.current)
    },[])


    useEffect(()=>{
        setOpen(props.open);
        onOpen(open)
    },[props.open])

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
                         style={ {transform: subCount && `translateY(-${20*subCount}px)`}}
                    >
                        <div className={classNames(
                            'bxer-modal__header'
                        )}>
                            <div className={'bxer-modal__header-title'}>header</div>
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


    return null
}

export default Modal;