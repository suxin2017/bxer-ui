import React from 'react';
import classNames from 'classnames';
import './index.css';

import PropTypes from 'prop-types';
import LayoutConfig from "../LayoutConfigContext";

Row.propTypes = {
    gutter:PropTypes.number
};

/**
 * #### Row
 *   - gutter 间距
 *   -
 *
 * #### Col
 *
 */
function Row({children,gutter,className,style}) {
    const cn = classNames(
        'bxer-row',
        className
    );
    const styles = {
        marginRight:`-${gutter}px`,
        marginLeft:`-${gutter}px`,
        ...style
    }
    return (
        <LayoutConfig.Provider value={{gutter}} >
            <div className={cn} style={styles}>
                {children}
            </div>
        </LayoutConfig.Provider>


    );
}

export default Row;