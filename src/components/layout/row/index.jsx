import React from 'react';
import classNames from 'classnames';
import './index.sass';

import PropTypes from 'prop-types';
import LayoutConfig from "../LayoutConfigContext";

Row.propTypes = {
    /**
     * col 之间的间距
     */
    gutter:PropTypes.number,
    /**
     * 流布局 不需要指定col的span
     */
    fluid:PropTypes.bool,
};

/**
 * #### Row
 *   gutter 间距
 *   -
 *
 * #### Col
 *
 */
function Row({children,gutter,className,fluid,style}) {
    const cn = classNames(
        'bxer-row',
        {'bxer-row--fluid':fluid},
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
