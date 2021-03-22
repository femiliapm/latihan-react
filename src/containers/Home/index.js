import React, { Component, Fragment } from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Data from "./Data";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: "Ajeng Khairani",
      isLogin: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        name: "Femilia Putri",
      });
    }, 5000);
  }

  getUser = () => {
    this.setState({
      isLogin: true
    })
  }

  render() {
    return (
      <Fragment>
        <h1 className="m-2">Home Page</h1>
        <div className="m-2 d-flex justify-content-center">
          {this.state.isLogin ? <h3>Nama : {this.state.name}</h3> : <Button label="Login" />}
        </div>
        <div className="d-flex flex-row">
          <Card
            srcImage="https://placeimg.com/200/200/nature"
            title="Tutorial React JS"
          />
          <Card srcImage="https://placeimg.com/200/200/any"
            title="Tutorial Javascript" />
          <Card srcImage="https://placeimg.com/200/200/any"
            title="Tutorial Java Spring Boot" />
          {Data.map((val) => {
            return <Card title={val.title} srcImage={val.srcImage} />;
          })}
        </div>
      </Fragment>
    );
  }
}

export default Home;
