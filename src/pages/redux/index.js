import React, {Component} from 'react';
import store  from '../../store'
class ReduxPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  add= () => {
    
  }
  render() { 
    return ( <div>{count}</div>
      <button onClick={add}>add</button> );
  }
}
 
export default ReduxPage;