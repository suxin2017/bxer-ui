import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.sass';
import Icon from "../icon";

Message.propTypes = {
    message: PropTypes.string,
    type: PropTypes.oneOf(['success', 'error', 'info'])
};

const messageIconMap = {
    success: <Icon type={'checkbox-circle-fill'}/>,
    error: <Icon type={'error-warning-fill'}/>,
    info: <Icon type={'information-fill'}/>
}

function Message({message, type, closed}) {
    const iconClassName = classNames('bxer-message__icon', `bxer-message__icon-${type}`);
    const messageClassName = classNames('bxer-message', {
        'bxer-message-open': !closed,
        'bxer-message-close': closed,
    });
    console.log(message)
    return (
        <div className={messageClassName}>
            <span className={iconClassName}>
                {messageIconMap[type]}
            </span>
            <span className={'bxer-message__content'}>
                {message}
            </span>
        </div>
    );
}


let render = (props) => {
    const messageWrapper = document.createElement('div');
    document.body.appendChild(messageWrapper)
    const messageQueue = [];

    const task = (props,flag) => {
        const {duration = 500, ...otherProps} = props;

        // 打开
        ReactDOM.render(<Message {...otherProps}/>, messageWrapper);

        setTimeout(() => {
            // 关闭
            ReactDOM.render(<Message closed {...otherProps}/>, messageWrapper);
            setTimeout(() => {
                // 下一个任务
                let head = messageQueue.shift();
                if(flag){
                    head = messageQueue.shift();
                }
                head && render(head, true);
            }, duration)
        }, duration);
    }

    render = (nextProps, isCore) => {
        const queueIsEmpty = messageQueue.length === 0;
        if (!isCore) {
            messageQueue.push(nextProps);
            console.log('点击执行', nextProps,messageQueue)
        }

        // 第一次启动非内部调用
        if (!isCore && queueIsEmpty) {
            task(nextProps,true);
        }

        // 内部调用
        if (isCore) {
            task(nextProps);
        }

    };


    render(props);
};


export const message = {
    success: (message) => {
        console.log(123)
        render({
            message: message,
            type: 'success',
        })
    },
    info: (message) => {
        render({
            message: message,
            type: 'info',
        })
    },
    error: (message) => {
        render({
            message: message,
            type: 'error',
        })
    }
}

export default Message;