import React from 'react';
import PropTypes from 'prop-types';

Timeline.propTypes = {

};


function Timeline({children,...other}) {
    return (
        <div className={'bxer-timeline'} {...other}>
            {children}
        </div>
    );
}

export default Timeline;
