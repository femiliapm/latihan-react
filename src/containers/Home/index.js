import axios from "axios";
import React, { Component, Fragment } from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Search from "../../components/Search";
import Data from "./Data";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: "Ajeng Khairani",
      isLogin: false,
      data: [],
      search: ""
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        name: "Femilia Putri",
      });
    }, 5000);

    this.getUser();
  }

  getUser = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        this.setState({
          data: res.data
        })
        console.log(this.state.data);
      })
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    })
    console.log(this.state.search);
  }

  render() {
    const { data, search } = this.state;
    const filterData = data.filter(value =>{
      return(
        value.name.toLowerCase().includes(search.toLowerCase())
      )}
    );

    return (
      <Fragment>
        <h1 className="m-2">Home Page</h1>
        <div className="m-2 d-flex justify-content-center">
          <Search placeholder='Search Bar' onChange={this.handleChange} />
          {/* {this.state.isLogin ? <h3>Nama : {this.state.name}</h3> : <Button label="Login" />} */}
        </div>
        <div className="d-flex flex-wrap">
          {
            filterData.map((val) => {
              return (
                // console.log(val);
                <Card
                  key={val.id}
                  name={val.name}
                  username={val.username}
                  email={val.email}
                  id={val.id}
                />
              )
            })
          }
          {/* <Card
            srcImage="https://placeimg.com/200/200/nature"
            title="Tutorial React JS"
          />
          <Card srcImage="https://placeimg.com/200/200/any"
            title="Tutorial Javascript" />
          <Card srcImage="https://placeimg.com/200/200/any"
            title="Tutorial Java Spring Boot" />
          {Data.slice(0,3).map((val) => {
            return <Card title={val.title} srcImage={val.srcImage} />;
          })} */}
        </div>
      </Fragment>
    );
  }
}

export default Home;
