import React from 'react';
import './index.sass';

Table.propTypes = {

};

function Table(props) {
    const {columns,data} = props;
    return (
        <table className={'bxer-table'}>
            <colgroup>
                {columns.map(item=><col key={item.dataKey}/>)}
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