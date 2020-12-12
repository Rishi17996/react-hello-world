import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
             isLoggedIn: false
        }
    }


    render() {

      // Short circuit operator (for something or nothing, a special case of Ternary)
      return (
        this.state.isLoggedIn && (<div>Welcome Rishi</div>)
      )

      // Ternary conditional operator
      // return (
      //   this.state.isLoggedIn ? (<div>Welcome Rishi</div>) : (<div>Welcome Guest</div>)
      // )


      // Element variables
      // let message
      // if (this.state.isLoggedIn) {
      //   message = <div>Welcome Rishi</div>
      // } else {
      //   message = <div>Welcome Guest</div>
      // }
      //
      // return <div>{message}</div>


      // if/else
      // if (this.state.isLoggedIn) {
      //   return  <div>Welcome Rishi</div>
      // } else {
      //     return <div>Welcome Guest</div>
      // }

      // normal return
      // return (
      //   <div>
      //     <div>Welcome Rishi</div>
      //     <div>Welcome Guest</div>
      //   </div>
      // )
    }
}

export default UserGreeting
