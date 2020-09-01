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
  asyncAdd= () => {
    setTimeout(() => {
      store.dispatch({type: 'ADD', payload: 100})
    }, 2000);
  }
  render() { 
    return ( 
      <div>
        <div>count:{store.getState().count}</div>
        <div>num: {store.getState().count}</div>
        <button onClick={this.add}>add</button> 
        <button onClick={this.asyncAdd}>async add</button> 
      </div>
      
    )
  }
}
 
export default ReduxPage;