import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.sass'
import Icon from "../icon";

Pagination.propTypes = {
    /**
     * 每个包含多少条
     */
    pageSize: PropTypes.number,
    /**
     * 数据总条数
     */
    dataTotal: PropTypes.number.isRequired,
    /**
     * 当前页 大于1
     */
    current: PropTypes.number,
    /**
     * 页面改变回调
     */
    onChange: PropTypes.func,
};

Pagination.defaultProps = {
    pageSize: 10,
};

function Pagination(props) {
    const {pageSize, dataTotal,onChange:propOnChange,current: propCurrent} = props;
    const [current, setCurrent] = useState(1);

    const maxShowLimit = 3;

    useEffect(() => {
        if(propCurrent){
            setCurrent(propCurrent);
        }
    }, [propCurrent]);

    function onChange(e) {
        if (typeof e === 'number') {
            setCurrent(e);
            propOnChange(e)
        } else {
            const {dataset} = e.target;
            const {value} = dataset;
            const transValue = Number(value);
            if (!isNaN(transValue)) {
                setCurrent(transValue)
                propOnChange(transValue)
            }
        }
    }

    function getPageItem(dataTotal, pageSize) {
        const pagesLength = Math.ceil(dataTotal / pageSize)
        if (isNaN(pagesLength)) return;
        const lis = [];
        const start = current - 1;
        const end = start + maxShowLimit;
        const prevDot = <li key={'prev-dot'}>...</li>;
        const nextDot = <li key={"next-dot"}>...</li>;
        const isSelected = (index) => classNames({
            'bxer-pagination__selected': index === current
        });
        const prevDisable =
            classNames({
                'bxer-pagination__disable': current === 1,
            });
        const nextDisable =
            classNames({
                'bxer-pagination__disable': current === pagesLength,
            });

        const createLi = (key, index) => {
            return <li key={key}
                       data-value={index}
                       className={isSelected(index)}>{index}</li>
        };

        const prev = <li key={'prev'}
                         onClick={() => {
                             onChange(current - 1)
                         }}
                         className={prevDisable}>
            <Icon type={'arrow-left-s-line'}/></li>;

        const next = <li key={'next'}
                         onClick={() => {
                             onChange(current + 1)
                         }}
                         className={nextDisable}><Icon
            type={'arrow-right-s-line'}/></li>;

        lis.push(prev);

        if (pagesLength > 0) {
            // 第一个
            lis.push(createLi('frist', 1))
        }


        // 在中间的时候
        if (start >= maxShowLimit && end < pagesLength) {
            lis.push(prevDot);
            for (let i = start; i < end; i++) {
                lis.push(createLi(i % 3, i))
            }
            lis.push(nextDot);

        } else if (start < maxShowLimit) {
            // 在头的时候
            let i = 2;
            for (; i < 2 + maxShowLimit && i <= pagesLength; i++) {
                lis.push(createLi(i % 3, i))
            }
            if (pagesLength - i + 1 >= 2) {
                lis.push(nextDot);
            }
        } else if (end >= pagesLength) {
            // 焦点在尾部的时候
            lis.push(prevDot);
            for (let i = maxShowLimit; i > 0; i--) {
                lis.push(createLi(i % 3, pagesLength - i))
            }
        }

        if (pagesLength > maxShowLimit + 1) {
            // 最后一个
            lis.push(createLi('last', pagesLength))
        }

        lis.push(next);
        return lis
    }


    return (
        <ul className={'bxer-pagination'} onClick={(e) => {
            onChange(e)
        }}>
            {getPageItem(dataTotal, pageSize)}
        </ul>
    );
}


export default Pagination;
