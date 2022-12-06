import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  render() {
    const { inputFilter } = this.props;
    return (
      <input
        type="text"
        name="card-name"
        id="card-name"
        data-testid="name-filter"
        onChange={ inputFilter }
      />
    );
  }
}

Filter.propTypes = {
  inputFilter: PropTypes.func.isRequired,
};

export default Filter;
