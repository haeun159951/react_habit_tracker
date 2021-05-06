import React, { PureComponent } from 'react';
import Habit from './habit';
import Habitform from './habitform';

class Habits extends PureComponent {
  //lifecycle functions: timer
  // componentDidMount() {
  //   console.log(`habut: ${this.props.habit.name} mounted`);
  // }
  // componentWillUnmount() {
  //   console.log(`habut: ${this.props.habit.name} will unmount`);
  // }
  render() {
    console.log('habits');
    return (
      <div className='habits'>
        <Habitform onAdd={this.props.onAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <button className='resetBtn' onClick={this.props.onReset}>
          Reset All
        </button>
      </div>
    );
  }
}

export default Habits;
