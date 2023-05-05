import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.id);
  const [user, setUser] = useState({});
  useEffect(() => {
    const id = localStorage.getItem("id");

    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "SET_USER",
          payload: data,
        });
        setUser(data);
      })
      .catch((err) => console.log(err));
  }, [dispatch, userId]);

  return (
    <div className="container-fluid bg-dark text-light">
      <h2 className="text-center">User Profile</h2>
      <div className="row">
        <div className="col-md-2">
          <img src={user.image} className="w-100" alt="profilepic" />
        </div>
        <div className="offset-col-md-2 col-md-6 my-5">
          <div className="info name">
            <h1>Personal Info</h1>
            <ul className="list-group">
              <li className="list-group-item">
                Name: {user.firstName} {user.lastName}
              </li>
              <li className="list-group-item">Phone No: {user.phone}</li>
              <li className="list-group-item">Email: {user.email}</li>
              <li className="list-group-item">
                {" "}
                University: {user.university}
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 my-5">
          <div className="details">
            <div className="text-bold">
              <h2>Other Info</h2>
            </div>
            <ul className="list-group">
              <li className="list-group-item">Age: {user.age}</li>
              <li className="list-group-item">Gender: {user.gender}</li>
              <li className="list-group-item">DOB: {user.birthDate}</li>
              <li className="list-group-item">Weight: {user.weight} kg</li>
              <li className="list-group-item">Height: {user.height} cm</li>
            </ul>
          </div>
        </div>
      </div>{" "}
      <br />
      <div className="row company-details basic-info">
        <div className="extra">
          <div className="personal">
            <h2> User Details</h2>
          </div>
          <ul className="list-group">
            <li className="list-group-item">Username: {user.username}</li>
            <li className="list-group-item">User Agent: {user.userAgent}</li>
          </ul>
        </div>
        <div className="extra2">
          <div className="personal">
            <h2>IP Info</h2>
          </div>
          <ul className="list-group">
            <li className="list-group-item">IP: {user.ip}</li>
            <li className="list-group-item">Mac Address: {user.macAddress}</li>
            <li className="list-group-item">SSN: {user.ssn}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
