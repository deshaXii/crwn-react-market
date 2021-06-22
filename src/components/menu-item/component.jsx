import React from "react";
import {withRouter} from 'react-router-dom'
import "./style.scss";

class MenuItem extends React.Component {
  constructor() {
    super();
    this.state = {
      x: 0,
      y: 0,
    };
  }
  render() {
    return (
      <div
      onClick={ () => this.props.history.push(`${this.props.match.url}${this.props.linkUrl}`) }
        onMouseMove={ e => this.setState({x: e.clientX, y: e.clientY})}
        className={`menu-item ${this.props.size ? this.props.size : "small"}`}>
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${this.props.imageUrl})`,
          }}
        />
        <div
          className="content"
          style={{
            left: this.state.x,
            top: this.state.y,
          }}
        >
          <h1 className="title">{this.props.title.toUpperCase()}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    );
  }
}

export default withRouter(MenuItem)