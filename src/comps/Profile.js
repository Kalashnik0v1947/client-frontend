import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { get, post } from "../http/service";
import ResoScroll from "../assets/Reservation.png";

const Profile = () => {
  const boxShadow = {
    boxShadow: "0px 0px 30px #897c6e",
  };

  const navigate = useNavigate("/");
  const [resos, setResos] = React.useState([]);
  const [name, setName] = React.useState("");

  React.useEffect(() => {
    get("/auth/loggedIn")
      .then((results) => {
        setResos(results.data.resos);
        setName(results.data.username);
        console.log("Are you logged in?", results.data);
        console.log("Are you logged in?", results.data);
      })
      .catch((err) => {
        console.error(err.message);
        navigate("/login");
      });
  }, []);

  return (
    <div>
      <h1 style={{ color: "white" }}>
        Welcome {name.charAt(0).toUpperCase() + name.slice(1)}{" "}
      </h1>

      {resos.map((reso) => {
        return (
          <div className="reso-scroll">
            <img
              src={ResoScroll}
              alt="ResoScroll"
              style={({ width: "35%" }, boxShadow)}
            />
            <div className="centered-scroll">
              <h2>Reservation Details</h2>
              <h4>Name: {reso.name}</h4>
              <h4>Email: {reso.email}</h4>
              <h4>Phone Number: {reso.phone}</h4>
              <h4>Guests: {reso.guests}</h4>
              <h4>
                Date:{" "}
                {new Date(reso.date).toLocaleDateString("en-US", {
                  timeZone: "UTC",
                })}
              </h4>
              <h4>Time: {reso.time}</h4>
              <textarea
                rows={4}
                cols={35}
                style={{
                  textAlign: "center",
                  resize: "none",
                  fontFamily: "MedievalSharp",
                }}
              >
                {reso.notes}
              </textarea>
              <h4>{reso.username}</h4>

              <Link to={`/reso/view/${reso._id}`}>Update</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Profile;
