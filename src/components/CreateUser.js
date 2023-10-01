import React, { useState } from "react";
import axios from "axios";

function CreateUser() {
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
  });

  const onInputChange = (e) => {
    setUserForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/students/create", userForm)
      .then((res) => {
        setUserForm({
          name: "",
          email: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mt-5 wrapper">
      <h2 className="mb-4">React 18 Axios HTTP POST Request Example</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            value={userForm.name}
            onChange={onInputChange}
            className="form-control"
            placeholder="name"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="email"
            value={userForm.email}
            onChange={onInputChange}
            className="form-control"
            placeholder="email"
          />
        </div>
        <div>
          <input
            type="submit"
            value="Create User"
            className="btn btn-success btn-block"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
