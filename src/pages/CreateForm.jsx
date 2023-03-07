import { useState, useEffect } from "react";
import carImage from "../images/1296922.svg";
import { createCards } from "../redux/features/createCardSlice";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
const CreateForm = () => {
  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    color: "",
    description: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const { brand, model, year, color, description } = formData;
  const [imageSrc, setImageSrc] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChangeFormData = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
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
  }, [selectedImage]);
  const onSubmitForm = (e) => {
    e.preventDefault();

    const createCard = {
      image: imageSrc,
      brand,
      model,
      year,
      color,
      description,
    };
    dispatch(createCards(createCard));
    navigate("/home/user/create/dashboard");
  };

  return (
    <div className="app-container">
      <div className="createForm-container">
        <section className="form">
          <form className="form-container" onSubmit={onSubmitForm}>
            <div className="form-header">
              <div className="form-group">
                <div className="form-img-container">
                  <img
                    src={
                      selectedImage
                        ? URL.createObjectURL(selectedImage)
                        : carImage
                    }
                    alt="selectedImage"
                  />
                </div>
                <div>
                  <input
                    className="upload-btn"
                    id="files"
                    type="file"
                    name="files"
                    onChange={onImageChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="right-form-container">
              <div className="form-group">
                <label htmlFor="brand"> Car brand </label>
                <input
                  type="text"
                  className="form-control"
                  id="brand"
                  name="brand"
                  placeholder="Enter your brand"
                  required
                  onChange={onChangeFormData}
                />
              </div>
              <div className="form-group">
                <label htmlFor="model"> Car model </label>
                <input
                  type="text"
                  className="form-control"
                  id="model"
                  name="model"
                  placeholder="Enter model"
                  required
                  onChange={onChangeFormData}
                />
              </div>
              <div className="form-group">
                <label htmlFor="year"> Year of Car </label>
                <input
                  type="date"
                  className="form-control"
                  id="year"
                  name="year"
                  placeholder="Enter year"
                  required
                  onChange={onChangeFormData}
                />
              </div>
              <div className="form-group">
                <label htmlFor="color"> color </label>
                <input
                  type="text"
                  className="form-control"
                  id="color"
                  name="color"
                  placeholder="Enter color"
                  required
                  onChange={onChangeFormData}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="description"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Car description...."
                  onChange={onChangeFormData}
                ></textarea>
              </div>
              <div className="form-group">
                <button className="btn btn-block">Submit</button>
              </div>
            </div>
          </form>
        </section>
      </div>
      <Link to="/home/user/create/dashboard">Go to Dashboard</Link>
    </div>
  );
};

export default CreateForm;
