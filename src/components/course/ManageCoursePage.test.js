//this is tests for redux on ManageCourse page before class there is added export
//keyword and inport is change to form  { ManageCoursePage }
import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { ManageCoursePage } from './ManageCoursePage';

describe('Manage Course Page', () => {
  it('sets error message when trying to save empty title', () => {
    const props = {
      authors:[],
      actions: { saveCourse: () => {return Promise.resolve();}}, // TypeError: Cannot read property 'saveCourse' of undefined
      course: {
        id: '',
        watchHref:'',
        title: '',
        authorId: '',
        length: '',
        category:''}
    };
    const wrapper = mount(<ManageCoursePage {...props}/>);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
  });
});
