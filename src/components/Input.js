import React from 'react'

function Input(props) {
  return <input {...props}></input>
}

class CustomizeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {value = "", ...otherProps} = this.props;
    return (
      <div style={{padding: 10}}>
        <Input style={{outline: "none"}} value={value} {...otherProps} />
      </div>
    );
  }
}

export default CustomizeInput;