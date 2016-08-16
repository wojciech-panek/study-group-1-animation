import React, {Component} from 'react';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coloursWidth: 0
    };

    this.icons = [
      {className: 'si-icon-monitor', iconName: 'monitor', iconInstance: null, frontIconInstance: null},
      {className: 'si-icon-hourglass', iconName: 'hourglass', iconInstance: null, frontIconInstance: null},
      {className: 'si-icon-clock', iconName: 'clock', iconInstance: null, frontIconInstance: null},
      {className: 'si-icon-maximize-rotate', iconName: 'maximizeRotate', iconInstance: null, frontIconInstance: null},
      {className: 'si-icon-contract', iconName: 'contract', iconInstance: null, frontIconInstance: null}
    ]
  }

  componentDidMount() {
    this.setState({
      coloursWidth: this.refs.list.offsetWidth
    });

    this.icons.forEach((icon) => {
      const iconElement = this.refs.list.getElementsByClassName(icon.className)[0];
      const iconFrontElement = this.refs.colours.getElementsByClassName(icon.className)[0];
      icon.iconInstance = new svgIcon(iconElement, svgIconConfig, {speed: 1000});
      icon.frontIconInstance = new svgIcon(iconFrontElement, svgIconConfig, {speed: 1000});
    })
  }

  handleItemClick(icon, event) {
    let target = event.target;
    if (!target.classList.contains('app__list-item')) {
      target = event.target.closest('.app__list-item');
    }

    icon.iconInstance.toggle(true);
    icon.frontIconInstance.toggle(true);

    TweenMax.to(this.refs.coloursWrapper, 1, {x: target.offsetLeft, ease: Power4.easeInOut});
    TweenMax.to(this.refs.colours, 1, {x: -target.offsetLeft,  ease: Power4.easeInOut});
  }


  render() {
    const coloursStyle = {
      width: this.state.coloursWidth
    };

    return (
      <div className="app" ref="app">
        <ul ref="list" className="app__list">
          {this.icons.map((icon, index) => (
            <li key={index} className="app__list-item" onClick={this.handleItemClick.bind(this, icon)}>
              <span className={`app__list-item-icon si-icon ${icon.className}`} data-icon-name={icon.iconName}></span>
            </li>
          ))}
        </ul>

        <div ref="coloursWrapper" className="app__listColours-wrapper">
          <ul style={coloursStyle} ref="colours" className="app__listColours">
            {this.icons.map((icon, index) => (
                <li key={index} className="app__listColours-item">
                  <span className={`app__list-item-icon si-icon ${icon.className}`} data-icon-name={icon.iconName}></span>
                </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
