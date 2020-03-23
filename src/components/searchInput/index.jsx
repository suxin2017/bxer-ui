import React from 'react';
import PropTypes from 'prop-types';
import Input from "../input";
import Icon from "../icon";
import Button from "../button";

SearchInput.propTypes = {

};

function SearchInput(props) {
    return (
        <div className={'bxer-search-input'}>
            <Input/>
            <Button icon={'search-line'}/>
        </div>
    );
}

export default SearchInput;