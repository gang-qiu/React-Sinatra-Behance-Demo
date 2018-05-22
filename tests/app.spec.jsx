import React from 'react';
import App from '../src/components/app';
import Adapter from 'enzyme-adapter-react-14';
import {expect} from 'chai';
import Enzyme, {shallow, mount} from 'enzyme';

Enzyme.configure({adapter: new Adapter()});

describe('<App />', () => {
  it('should load without exploding', () => {
    const wrapper = mount(<App />);
    expect(wrapper).to.not.be.null;
  });
})