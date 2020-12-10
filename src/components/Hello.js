import React from 'react';

const Hello = () => {
  // return (
  //   <div>
  //     <h1> Hello Rishi! </h1>
  //   </div>
  // )

  return React.createElement(
    'div',
    {id: 'hello', className: 'dummyClass'}, 
    React.createElement('h1', null,'Hello Rishi!!'));
};

export default Hello;
