import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.sass'

Spin.propTypes = {
    /**
     * 是否显示
     */
    spinning: PropTypes.bool,
};

Spin.defaultProps = {
    spinning:true
}

function Spin(props) {
    const {children, spinning} = props;

    const loadingClassName = classNames(
        'bxer-spin__loading',
        {
            'bxer-spin__loading-open': spinning,
            'bxer-spin__loading-close': !spinning
        }
    );
    const contentClassName = classNames(
        'bxer-spin__content',
        {
            'bxer-spin__content-open': spinning,
            'bxer-spin__content-close': !spinning
        }
    );
    return (
        <div className={'bxer-spin'}>
            <div className={loadingClassName}>
                <div className={'bxer-spin__circle-group'}>
                    <div className={'bxer-spin__circle bxer-spin__circle-1'}/>
                    <div className={'bxer-spin__circle bxer-spin__circle-2'}/>
                    <div className={'bxer-spin__circle bxer-spin__circle-3'}/>
                </div>
            </div>
            <div className={contentClassName}>
                {children}
            </div>
        </div>
    );
}

export default Spin;
