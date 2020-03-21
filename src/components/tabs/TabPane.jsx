import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './TabPane.sass';

TabPane.propTypes = {
    tabName:PropTypes.string,
    key:PropTypes.any,
    active:PropTypes.bool,
};

function TabPane(props) {
    const {children,active} = props;
    const tabPaneClassName = classNames("bxer-tab__pane",{
        "bxer-tab__pane-active":active
    })
    return (
        <div className={tabPaneClassName}>
            {children}
        </div>
    );
}

export default TabPane;