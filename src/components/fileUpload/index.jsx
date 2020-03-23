import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import Button from "../button";
import Icon from "../icon";
import './index.sass'
const imageReg = /\.(jpe?g|png|gif)$/i;

FileUpload.propTypes = {

};

function FileUpload(props) {

    const fileRef = useRef(null);

    const [files,setFiles] = useState([]);

    const handleUploadClick = ()=>{
        const {current} = fileRef;
        current.click();
    };
    const handleUploadChange = ()=>{
        const {current} = fileRef;
        const fileList = current.files;
        const promiseList = [];
        fileList.forEach((file)=>{
            if(imageReg.test(file.name)){
                const reader = new FileReader();
                reader.readAsDataURL(file);
                const task = new Promise((resolve, reject)=>{
                    reader.addEventListener('load',()=>{
                        file.src = reader.result;
                        resolve()
                    })
                });
                promiseList.push(task)
            }
        });
        Promise.all(promiseList).then(()=>{
            setFiles(Array.from(fileList))
        });
    }
    return (
        <div className={"bxer-upload"}>
            <input ref={fileRef} type={'file'}
                   style={{display:'none'}}
                   onChange={handleUploadChange}
                   multiple/>
            <Button onClick={handleUploadClick}>文件上传</Button>
            <div>
                { files.map((file,index)=>{
                    return <div key={file.name}>
                        <span>{file.name}</span>
                        <span onClick={()=>{
                            files.splice(index,1);
                            setFiles([...files])
                        }} className={'bxer-upload__files-icon'}>
                            <Icon type={'delete-bin-6-line'}/></span>
                    </div>
                })}
            </div>
        </div>
    );
}

export default FileUpload;