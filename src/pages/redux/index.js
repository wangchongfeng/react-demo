import React, { Component } from 'react';
import store from '../../store'
// import { connect } from 'react-redux'
import { connect } from '../../components/react-redux'

@connect(state => ({ count: state.count }))
class ReduxPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    console.log(props)
  }
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate()
    })
  }
  add = () => {
    store.dispatch({ type: 'ADD', payload: 100 })
  }
  asyncAdd = () => {
    setTimeout(() => {
      store.dispatch({ type: 'ADD', payload: 100 })
    }, 2000);
  }
  render() {
    let {count} = this.props
    return (
      <div>
        <div>count:{count}</div>
        <div>num: {count}</div>
        <button onClick={this.add}>add</button>
        <button onClick={this.asyncAdd}>async add</button>
      </div>

    )
  }
}

export default ReduxPage;