import React from 'react';
import App from '../src/components/app';
import Header from '../src/components/common/header';
import SearchView from '../src/components/views/search-view/search-view';
import Adapter from 'enzyme-adapter-react-14';
import Enzyme, {shallow, mount} from 'enzyme';
import {expect} from 'chai';

Enzyme.configure({adapter: new Adapter()});

describe('<App />', () => {
  const wrapper = mount(<App />);

  it('should load without exploding', () => {
    expect(wrapper).to.not.be.null;
  });

  it('should have a header', () => {
    expect(wrapper.find(Header)).to.have.length(1);
  });

  it('should default to the search page', () => {
    expect(wrapper.find(SearchView)).to.have.length(1);
  });
});

