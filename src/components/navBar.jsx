import React, { PureComponent } from 'react';

class NavBar extends PureComponent {
  render() {
    console.log('nav');
    return (
      <header className='header'>
        <a href='/#' className='logo'>
          <i className='fas fa-leaf'></i>
        </a>
        <h1 className='title'>Habit Tracker</h1>
        <span className='habitCount'>{this.props.totalCount}</span>
      </header>
    );
  }
}

export default NavBar;
