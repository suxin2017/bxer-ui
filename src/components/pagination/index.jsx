import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Col} from "../layout";

Pagination.propTypes = {

};



function Pagination(props) {
    const {pageSize=10,dataTotal=200}=props;
    const [current, setCurrent] = useState(1);
    const maxDisplayPage = 5;

    const leftLimit = 2;
    const rightLimit = 2;
    const maxShowLimit = 5;



    function getPageItem(dataTotal,pageSize){
        const pagesLength = Math.ceil(dataTotal/pageSize);
        const lis = [];
        const start = current > leftLimit ? current - leftLimit : current;
        const end = start + maxShowLimit;
        for (let i = start;i < end  ;i++){
            lis.push(<li key={i} onClick={()=>{
                setCurrent(i)
            }}>
                {i}
            </li>)
        }
        if(pagesLength-start>maxShowLimit)
        return lis
    }

    return (
        <ul>
            {getPageItem(dataTotal,pageSize)}
        </ul>
    );
}

export default Pagination;