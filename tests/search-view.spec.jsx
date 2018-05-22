import React from 'react';
import SearchView from '../src/components/views/search-view/search-view';
import Adapter from 'enzyme-adapter-react-14';
import Enzyme, {shallow, mount} from 'enzyme';
import {expect} from 'chai';

Enzyme.configure({adapter: new Adapter()});

describe('<SearchView />', () => {
  const wrapper = mount(<SearchView />);


});

