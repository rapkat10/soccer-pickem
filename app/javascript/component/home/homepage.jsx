import React from "react";
import { Link } from "react-router-dom";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="">
          <h5>Hello From Homepage</h5>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </>
    );
  }
}

export default Homepage;