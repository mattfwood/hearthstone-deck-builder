import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import cards from '../data/cards.json';
import Filters from './Filters';
import CardOverlay from './CardOverlay';

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
    overlayVisible: false,
    activeCard: {},
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
      filters.mana = parseInt(value, 10);
      this.setState({
        filters,
      });
    }

    if (type === 'query') {
      filters.query = value;
      this.setState({
        filters,
      });
    }
  };

  viewCard = activeCard => {
    this.setState({
      activeCard,
      overlayVisible: true,
    });
  };

  handleClose = () => {
    this.setState({
      overlayVisible: false,
    });
  };

  render() {
    const { page, filters, overlayVisible, activeCard } = this.state;

    const filteredCards = cards.filter(card => {
      let validCard = true;
      if (filters.mana !== null) {
        if (filters.mana === 9 && card.cost <= 9) {
          validCard = false;
        } else if (card.cost !== filters.mana) {
          validCard = false;
        }
      }

      if (filters.query !== null && filters.query !== '') {
        let { query } = filters;
        query = query.toLowerCase();
        let { name, text, rarity } = card;
        name = name.toLowerCase();
        text = text && text.toLowerCase();
        rarity = rarity.toLowerCase();

        const queryMatch = name.includes(query) || ((text && text.includes(query)) || rarity.includes(query));
        // if query is not in card name or text, filter it out
        if (!queryMatch) {
          validCard = false;
        }
      }

      return validCard;
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
            <div key={card.id} role="button" tabIndex={0} className="card-image" onClick={() => this.viewCard(card)}>
              <img src={`https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${card.id}.png`} alt={card.name} />
            </div>
          ))}
        </CardGrid>
        <CardOverlay card={activeCard} close={this.handleClose} visible={overlayVisible} />
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
