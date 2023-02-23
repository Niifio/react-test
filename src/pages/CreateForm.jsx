import React from "react";
import carImage from "../images/1296922.svg";

export default function () {
  return (
    <div className="app-container">
      <div className="createForm-container">
        <section className="form">
          <form className="form-container">
            <div className="form-group">
              <div className="form-img-container">
                <img src={carImage} alt="" />
              </div>
              <div>
                <label htmlFor="files" className="select">
                  Select Image
                </label>
                <input
                  className="upload-btn"
                  id="files"
                  type="file"
                  style={{ visibility: "hidden" }}
                />
              </div>
            </div>
            <div className="right-form-container">
              <div className="form-group">
                <label htmlFor="brand"> Car brand: </label>
                <input
                  type="text"
                  className="form-control"
                  id="brand"
                  name="brand"
                  placeholder="Enter your brand"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="model"> Car model: </label>
                <input
                  type="text"
                  className="form-control"
                  id="model"
                  name="model"
                  placeholder="Enter model"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="year"> Year of Car: </label>
                <input
                  type="text"
                  className="form-control"
                  id="year"
                  name="year"
                  placeholder="Enter year"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="color"> color: </label>
                <input
                  type="text"
                  className="form-control"
                  id="color"
                  name="color"
                  placeholder="Enter color"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="description"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="form-group">
                <button className="btn btn-block">Submit</button>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
