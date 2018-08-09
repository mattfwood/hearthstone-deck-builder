import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'antd';
import cards from '../data/cards.json';
import Filters from './Filters';

const CollectionStyles = styled.div`
  width: 80%;
  position: relative;
  padding-left: 20px;
  padding-right: 20px;

  .page-arrow {
    position: absolute;
    top: 50%;
  }

  .left-arrow {
    left: 5px;
  }

  .right-arrow {
    right: 5px;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  align-content: center;
  justify-content: center;

  .card-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

class CollectionView extends Component {
  state = {
    page: 0,
    filters: {
      mana: null,
      class: null,
      query: null,
    },
  };

  changePage = direction => {
    const { page } = this.state;
    if (direction === 'next') {
      this.setState({ page: page + 1 });
    }

    if (direction === 'prev' && page > 0) {
      this.setState({ page: page - 1 });
    }
  };

  changeFilters = (type, value) => {
    const { filters } = this.state;
    if (type === 'mana') {
      console.log({ type, value });
      filters.mana = parseInt(value, 10);
      this.setState({
        filters,
      });
    }
  };

  render() {
    const { page, filters } = this.state;

    const filteredCards = cards.filter(card => {
      if (filters.mana !== null) {
        if (filters.mana === 9) {
          return card.cost >= filters.mana;
        }
        return card.cost === filters.mana;
      }

      return card;
    });

    const visibleCards = filteredCards.slice(page * 8, page * 8 + 8);
    return (
      <CollectionStyles>
        <Filters changeFilters={this.changeFilters} />
        <Button
          type="primary"
          shape="circle"
          icon="left"
          size="large"
          tabIndex={0}
          className="page-arrow left-arrow"
          onClick={() => this.changePage('prev')}
          disabled={page === 0}
        />
        <CardGrid>
          {visibleCards.map(card => (
            <div className="card-image">
              <img src={`https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${card.id}.png`} alt={card.name} />
            </div>
          ))}
        </CardGrid>
        <Button
          type="primary"
          shape="circle"
          icon="right"
          size="large"
          tabIndex={0}
          className="page-arrow right-arrow"
          onClick={() => this.changePage('next')}
        />
      </CollectionStyles>
    );
  }
}

CollectionView.propTypes = {};

export default CollectionView;