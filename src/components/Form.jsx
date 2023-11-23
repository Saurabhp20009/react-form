import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Form.css";

const CrudForm = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    email: "",
    date: "",
    address: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.DOB === "" ||
      formData.address === ""
    ) {
      console.log(formData);
      return;
    }

    setData([...data, { ...formData, id: data.length + 1 }]);
    setFormData({ id: null, name: "", email: "", date: "", address: "" });
  };

  const handleEdit = (id) => {
    const itemToEdit = data.find((item) => item.id === id);
    setFormData({ ...itemToEdit });
  };

  const handleUpdate = () => {
    const updatedData = data.map((item) =>
      item.id === formData.id ? { ...formData } : item
    );
    setData(updatedData);
    setFormData({ id: null, name: "", email: "",date: "", address: "" });
  };

  const handleDelete = (id) => {
    const filteredData = data.filter((item) => item.id !== id);
    setData(filteredData);
  };

  return (
    <div className="container">
      <div className="head">
        {" "}
        <h2 id="heading">Form</h2>
      </div>
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            className="form-control inputClass "
            name="name"

            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control inputClass"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>DOB:</label>
          <input
            type="date"
            className="form-control inputClass "
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            className="form-control inputClass"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>

        <div className="btn-group addBut">
          {formData.id === null ? (
            <button
              type="button"
              className="btn btn-primary buttonform "
              onClick={handleAdd}
            >
              Submit
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-success buttonform"
              onClick={handleUpdate}
            >
              Update
            </button>
          )}
        </div>
      </form>
      <table className="table mt-4">
        <thead>
          <tr>
            <th className="th">ID</th>
            <th className="th">Name</th>
            <th className="th">Email</th>
            <th className="th">DOB</th>
            <th className="th">Address</th>
            <th className="th">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="td" >{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.date}</td>
              <td>{item.address}</td>
              <td>
                <button
                  className="btn btn-info btn-sm"
                  onClick={() => handleEdit(item.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm ml-2"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrudForm;
