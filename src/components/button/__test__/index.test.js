import React from 'react';
import {shallow,mount} from 'enzyme';
import Button from '../index';
import Icon from "../../icon";

describe('button', () => {
    describe('渲染测试',()=>{
        it('children should render', () => {
            const button = shallow(<Button>learn react</Button>);
            expect(button.text()).toEqual('learn react');
        });
        it("children element should render",()=>{
            const button =shallow(<Button><div>213</div></Button>)
            expect(button.find('div').html()).toEqual('<div>213</div>')
        })

    })

    describe('属性测试',()=>{
        it("className size type",()=>{
            const button = shallow(<Button
                className={'test'}
                type={'minor'}
                icon={'hone-line'}
            >button</Button>)

            expect(button.prop('className')).toMatch(/test/g);
            expect(button.prop('className')).toMatch(/minor/g)
            expect(button.find(Icon)).toHaveLength(1);

        })
    })


    describe('事件测试',()=>{
        it('should click ', function () {
            const wrapper = mount(<Button onClick={(e)=>{console.log(e)}} />);
            wrapper.find('button').simulate('click');


        });
    })


});


