// Stateless Functional Component

import React from 'react';

// normal function
// function Greet() {
//   return <h1>Hello Rishi</h1>
// }

// ES6 function
// const Greet = ({name, hero, children}) => {
//   return (
//     <div>
//       <h1>
//         Hello {name} a.k.a {hero}
//       </h1>
//       {children}
//     </div>
//   )
// }

const Greet = (props) => {
  const {name, hero, children} = props
  return (
    <div>
      <h1>
        Hello {name} a.k.a {hero}
      </h1>
      {children}
    </div>
  )
}
export default Greet;
