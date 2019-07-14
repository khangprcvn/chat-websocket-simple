import React, { Component } from 'react';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';

const URL = 'ws://localhost:8181';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  ws = new WebSocket(URL);

  componentDidMount() {
    this.ws.onopen = () => {
      console.log('connected');
    };

    this.ws.onmessage = evt => {
      // on receiving a message, add it to the list of messages
      const message = JSON.parse(evt.data);
      this.addMessage(message);
    };

    this.ws.onclose = () => {
      console.log('disconnected');
      // automatically try to reconnect on connection loss
      this.setState({
        ws: new WebSocket(URL)
      });
    };
  }

  addMessage = message =>
    this.setState(state => ({ messages: [message, ...state.messages] }));

  submitMessage = messageString => {
    const message = { name: this.props.userName, message: messageString };
    this.ws.send(JSON.stringify(message));
    this.addMessage(message);
  };

  render() {
    return (
      <div className="container">
        <ChatInput
          onSubmitMessage={messageString => this.submitMessage(messageString)}
        />
        {this.state.messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.message}
            name={message.name}
          />
        ))}
      </div>
    );
  }
}

export default Chat;
