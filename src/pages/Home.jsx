import React from "react";
import { Link} from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <section className="section-btn">
        <div className="create-btn">
          <Link to="/home/user/create">
            <button className="card-btn btn"> Create Card</button>
          </Link>
        </div>
        <div className="dashbord-btn">
          <Link to="/home/user/create/dashboard">
            <button className="card-btn btn"> Go to dashboard</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
