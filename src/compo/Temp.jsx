import React from 'react';
import ReactDOM from 'react-dom';

export default class Temp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red", favoritecolor2: "2"};
  }
  static getDerivedStateFromProps(props, state) {
    return {favoritecolor2: props.color };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "blue"});
      this.setState({favoritecolor2: "3"});

    }, 1000)
  }
  render() {
    return (
    <h1>My Favorite Color is {this.state.favoritecolor} {this.state.favoritecolor2}</h1>
    );
  }
}
