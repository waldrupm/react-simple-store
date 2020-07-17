import React, { Component } from "react";
import db from "../firebase";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    db.collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
}
