import React, {Component} from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coloursWidth: 0
    };
  }

  componentDidMount() {
    this.setState({
      coloursWidth: this.refs.list.offsetWidth
    });
  }

  handleItemClick(event) {
    TweenMax.to(this.refs.coloursWrapper, 1, {x: event.target.offsetLeft});
    TweenMax.to(this.refs.colours, 1, {x: -event.target.offsetLeft});
  }

  render() {
    const coloursStyle = {
      width: this.state.coloursWidth
    };

    return (
      <div className="app">
        <ul ref="list" className="app__list">
          <li className="app__list-item" onClick={this.handleItemClick.bind(this)}>1</li>
          <li className="app__list-item" onClick={this.handleItemClick.bind(this)}>2</li>
          <li className="app__list-item" onClick={this.handleItemClick.bind(this)}>3</li>
          <li className="app__list-item" onClick={this.handleItemClick.bind(this)}>4</li>
          <li className="app__list-item" onClick={this.handleItemClick.bind(this)}>5</li>
        </ul>

        <div ref="coloursWrapper" className="app__listColours-wrapper">
          <ul style={coloursStyle} ref="colours" className="app__listColours">
            <li className="app__listColours-item">1</li>
            <li className="app__listColours-item">2</li>
            <li className="app__listColours-item">3</li>
            <li className="app__listColours-item">4</li>
            <li className="app__listColours-item">5</li>
          </ul>
        </div>
      </div>
    );
  }
}
