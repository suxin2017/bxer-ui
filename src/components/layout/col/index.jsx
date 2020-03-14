import React, {useContext} from 'react';
import classNames from 'classnames';
import './index.sass';

import PropTypes from 'prop-types';
import LayoutConfig from "../LayoutConfigContext";

Col.propTypes = {
    span: PropTypes.number,
    lg: PropTypes.number,
    md: PropTypes.number,
    sm: PropTypes.number,
    xs: PropTypes.number
};


function Col({children, span, md, lg, sm, xs,style,className,...other}) {
    const layoutConfig = useContext(LayoutConfig);
    const {gutter} = layoutConfig;

    const cn = classNames(
        'bxer-col',
         {
            [`bxer-col--span-${span}`]:span,
            [`bxer-col--lg-${lg}`]: lg,
            [`bxer-col--md-${md}`]: md,
            [`bxer-col--sm-${sm}`]: sm,
            [`bxer-col--xs-${xs}`]: xs,
        },
        className
    );

    const styles = {
        paddingRight:gutter,
        paddingLeft:gutter,
    ...style
    }

    return (
        <div className={cn} style={styles}  {...other}>
            {children}
        </div>
    );
}

export default Col;