import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import './TreeNode.sass'
import Icon from "../icon";

TreeNode.propTypes = {};

const getIcon = (icon,data)=>{
    if(icon == null)return null;
    let treeIcon = null;
    if(typeof icon === 'string'){
        treeIcon = icon
    }
    if(typeof icon === 'function'){
        treeIcon = icon(data)
    }
    return treeIcon
};

function TreeNode(props) {
    const {data,icon} = props;
    const {title, children} = data;
    const [open, setOpen] = useState(true);
    if(data.open == null){
        data.open = open;
    }


    useEffect(() => {
        if (data.open != null && data.open !== open) {
            setOpen(data.open)
        }
    }, [data.open])

   const treeIcon = getIcon(icon,data);
    console.log(treeIcon,data.open)

    return (
        <ul className={'bxer-tree-node'}>
            <div className={'bxer-tree-node__content'} onClick={() => {
                data.open = !open;
                setOpen(!open);
            }}>
                <div className={'bxer-tree-node__content__icon'}>{treeIcon && <Icon type={treeIcon}></Icon>}</div>
                <div className={'bxer-tree-node__content__title'}>
                    {title}
                </div>
            </div>
            {open && <li className={'bxer-tree-node__children'}>
                {children && children.map(child => <TreeNode
                    data={child} icon={icon}/>)}
            </li>}

        </ul>
    );
}

export default TreeNode;