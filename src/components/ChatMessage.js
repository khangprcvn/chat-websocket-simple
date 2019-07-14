import React from 'react';

const ChatMessage = ({ name, message }) => {
  return (
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <strong>{name}: </strong>
        {message}
      </li>
    </ul>
  );
};

export default ChatMessage;
