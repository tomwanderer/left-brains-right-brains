import React from 'react';

const ResetButton = props => {
  return (
    <div className="reset-btn">
      <button
        style={{ fontWeight: 'bold' }}
        onClick={() => {
          props.onReset();
        }}
        className="btn btn-primary btn-md"
      >
        Reset your test
      </button>
    </div>
  );
};

export default ResetButton;
