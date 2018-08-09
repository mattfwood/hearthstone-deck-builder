import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import CollectionView from '../components/CollectionView';
import cards from '../data/cards.json';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CollectionView />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should show 8 cards', () => {
  const component = mount(<CollectionView />);

  expect(component.find('.card-image').length).toEqual(8);
});

it('should not be able to go to previous page', () => {
  const component = mount(<CollectionView />);

  expect(component.find('Button.left-arrow').prop('disabled')).toEqual(true);
});

it('should be able to go to next page', () => {
  const component = mount(<CollectionView />);

  // Get cards from first page
  const firstPageCards = component.find('.card-image img').map(card => card.prop('alt'));

  expect(component.find('Button.right-arrow').prop('disabled')).toEqual(undefined);
  expect(component.state('page')).toEqual(0);

  // advance to next page
  component.find('Button.right-arrow').simulate('click');
  expect(component.state('page')).toEqual(1);

  const secondPageCards = component.find('.card-image img').map(card => card.prop('alt'));

  const duplicateCards = secondPageCards.map(card => firstPageCards.includes(card)).includes(true);

  expect(duplicateCards).toEqual(false);

  // should now be able to go back one page
  expect(component.find('Button.left-arrow').prop('disabled')).toEqual(false);
  component.find('Button.left-arrow').simulate('click');
  expect(component.state('page')).toEqual(0);
});

it('should be able to click on card for detailed view', () => {
  const component = mount(<CollectionView />);

  component
    .find('.card-image')
    .at(0)
    .simulate('click');

  const overlay = component.find('.card-overlay');

  expect(overlay.exists()).toEqual(true);
  expect(overlay.find('.card-name').exists()).toEqual(true);
  expect(overlay.find('.card-name').text().length).toBeGreaterThan(0);
  expect(overlay.find('.card-name').text()).toEqual(cards[0].name);
  expect(overlay.find('.card-flavor-text').text()).toEqual(cards[0].flavor);
});
