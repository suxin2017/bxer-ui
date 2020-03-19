import React, {useState} from 'react';
import {get, set} from "./util";
function Form(props) {
    const {children} = props;
    const [data,setData] = useState({});

    const injectFormItem = React.Children.map(children,formItem=>{
        const {dataKey=''} = formItem.props;
        return React.cloneElement(formItem,{
            value:get(data,dataKey),
            onChange:(value)=>{
                const newData = set(data,dataKey,value);
                setData(newData)
            }
        })
    });



    return (
        <form onSubmit={(e)=>{e.preventDefault()
            console.log(data)
            props.onSubmit && props.onSubmit(data);
        }}>
            {injectFormItem}
        </form>
    );
}

export default Form;