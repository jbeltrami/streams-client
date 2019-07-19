import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ title, content, actions, onDismiss }) =>
  ReactDOM.createPortal(
    // eslint-disable-next-line
    <div
      onClick={onDismiss}
      className="ui dimmer modals visible active"
    >
      {/* eslint-disable-next-line */}
      <div
        className="ui standard modal visible active"
        onClick={e => e.stopPropagation()}
      >
        <div className="header">{title}</div>
        <div className="content">{content}</div>
        <div className="actions">{actions}</div>
      </div>
    </div>,
    document.getElementById('modal')
  );

export default Modal;
