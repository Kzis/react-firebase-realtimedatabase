// Message.js

import React, {Component} from 'react';

var deleteBtnStyle = {
  float:"right"
}

class Message extends Component {

  constructor(props){
    super(props);
    this.onClick = this.onClickDeleteBtn.bind(this);
    console.log(props);
  }

  onClickDeleteBtn(e){
    console.log("onClickDeleteBtn");

    e.preventDefault();

    console.log(this);
    console.log(this.props);

    // let dbCon = this.props.db.database().ref('/messages');

    // console.log(dbCon);
  }

  render(){
    return (
      <div>
        {this.props.message}
        <a style={deleteBtnStyle} className="button is-danger" onClick={this.onClickDeleteBtn}>
          Delete Message
        </a>
      </div>
    )
  }
}
export default Message