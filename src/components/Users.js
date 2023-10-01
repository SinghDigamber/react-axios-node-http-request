import React, { useState, useEffect } from "react";
import axios from "axios";

function Users() {
  const [userForm, setUserForm] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/students")
      .then((res) => {
        setUserForm(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userForm]);

  return (
    <div className="mt-5 wrapper">
      <h2 className="mb-4">React 18 Axios HTTP GET Request Example</h2>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {userForm.map((user, index) => {
            return (
              <tr key={index}>
                <th scope="row">{user._id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
