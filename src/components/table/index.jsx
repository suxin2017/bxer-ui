import React from 'react';
import PropTypes from 'prop-types';
import './index.sass';

Table.propTypes = {
    /**
     * 列的定义
     *
     * dataKey: 匹配数据的key
     *
     * render: 渲染的回调
     *
     * `render:(value,index,item)=>{`
     *
     * `// value 和 datakey 返回的value`
     *
     * `// index 当前数据索引`
     *
     * `// item 当前行`
     *
     * `    reutrn any`
     *
     * `}`
     *
     * width: 列的宽度 100px 100em 100rem 100%...
     */
    columns:PropTypes.arrayOf(PropTypes.shape({
        dataKey:PropTypes.string,
        render:PropTypes.func,
        width:PropTypes.number
    })),

    /**
     * 数据
     */
    data:PropTypes.array
};

function Table(props) {
    const {columns,data} = props;
    return (
        <table className={'bxer-table'}>
            <colgroup>
                {columns.map(item=><col width={item.width} key={item.dataKey}/>)}
            </colgroup>
            <thead>
            <tr>
                {columns.map(item=><th key={item.dataKey}>{item.title}</th>)}
            </tr>
            </thead>
            <tbody>
            {data.map((dItem,index)=>{
                return <tr key={dItem.id}>
                    {columns.map(cItem=>{
                        return <td key={cItem.dataKey}>
                            {cItem.render?
                                cItem.render(dItem[cItem.dataKey],index,dItem)
                                :
                                dItem[cItem.dataKey]}</td>
                    })}
                </tr>
            })}
            </tbody>
        </table>
    );
}

export default Table;
