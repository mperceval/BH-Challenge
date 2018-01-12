import React, { Component } from 'react';
import Checkbox from './components/checkbox';

const checkboxes = [
  { name: 'checkbox1', label: 'Checkbox 1', initialChecked: true,  value: 'box1' },
  { name: 'checkbox2', label: 'Checkbox 2', initialChecked: false, value: 'box2' },
  { name: 'checkbox3', label: 'Checkbox 3', initialChecked: false, value: 'box3' }
];

export default class App extends Component {

  createCheckbox = (cb) => (
    <Checkbox
      name={cb.name}
      label={cb.label}
      initialChecked={cb.initialChecked}
      value={cb.value}
      key={cb.name}
    />);

  render() {
    return checkboxes.map(this.createCheckbox);
  }
}

