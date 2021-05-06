import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import NavBar from './components/navBar';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 }, //0
      { id: 2, name: 'Coding', count: 0 }, //1
      { id: 3, name: 'Running', count: 0 }, //2
    ],
    totalCount: 0,
    value: '',
  };

  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };

  handleReset = () => {
    // const habits = this.state.habits.map((habit) => {
    //   habit.count = 0;
    //   return habit;
    // });

    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 }; //새로운 오브젝트(카운트 다시) 만들어줌
      }
      return habit;
    });
    this.setState({ habits });
  };

  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 }; //새로운 오브젝트(카운트 다시) 만들어줌
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        if (habit.count > 0) {
          return { ...habit, count: habit.count - 1 }; //새로운 오브젝트(카운트 다시) 만들어줌
        }
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  render() {
    console.log('app');
    return (
      <>
        <NavBar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />

        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}
export default App;
