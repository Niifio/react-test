import React, { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../components/Modal";
import GridModal from "../components/GridModal";
import { deleteCard } from "../redux/features/createCardSlice";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Dashboard() {
  const { cards, query } = useSelector((state) => state.cardSlice);
  const [formData, setFormData] = useState({});
  const [value, setValue] = useState(null);
  const [isEdited, setIsEdited] = useState(false);
  console.log(cards);
  const dispatch = useDispatch();

  const onEdit = (index) => {
    setFormData(cards[index]);
    setValue(index);
    setIsEdited(true);
  };

  const onDelete = (index) => {
    let filteredCards = cards.filter((el) => {
      return el !== cards[index];
    });
    Swal.fire({
      title: `Are you sure you want to delete?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteCard(filteredCards));
      }
    });
  };
  const cardList = useMemo(
    () =>
      cards.filter((item) => {
        return query.toLowerCase() === " "
          ? item
          : item.brand.toLowerCase().includes(query);
      }),
    [query]
  );

  return (
    <>
      <div className="dashboard-container">
        <div className="dashboard-content">
          <table className="dashboard-table">
            <thead className="table-head">
              <tr>
                <th>Image</th>
                <th>Brand</th>
                <th>Model</th>
                <th>Year</th>
                <th>Description</th>
                <th>Color</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {cardList
                ? cardList.map((result, index) => {
                    const { image, brand, model, year, color, description } =
                      result;
                    return (
                      <tr key={index}>
                        <td>
                          <div className="table-image-container">
                            <img src={image} className="table-image" />
                          </div>
                        </td>
                        <td>{brand}</td>
                        <td>{model}</td>
                        <td>{year}</td>
                        <td>
                          <div className="description">{description}</div>
                        </td>
                        <td>{color}</td>
                        <td>
                          <div>
                            <div className="table-action-btn">
                              <Link
                                to={`/home/user/create/dashboard/view/${index}`}
                              >
                                <button>view</button>
                              </Link>
                              <button
                                className=""
                                onClick={() => onEdit(index)}
                              >
                                Edit
                              </button>
                              <button
                                className=""
                                onClick={() => onDelete(index)}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>
      </div>
      {isEdited && (
        <Modal formData={formData} value={value} setIsEdited={setIsEdited} />
      )}
      <GridModal onEdit={onEdit} onDelete={onDelete} />
    </>
  );
}

export default Dashboard;
