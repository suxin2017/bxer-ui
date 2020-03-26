import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {withKnobs, text, boolean, number} from "@storybook/addon-knobs";

import Icon from "../components/icon";
import Modal from "../components/modal";
import Button from "../components/button";

export default {
    component: Modal,
    title: 'Modal',
    excludeStories: /.*Data$/,
    decorators: [withKnobs]
}

export const 基本用法 = () => {
    const [open, setOpen] = useState(false);
    return <div>
        <Modal
            title={'header'}
            open={open}
            onClose={() => {
                setOpen(false)
            }}
        >body</Modal>
        <Button onClick={() => {
            setOpen(!open)
        }}>基础modal</Button>
    </div>
}

export const 嵌套 = () => {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);

    return <div>
        <Modal open={open} onClose={() => {
            setOpen(false)
        }
        }
               title={'header'}
               hasChildModal
        >
            <Modal open={open1} onClose={() => {
                setOpen1(false)
            }
            }
                   title={'header'}

            >body</Modal>
            <Button onClick={() => {
                setOpen1(!open1)
            }}>基础modal</Button>
        </Modal>
        <Button onClick={() => {
            setOpen(!open)
        }}>基础modal</Button>
    </div>
}
