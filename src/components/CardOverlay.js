import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import styled from 'styled-components';

const OverlayStyles = styled.div`
  .card-image {
    display: flex;
    justify-content: center;
  }

  .card-flavor-text {
    text-align: center;
    font-style: italic;
    /* text-transform: italics; */
  }
`;

const CardOverlay = ({ card, visible, close }) => (
  <Modal visible={visible} footer={null} onCancel={close} onOk={close}>
    <OverlayStyles>
      <div className="card-overlay">
        <div className="card-name">{card.name || ''}</div>
        <div className="card-image">
          <img src={`https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${card.id}.png`} alt={card.name} />
        </div>
        <div className="card-flavor-text">{card.flavor || ''}</div>
      </div>
    </OverlayStyles>
  </Modal>
);

CardOverlay.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    flavor: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  visible: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default CardOverlay;
