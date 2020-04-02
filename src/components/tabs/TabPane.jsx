import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './TabPane.sass';

TabPane.propTypes = {
    /**
     * tab 的 标题名可以放任何东西
     */
    tabName:PropTypes.any,
    /**
     * 是否是激活状态
     */
    active:PropTypes.bool,
};

TabPane.defaultProps = {
    active:false,
};

function TabPane(props) {
    const {children,active} = props;
    const tabPaneClassName = classNames("bxer-tab__pane",{
        "bxer-tab__pane-active":active
    });
    return (
        <div className={tabPaneClassName}>
            {children}
        </div>
    );
}

export default TabPane;
