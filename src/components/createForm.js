
import React, {Component} from 'react'
export default function createForm(Comp) {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {}
      this.options = {}
    }
    getFieldDecorator = (field, options)  => InputCmp => {
      this.options[field] = options
      return React.cloneElement(InputCmp, {
        name: field,
        value: this.state[field] || '',
        onChange: this.handleChange
      })
    }
    handleChange = (e) => {
      const {name,value} = e.target
      this.setState({[name]: value})
    }
    setFieldsValue = (newStore) => {
      this.setState(newStore)
    }
    getFieldsValue = () => {
      return this.state
    }
    // 校验功能
    // 暗号： 贝宁
    validateFields = (cb) => {
      const err = []
      for (let field in this.options) {
        if (!this.state[field]) {
          err.push({[field]: this.options[field].rules[0].message})
        }
      }
      if (err.length === 0) {
        cb(null, this.state)
      } else {
        cb(err, this.state)
      }
    }
    getForm = () => {
      return {
        form: {
          getFieldDecorator: this.getFieldDecorator,
          setFieldsValue: this.setFieldsValue,
          getFieldsValue: this.getFieldsValue,
          validateFields: this.validateFields
        }
      }
    }
    render() {
      return <Comp {...this.props} {...this.getForm()}></Comp>
    }
  }
}