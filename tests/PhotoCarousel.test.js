import React from 'react';
import {shallow} from 'enzyme';
import PhotoCarousel from '../client/src/components/PhotoCarousel';

describe('Hello World test', () => {
  const wrapper = shallow(<PhotoCarousel />)
  test('Says Hello world', () => {
    expect(wrapper.text()).toEqual('Hello World!')
  })
});