import React, { Component, Fragment } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Data from "./Data";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <h1>Home Page</h1>
        <div className="App">
          <Header />
        </div>
        <div className="d-flex flex-row">
          <Card
            srcImage="https://placeimg.com/200/200/nature"
            title="Tutorial React JS"
          />
          <Card title="Tutorial Javascript" />
          <Card title="Tutorial Java Spring Boot" />
          {Data.map((val) => {
            return <Card title={val.title} srcImage={val.srcImage} />;
          })}
        </div>
        <button className="btn btn-primary">Home</button>
      </Fragment>
    );
  }
}

export default Home;
