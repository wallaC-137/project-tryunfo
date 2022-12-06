import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  render() {
    const { inputFilter, selectFilter } = this.props;
    return (
      <div>
        <input
          type="text"
          name="nameFilter"
          id="card-name"
          data-testid="name-filter"
          onChange={ inputFilter }
        />
        <select
          name="selectFilter"
          id="select-filter"
          value={ selectFilter }
          onChange={ inputFilter }
          data-testid="rare-filter"
        >
          <option value="todas">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
      </div>
    );
  }
}

Filter.propTypes = {
  selectFilter: PropTypes.string,
  inputFilter: PropTypes.func,
}.isRequired;

export default Filter;
