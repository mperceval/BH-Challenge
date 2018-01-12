import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from './index';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Checkbox name='test-checkbox' label='Test Label' value='test-value' initialChecked={true} />);
});

it('renders a checkbox', () => {
  expect(wrapper).toMatchSnapshot();
});

it('sets the initial props on the component', () => {
  const { props } = wrapper.instance();
  expect(props.label).toEqual('Test Label');
  expect(props.value).toEqual('test-value');
  expect(props.name).toEqual('test-checkbox');
});

it('sets the initial state on the component', () => {
  const { state } = wrapper.instance();
  expect(state.checked).toEqual(true);
});

it('updates state if component is clicked', () => {
  const checkbox = wrapper.find('[type="checkbox"]');
  checkbox.simulate('change');
  const { state } = wrapper.instance();
  expect(state.checked).toEqual(false);
});
