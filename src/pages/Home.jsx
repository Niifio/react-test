import React from "react";
function Home() {
  return (
    <>
      <div className="app-container">
        <div className="home-container">
          <section className="section-btn">
            <div className="create-btn">
              <button className="card-btn btn"> Create Card</button>
            </div>
            <div className="dashbord-btn">
              <button className="card-btn btn"> Go to dashboard</button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;
