import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import { useRef } from 'react';
import MarkdownIt from 'markdown-it';

MarkdownEditer.propTypes = {
  
};

let md = new MarkdownIt();



function MarkdownEditer(props) {
    const [markText, setMarkText] = useState('')
    console.log(markText)
    return (
        <div style={{display:'flex'}}>
            <div style={{border:'1px solid',width:'50%'}} contenteditable="true" onInput={(e)=>{setMarkText(e.target.innerText)}}> </div>
            <div style={{border:'1px solid',width:'50%'}} dangerouslySetInnerHTML={{__html:md.render(markText)}}></div>
        </div>
    );
}

export default MarkdownEditer;

