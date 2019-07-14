import React, { Component } from 'react';

class ChatInput extends Component {
  state = {
    message: ''
  };

  onChangeName = e => {
    this.setState({
      message: e.target.value
    });
  };

  onSubmitMessage = e => {
    e.preventDefault();
    this.props.onSubmitMessage(this.state.message);
    this.setState({ message: '' });
  };

  render() {
    return (
      <form
        className="form-inline"
        onSubmit={this.onSubmitMessage}
        style={{ marginTop: '10px' }}
      >
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            placeholder={'Enter message...'}
            value={this.state.message}
            onChange={this.onChangeName}
          />
        </div>
        <button type="button" class="btn btn-outline-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default ChatInput;
