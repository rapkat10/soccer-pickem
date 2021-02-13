import React from "react";
import { Link } from "react-router-dom";

class Homepage extends React.Component {
  render() {
    const { currentUser } = this.props;
    let signedOutMessage;
    if (!currentUser) {
      signedOutMessage = "Please Login at the right corner of the page!"
    }
    return (
      <>
        <div className="homepage-div">
          <h4>Welcome to Soccer Pick'Em! We are only offering Club World Cup matches currently! More to Come...</h4>
          <div className="d-flex justify-content-center">
            <Link to="/dashboard" className='btn btn-sm btn-primary m-1'>Dashboard</Link>
            <Link to="/clubworldcup" className='btn btn-sm btn-primary m-1'>Club World Cup</Link>
          </div>
          <h4>{signedOutMessage}</h4>
        </div>
      </>
    );
  }
}

export default Homepage;