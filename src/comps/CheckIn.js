import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { get, post } from "../http/service";
import ResoScroll from "../assets/Reservation.png";

const CheckIn = () => {
    const boxShadow = {
        boxShadow: "0px 0px 30px #897c6e",
      };
  const [resos, setResos] = React.useState([]);
  const { resoId } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    get(`/reso/view/${resoId}`)
      .then((results) => {
        console.log(results.data);
        setResos(results.data);
      })
      .catch((err) => {
        console.error(err.message);
        navigate("/reservations");
      });
  }, []);

  const cancelReso = (e) => {
    e.preventDefault();
    post(`/reso/cancel/${resoId}`)
      .then(() => {
        navigate("/profile");
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <div>
      <form onSubmit={cancelReso}>
      <div className="reso-scroll">
            <img
              src={ResoScroll}
              alt="ResoScroll"
              style={({ width: "35%" }, boxShadow)}
            />
            <div className="centered-scroll">
              <h2>Reservation Details</h2>
              <h4>Name: {resos.name}</h4>
              <h4>Email: {resos.email}</h4>
              <h4>Phone Number: {resos.phone}</h4>
              <h4>Guests: {resos.guests}</h4>
              <h4>
                Date:{" "}
                {new Date(resos.date).toLocaleDateString("en-US", {
                  timeZone: "UTC",
                })}
              </h4>
              <h4>Time: {resos.time}</h4>
              <textarea
                rows={4}
                cols={35}
                style={{
                  textAlign: "center",
                  resize: "none",
                  fontFamily: "MedievalSharp",
                }}
              >
                {resos.notes}
              </textarea>
              <h4>{resos.username}</h4>

              <button className="submit" type="submit">Check-In Reservation</button>
            </div>
          </div>
             
      </form>
    </div>
  );
};

export default CheckIn;
