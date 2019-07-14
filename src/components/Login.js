import React, { Component } from 'react';
import Chat from './Chat';
import '../assets/login.scss';
class Login extends Component {
  state = {
    userName: '',
    showLoginForm: true,
    showError: false
  };

  login = e => {
    if (e.key === 'Enter') {
      const userName = this.nameInput.value;
      this.setState(userName ? { showLoginForm: false } : { showError: true });
      if (userName) {
        this.setState({
          userName
        })
      }
    }
  };
  render() {
    const { showLoginForm, showError } = this.state;
    return (
      <div>
        {showLoginForm ? (
          <div className="login">
            <span className="login__header">What's your name</span>
            <input
              onKeyPress={this.login}
              className="login__input"
              placeholder="Your name"
              type="text"
              ref={node => {
                this.nameInput = node;
              }}
            />
            {showError ? (
              <span className="login__error">
                Name error, maybe your name is empty
              </span>
            ) : null}
          </div>
        ) : null}
        <Chat userName={this.state.userName}/>
      </div>
    );
  }
}

export default Login;
