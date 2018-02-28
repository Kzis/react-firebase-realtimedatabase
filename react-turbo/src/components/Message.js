// Message.js

import React, {Component} from 'react';

var deleteBtnStyle = {
  float:"right"
}

class Message extends Component {

  constructor(props){
    super(props);
    this.onClickDelete = this.onClickDelete.bind(this);
  }

  onClickDelete(e){
    e.preventDefault();
    
    let dbCon = this.props.db.database().ref('/messages');
    dbCon.child(this.props.msgKey).remove();

  }

  render(){
    return (
      <div>
        {this.props.msg}
        <a style={deleteBtnStyle} className="button is-danger" onClick={this.onClickDelete}>
          Delete Message
        </a>
      </div>
    )
  }
}
export default Message