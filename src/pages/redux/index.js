import React, {Component } from 'react';
import store  from '../../store'
class ReduxPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate()
    })
  }
  add= () => {
    store.dispatch({type: 'ADD', payload: 100})
  }
  render() { 
    return ( 
      <div>
        <div>{store.getState()}</div>
        <button onClick={this.add}>add</button> 
      </div>
      
    )
  }
}
 
export default ReduxPage;