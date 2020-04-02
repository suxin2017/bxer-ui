import React, {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.sass';

Tabs.propTypes = {
    /**
     * 当前激活面板
     */
    activeKey:PropTypes.any,
    /**
     * 面板改变事件
     */
    onChange:PropTypes.func,
    /**
     * 默认面板的key
     */
    defaultActiveKey:PropTypes.any,
};

function Tabs(props) {
    const {children,activeKey:propActiveKey,defaultActiveKey,onChange} = props;
    const [activeKey, setActiveKey] = useState('');
    const tabHeaders = [];
    let injectChildren = getInjectChildren(activeKey);


    function getInjectChildren(key){
        return React.Children.map(children,tabPane => {
            const {props:tabProps} = tabPane;
            const {tabName,value=''} = tabProps;
            tabHeaders.push({
                tabName,value
            });
            const childProps = {
                active: key === value,
            };
            return React.cloneElement(tabPane, childProps);
        });
    }

    useEffect(() => {
        if(defaultActiveKey){
            setActiveKey(defaultActiveKey)
        }
    }, []);


    useEffect(() => {
        if(propActiveKey){
            setActiveKey(propActiveKey)
        }
    }, [propActiveKey]);


    return (
        <div className={'bxer-tabs'}>
            <div className="bxer-tabs__header">
                <ul className="bxer-tabs__header__menu">
                    {tabHeaders.map(({value,tabName})=>{
                        return <li key={value}
                                   className={
                            classNames('bxer-tabs__header__menu-item',{
                                "bxer-tabs__header__menu-item-active":activeKey===value
                            })
                        }
                            onClick={()=>{
                                onChange(value);
                                setActiveKey(value);
                            }}
                        >
                            {tabName}
                        </li>
                    })}
                </ul>
            </div>
            <div className="bxer-tabs__content">
                {injectChildren}
            </div>

        </div>
    );
}

export default Tabs;
