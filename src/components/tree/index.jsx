import React from 'react';
import PropTypes from 'prop-types';
import TreeNode from "./TreeNode";

Tree.propTypes = {

};

function Tree(props) {
    const {data,icon} = props;
    return (
        <div>
            {data.map(item=><TreeNode data={item} icon={icon}/>)}
        </div>
    );
}

export default Tree;