// Stateful Class Component

import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    const {name, hero} = this.props
    const {state1, state2} = this.state
    return <h1> Welcome {name} a.k.a. {hero}</h1>
  }
}

export default Welcome;
