import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.sass';

Tabs.propTypes = {

};

function Tabs(props) {
    const {children} = props;
    const [activeKey, setActiveKey] = useState();
    const tabHeaders = [];
    const injectChildren = React.Children.map(children,child => {
        const {tabName} = child.props;
        const {key} = child;
        tabHeaders.push({
            tabName,key
        })
        const childProps = {
            active:activeKey === key
        }
        return React.cloneElement(child,childProps)
    });


    return (
        <div className={'bxer-tabs'}>
            <div className="bxer-tabs__header">
                <ul className="bxer-tabs__header__menu">
                    {tabHeaders.map(({key,tabName})=>{
                        console.log(key,activeKey)
                        return <li key={key}
                                   className={
                            classNames('bxer-tabs__header__menu-item',{
                                "bxer-tabs__header__menu-item-active":activeKey===key
                            })
                        }
                            onClick={()=>{
                                setActiveKey(key);
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