import React from 'react';
import PropTypes from 'prop-types';
import './index.sass'
Spin.propTypes = {

};

function Spin(props) {
    const {children} = props;
    return (
        <div className={'bxer-spin'}>
            <div className={'bxer-spin__loading'}>
                <div className={'bxer-spin__circle-group'}>
                    <div className={'bxer-spin__circle bxer-spin__circle-1'}></div>
                    <div className={'bxer-spin__circle bxer-spin__circle-2'}></div>
                    <div className={'bxer-spin__circle bxer-spin__circle-3'}></div>
                </div>
            </div>

        <div className={'bxer-spin__content'}>
            {children}
        </div>
        </div>
    );
}

export default Spin;