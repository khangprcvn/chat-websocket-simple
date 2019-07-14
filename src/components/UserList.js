import React, { Component } from 'react';

class UserList extends Component {
  render() {

    return (
      <div className='user-list'>
        <h3 className='user-list__header'>Online people</h3>
        <ul className='user-list__list'>
          {/* {users.map(user => (
            <span className='user-list__item' key={user.id}>{user.name}</span>
          ))} */}
          <li>person1</li>
        </ul>
      </div>
    );
  }
}


export default UserList;