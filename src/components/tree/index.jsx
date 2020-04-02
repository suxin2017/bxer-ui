import React,{useReducer,useEffect} from 'react';
import PropTypes from 'prop-types';
import TreeNode from "./TreeNode";
import {expandType, reducer} from "./util";

Tree.propTypes = {
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
     * 点击选中事件
     */
    onSelect: PropTypes.func,

    /**
     * 选中的reducer
     */
    selected: PropTypes.array,

    /**
     * 展开方式
     * 点击icon展开
     * 点击title展开
     * 点击节点展开
     * */
    expandType: PropTypes.oneOf([expandType.all, expandType.title, expandType.icon])

};




function Tree(props) {
    const {data,selectedKeys,icon,expandType,onSelect,...other} = props;
    const selectedReducer = useReducer(reducer, [],()=>[]);

    useEffect(() => {
        if(selectedKeys){
            const [_,dispath] = selectedReducer;
            dispath({type:'all',selectedKeys})
        }
    }, [selectedKeys]);


    useEffect(()=>{
        if(onSelect){
            onSelect(selectedReducer[0])
        }
    },[selectedReducer[0]]);

    return (
        <div {...other}>
            {data.map(item=><TreeNode
                expandType={expandType}
                selectedReducer={
                selectedReducer
            } data={item} icon={icon}/>)}
        </div>
    );
}

export default Tree;
