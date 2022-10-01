import React from 'react';

function Card(props) {
  const { title, url } = props;
  return (
    <div>
      <div
        className="cardProject"
      >
        <h3>{ title }</h3>
        <link
          rel="stylesheet" 
          href={ url }
        >
          Clica aqui, rapidinho.
        </link>
      </div>
    </div>
  )
}

export default Card;
