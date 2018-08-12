import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Radio, Input } from 'antd';

export const manaCosts = ['1', '2', '3', '4', '5', '6', '7', '8', '9+'];

const { Search } = Input;

const FilterStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));

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
      <div>
        <Search placeholder="Search" onSearch={value => changeFilters('query', value)} enterButton />
      </div>
      <div>
        <div>Mana Cost</div>
        <Radio.Group defaultValue={null} buttonStyle="solid">
          {manaCosts.map(cost => (
            <Radio.Button key={cost} value={cost} onClick={() => changeFilters('mana', cost)}>
              {cost}
            </Radio.Button>
          ))}
        </Radio.Group>
      </div>
    </FilterStyles>
  );
};

Filters.propTypes = {
  changeFilters: PropTypes.func.isRequired,
};

export default Filters;
