import React,{useState} from 'react';
import PropTypes from 'prop-types';
import Input from "../input";
import Button from "../button";

SearchInput.propTypes = {
    /**
     * value 值
     */
    value:PropTypes.string,
    /**
     * 搜索回调
     */
    onSearch:PropTypes.func,
    /**
     * 改变回调
     */
    onChange:PropTypes.func,
};

function SearchInput(props) {
    const {onChange,onSearch} = props;
    const [value, setValue] = useState('');
    return (
        <div className={'bxer-search-input'}>
            <Input value={value} onChange={(value)=>{
                setValue(value);
                onChange(value);
            }}/>
            <Button icon={'search-line'}
            onClick={()=>{
                onSearch(value)
            }}/>
        </div>
    );
}

export default SearchInput;
