import React from 'react';

function Button(props) {
  const { onClick, className, value } = props;
  return (
    <div>
      <button
        type='button'
        onClick={ onClick }
        className={ className }
      >
        {value}
      </button>
    </div>
  )
}

export default Button