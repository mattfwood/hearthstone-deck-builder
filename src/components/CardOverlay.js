import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';

const CardOverlay = ({ card, visible }) => (
  <Modal visible={visible}>
    <div className="card-overlay">
      <div className="card-name">{card.name || ''}</div>
      <div className="card-image">
        <img src={`https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${card.id}.png`} alt={card.name} />
      </div>
      <div className="card-flavor-text">{card.flavor || ''}</div>
    </div>
  </Modal>
);

CardOverlay.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    flavor: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  visible: PropTypes.bool.isRequired,
};

export default CardOverlay;
