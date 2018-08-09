import React, { Component } from 'react';
import styled from 'styled-components';
import cards from './data/cards.json';
import CollectionView from './components/CollectionView';
import DeckView from './components/DeckView';

const Styles = styled.div`
  .App {
    text-align: center;
  }

  .App-header {
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
  }
`;

class App extends Component {
  render() {
    return (
      <Styles>
        <div className="App">
          <CollectionView />
          <DeckView />
        </div>
      </Styles>
    );
  }
}

export default App;
