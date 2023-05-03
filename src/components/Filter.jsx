import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  render() {
    const { inputFilter, selectFilter, trunfoFilter } = this.props;
    return (
      <div>
        <input
          type="text"
          name="nameFilter"
          id="card-name"
          data-testid="name-filter"
          onChange={ inputFilter }
          disabled={ trunfoFilter }
        />
        <select
          name="selectFilter"
          id="select-filter"
          value={ selectFilter }
          onChange={ inputFilter }
          data-testid="rare-filter"
          disabled={ trunfoFilter }
        >
          <option value="todas">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <label htmlFor="trunfo-filter">
          Super Trunfo
          <input
            type="checkbox"
            checked={ trunfoFilter }
            name="trunfoFilter"
            id="trunfo-filter"
            data-testid="trunfo-filter"
            onChange={ inputFilter }
          />
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  inputFilter: PropTypes.func,
  selectFilter: PropTypes.string,
  trunfoFilter: PropTypes.bool,
}.isRequired;

export default Filter;
