// import logo from './logo.svg'
import './App.css'
// import Greet from './components/Greet'
// import Welcome from './components/Welcome'
import React, { Component } from 'react'
// import Hello from './components/Hello'
// import Message from './components/Message'
// import Counter from './components/Counter'
// import FunctionClick from './components/FunctionClick'
// import ClassClick from './components/ClassClick'
// import EventBind from './components/EventBind'
// import ParentComponent from './components/ParentComponent'
// import UserGreeting from './components/UserGreeting'
// import NameList from './components/NameList'
// import Form from './components/Form'
// import LifecycleA from './components/LifecycleA'
// import FragmentDemo from './components/FragmentDemo'
// import Table from './components/Table'
import ParentComp from './components/ParentComp'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParentComp />
        {/*<FragmentDemo />*/}
        {/*<Table />*/}
        {/*s<LifecycleA />/*}
        {/*<Form />*/}
        {/*<NameList />*/}
        {/*<UserGreeting />*/}
        {/*<ParentComponent />*/}
        {/*<EventBind />*/}
        {/*<ClassClick />*/}
        {/*<FunctionClick />*/}
        {/*<Welcome name="Thor" hero="Thor Odinson">
        </Welcome>*/}
        {/*<Counter />*/}
        {/*<Message />*/}
        {/*<Greet name="Tony" hero="Ironman">
          <p>This is children props.</p>
        </Greet>*/}
        {/*<Greet name="Steve" hero="Captain America">
          <button>Action</button>
        </Greet>*/}
        {/*<Greet name="Thor" hero="Thor Odinson"/>*/}
        {/*<Welcome name="Tony" hero="Ironman">
        </Welcome>*/}
        {/*<Welcome name="Steve" hero="Captain America">
        </Welcome>*/}
        {/*<Hello />*/}
      </div>
    );
  }
}

export default App;
