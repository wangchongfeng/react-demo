import React from 'react';

export function Route(props) {
  console.log(props);
  return (
    <div>
      { React.createElement(props.component) }
    </div>
  );
}