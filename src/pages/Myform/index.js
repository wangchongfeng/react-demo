
import React, { Component } from 'react'
import Input from '../../components/Input'
import createForm from '../../components/createForm'
const nameRules = {required: true, message: 'please input username'}
const passwordRules = {required: true, message: 'please input password'}
@createForm
class Myform extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.form)
  }
  submit = () => {
    const {getFieldsValue, validateFields} = this.props.form
    validateFields((err, val) => {
      if (err) {
        console.log(err)
      } else {
        console.log(val)
        console.log(getFieldsValue)
      }
    })
  }
  componentWillMount() {
    this.props.form.setFieldsValue({username: 'default'})
  }
  render() {
    const {getFieldDecorator} = this.props.form
    return (
      <div className="Myform" >
        {getFieldDecorator('username', {rules: [nameRules]})(<Input  placeholder="username" />)}
        {getFieldDecorator('password', {rules: [passwordRules]})(<Input  placeholder="password" />)}
        <button onClick={this.submit}>提交</button>
      </div>

    )
  }

}

export default Myform