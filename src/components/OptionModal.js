import React from 'react';
import Modal from 'react-modal';

const OptionModal = props => {
  const { selectedModal, onRemoveModal } = props;
  return (
    <Modal
      isOpen={!!selectedModal}
      ariaHideApp={false}
      contentLabel="Selected Option"
      onRequestClose={onRemoveModal}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.75)'
        },
        content: {
          backgroundColor: '#192a56',
          color: 'white',
          textAlign: 'center',
          position: 'absolute',
          top: '40px',
          left: '40px',
          right: '40px',
          bottom: '40px',
          border: '1px solid #ccc',
          background: '#fff',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '4px',
          outline: 'none',
          padding: '20px',
          height: '220px'
        }
      }}
    >
      <h3 className="modal-title">Here are the results</h3>
      {selectedModal && (
        <p>
          Thank you for finishing the test! Your score is <span> </span>
          {selectedModal}
        </p>
      )}
      <button
        style={{ marginTop: '10px' }}
        onClick={() => {
          onRemoveModal();
        }}
        className="btn btn-primary btn-lg"
      >
        Done
      </button>
    </Modal>
  );
};

export default OptionModal;
