import React, { useState, useEffect} from "react";
import { updateCard } from "../redux/features/createCardSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";

function Modal({ formData, value, setIsEdited }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    ...formData,
  });

  const { brand, model, year, color, description } = data;

  const onChangeFormData = (e) => {
    setData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const onImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  useEffect(() => {
    if (selectedImage) {
      let fileReader = new FileReader();

      fileReader.onload = (e) => {
        const { result } = e.target;

        if (result) {
          setImageSrc(result);
        }
      };
      fileReader.readAsDataURL(selectedImage);
    }
  }, [selectedImage, data]);
  const onSubmitForm = (e) => {
    e.preventDefault();

    const updated = {
      image: imageSrc ? imageSrc : formData.image,
      brand: brand,
      model: model,
      year: year,
      color: color,
      description: description,
    };

    const obj = {
      value,
      updated,
    };

    dispatch(updateCard(obj));
    setIsEdited(false);

    navigate("/home/user/create/dashboard");
  };

  return (
    <div className="modal-container">
      <form className="form-content" onSubmit={onSubmitForm}>
        <div className="modal-form">
          <div className="modal-img-container">
            <img
              src={imageSrc ? imageSrc : formData.image}
              alt=""
              className="edit-modal-img"
            />
          </div>
          <div className="form-group">
            <input
              className="upload-btn"
              id="files"
              type="file"
              onChange={onImageChange}
            />
          </div>
        </div>
        <div className="form-details">
          <div className="form-group">
            <label htmlFor="brand"> Car brand: </label>
            <input
              type="text"
              className="form-control"
              id="brand"
              name="brand"
              defaultValue={formData.brand}
              onChange={onChangeFormData}
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
              defaultValue={formData.model}
              onChange={onChangeFormData}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="year"> Year of Car: </label>
            <input
              type="date"
              className="form-control"
              id="year"
              name="year"
              defaultValue={formData.year}
              onChange={onChangeFormData}
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
              defaultValue={formData.color}
              onChange={onChangeFormData}
              required
            />
          </div>
          <div className="form-group text">
            <textarea
              name="description"
              id=""
              cols="30"
              rows="8"
              defaultValue={formData.description}
              onChange={onChangeFormData}
            ></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-block">Update</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Modal;
