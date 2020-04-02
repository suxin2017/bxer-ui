import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import './TreeNode.sass'
import Icon from "../icon";
import classNames from 'classnames';
import {getIcon,expandType} from "./util";


TreeNode.propTypes = {
    /**
     * 数据title 展示内容
     * children 子节点数组数据
     */
    data: PropTypes.shape({
        title: PropTypes.any,
        children: PropTypes.array,
        key: PropTypes.any
    }),
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),


    /**
     * 选中的reducer
     */
    selectedReducer: PropTypes.func,

    /**
     * 展开方式
     * 点击icon展开
     * 点击title展开
     * 点击节点展开
     * */
    expandType: PropTypes.oneOf([expandType.all, expandType.title, expandType.icon])
};



TreeNode.defalutProps={
    expandType:'all'
};

function TreeNode(props) {
    const {data, icon, selectedReducer, expandType: propExpandType} = props;
    const [selected, dispatch] = selectedReducer;


    const {title, key: treeNodeKey, children} = data;
    const [open, setOpen] = useState(true);
    if (data.open == null) {
        data.open = open;
    }


    useEffect(() => {
        if (data.open != null && data.open !== open) {
            setOpen(data.open)
        }
    }, [data.open]);

    const treeIcon = getIcon(icon, data);

    const contentClassName = classNames(
        'bxer-tree-node__content',
        {
            'bxer-tree-node__content-selected': selected.includes(treeNodeKey),
        },
    );

    function handleExpandType(type, event) {
        const title = /title/g;
        const icon = /icon/g;
        const className = event.target.className;
        if (expandType.icon === type && title.test(className)) {
            return;
        }
        if (expandType.title === type && icon.test(className)) {
            return;
        }
        data.open = !open;
        setOpen(!open);
    }

    return (
        <ul className={'bxer-tree-node'}>
            <div className={contentClassName} onClick={(e) => {
                handleExpandType(propExpandType, e);

                dispatch({
                    value: treeNodeKey
                })
            }}>
                <div className={'bxer-tree-node__content__icon'}
                >{treeIcon &&
                <Icon type={treeIcon}/>}</div>
                <div
                    className={'bxer-tree-node__content__title'}>
                    {title}
                </div>
            </div>
            {open && <li className={'bxer-tree-node__children'}>
                {children && children.map(child => <TreeNode
                    expandType={propExpandType}
                    selectedReducer={selectedReducer}
                    data={child} icon={icon}/>)}
            </li>}
        </ul>
    );
}

export default TreeNode;
