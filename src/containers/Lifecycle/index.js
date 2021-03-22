import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

class LifeCycle extends Component {
  constructor() {
    super();
    this.state = {
      text: "Button",
      count: 1,
      isUnmount: false,
    }
    console.log("constructor");
    console.log("text sebelum", this.state.text);
    console.log("count sebelum", this.state.count);
  }

  componentDidMount() {
    console.log("component did mount");
    setTimeout(() => {
      this.setState({
        text: "Hitung"
      })
    }, 5000);
    console.log("text did mount: ", this.state.text);
    console.log("count did mount: ", this.state.count);
  }

  componentDidUpdate() {
    console.log("component did update");
    console.log("text did update : ", this.state.text);
    console.log("count did update : ", this.state.count);
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  handleCount = () => {
    this.setState({
      count: this.state.count + 1,
      isUnmount: true
    })
  }

  render() {
    console.log("render");
    return (
      <Fragment>
        <div className="d-flex flex-column">
          <h1 className="m-2">Lifecycle React JS</h1>
          {this.state.isUnmount ? "" : <Button label={this.state.text + ` : ` + this.state.count} handleClick={this.handleCount} />}
          <Link to="/">Back to Home</Link>
        </div>
      </Fragment>
    )
  }
}

export default LifeCycle;