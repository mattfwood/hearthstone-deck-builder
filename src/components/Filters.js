import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Radio } from 'antd';

export const manaCosts = ['1', '2', '3', '4', '5', '6', '7', '8', '9+'];

const FilterStyles = styled.div`
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20px, 1fr)); */

  .mana-cost {
    border-radius: 50%;
    background-color: blue;
    color: #fff;
  }
`;

const Filters = props => {
  const { changeFilters } = props;
  return (
    <FilterStyles>
      <div>Mana Cost</div>
      <Radio.Group defaultValue={null} buttonStyle="solid">
        {manaCosts.map(cost => (
          <Radio.Button value={cost} onClick={() => changeFilters('mana', cost)}>
            {cost}
          </Radio.Button>
        ))}
      </Radio.Group>
    </FilterStyles>
  );
};

Filters.propTypes = {
  changeFilters: PropTypes.func.isRequired,
};

export default Filters;
