import React from 'react';
import {shallow,mount} from 'enzyme';
import CheckBox from '../index';
import sinon from 'sinon';
import Icon from "../../icon";

describe('button', () => {
    describe('渲染测试',()=>{
        it('children should render', () => {
            const checkBox = shallow(<CheckBox >test</CheckBox>);
            expect(checkBox.text()).toEqual('test');
        });

    });




    describe('事件测试',()=>{
        it('onchange ', function () {
            const handleChange = sinon.fake();
            const checkBox = shallow(<CheckBox onChange={handleChange} >test</CheckBox>);
            checkBox.find('input').simulate('change');
            expect(handleChange.called).toEqual(true);
            expect(handleChange.firstArg).toEqual(true)
        });

        it('change check ', function () {
            const checkBox = mount(<CheckBox  checked={true}>test</CheckBox>);
            expect(checkBox.prop('checked')).toEqual(true);
            expect(checkBox.find('input').prop('checked')).toEqual(true)
            checkBox.setProps({checked:false})
            expect(checkBox.prop('checked')).toEqual(false);
            expect(checkBox.find('input').prop('checked')).toEqual(true)

        });


    })


});


