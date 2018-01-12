import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Checkbox.css';

class Checkbox extends Component {

  constructor(props) {
    super(props);

    const { initialChecked } = props;

    this.state = {
      checked: initialChecked
    };

    this.onCheckboxChange = this.onCheckboxChange.bind(this);
  }

  onCheckboxChange = () => {
    const { onCheckboxChange, name } = this.props;
    const { checked } = this.state;

    this.setState({ checked : !checked});

    // Call passed in handler if it exists
    onCheckboxChange && onCheckboxChange(name, checked);
  }

  render() {
    const { name, value, label } = this.props;
    const { checked } = this.state;

    return (
      <div className='checkbox'>
        <input
          id={name}
          type="checkbox"
          value={value}
          name={name}
          checked={checked}
          onChange={this.onCheckboxChange}
        />
        <label htmlFor={name}></label>
        <span className="checkbox-text-label">{label}</span>
      </div>
    );
  }
}

Checkbox.propTypes = {
  initialChecked: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onCheckboxChange:PropTypes.func
};

Checkbox.defaultProps = {
  initialChecked: false
};

export default Checkbox;