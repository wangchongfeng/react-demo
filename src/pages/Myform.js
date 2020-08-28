
import React, { Component } from 'react'
import Input from '../components/Input'
import './Myform.less'
class Myform extends Component {
  constructor(props) {
    super(props)
    this.state ={
      username: '',
      password: ''
    }
  }

  submit = () => {
    console.log(this.state.username)
  }
  render() {
    const  { username, password} = this.state
    return (
      <div className="Myform" >
        <Input value={username} placeholder="username" onChange={e=>this.setState({username: e.target.value})} />
        <Input value={password} placeholder="password" onChange={e=>this.setState({password: e.target.value})} />
        <button onClick={this.submit}>提交</button>
      </div>

    )
  }

}

export default Myform