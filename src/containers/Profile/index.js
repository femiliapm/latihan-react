import axios from 'axios';
import React, { Component } from 'react'

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      detailUser: {},
      // userId: ""
    }
  }

  componentDidMount() {
    const userId = this.props.match.params.userId
    console.log(userId);

    this.getDetailUser(userId)
  }

  getDetailUser(id) {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => {
        this.setState({
          detailUser: res.data
        })
        console.log(this.state.detailUser);
      })
  }

  render() {
    const { name, username, email } = this.state.detailUser;

    return (
      <div className="d-flex flex-column align-items-center">
        <h1 className="m-2">Detail Profile</h1>
        <h3>{name}</h3>
        <h3>{username}</h3>
        <h3>{email}</h3>
      </div>
    )
  }
}

export default Profile;