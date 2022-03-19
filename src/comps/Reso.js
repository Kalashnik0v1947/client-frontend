import React from "react";
import { Link, useParams } from "react-router-dom";
import { get, post } from "../http/service";
import { useNavigate } from "react-router-dom";
import ResoScroll from "../assets/Reservation.png";

const Reso = () => {
  const boxShadow = {
    boxShadow: "0px 0px 30px #897c6e",
  };

  /* CREATE RESO */
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [guests, setGuests] = React.useState("");
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
  const [notes, setNotes] = React.useState("");

  const navigate = useNavigate();

  const createReso = (e) => {
    e.preventDefault();
    post("/reso/create", {
      name,
      email,
      phone,
      guests,
      date,
      time,
      notes,
    })
      .then(() => {
        navigate("/profile");
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  /* ADMIN VIEW ALL RESO */

  const [resos, setResos] = React.useState([]);
  React.useEffect(() => {
    get("/reso/view-resos")
      .then((results) => {
        setResos(results.data);
        console.log("all reso", results.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  return (
    <div>
      <div className="another-div">
        <form onSubmit={createReso} id="loginForm">
          <div className="reso-form">
            <div className="title">Reservation</div>
            <div className="subtitle">Please fill out the form</div>

            <div className="input-container ic2">
              <input
                id="lastname"
                className="input"
                type="text"
                placeholder=" "
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <div className="cut cut-short"></div>
              <label for="lastname" className="placeholder">
                Full Name
              </label>
            </div>
            <div className="input-container ic2">
              <input
                id="email"
                className="input"
                type="text"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="cut cut-short"></div>
              <label for="email" className="placeholder">
                Email
              </label>
            </div>
            <div className="input-container ic2">
              <input
                id="number"
                className="input"
                type="number"
                placeholder=" "
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <div className="cut cut-short"></div>
              <label for="number" className="placeholder">
                Phone Number
              </label>
            </div>
            <div className="input-container ic2">
              <input
                id="email"
                className="input"
                type="number"
                placeholder=" "
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                required
              />
              <div className="cut cut-short"></div>
              <label for="email" className="placeholder">
                Guests
              </label>
            </div>
            <div className="input-container ic2">
              <input
                id="email"
                className="input"
                type="date"
                placeholder=" "
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
              <div className="cut cut-short"></div>
              <label for="email" className="placeholder">
                Date
              </label>
            </div>
            <div className="input-container ic2">
              <select
                id="email"
                className="input"
                type="text"
                placeholder=" "
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
              >
                <option value="" label="Lunch">
                  Lunch Time
                </option>
                <option value="12:00" label="12:00 pm">
                  12:00 pm
                </option>
                <option value="12:30" label="12:30 pm">
                  12:30 pm
                </option>
                <option value="13:00" label="1:00 pm">
                  1:00 pm
                </option>
                <option value="13:30" label="1:30 pm">
                  1:30 pm
                </option>
                <option value="14:00" label="2:00 pm">
                  2:00 pm
                </option>
                <option value="14:30" label="2:30 pm">
                  2:30 pm
                </option>
                <option value="15:00" label="3:00 pm">
                  3:00 pm
                </option>
                <option value="15:30" label="3:30 pm">
                  3:30 pm
                </option>

                <option value="" label="Dinner">
                  Dinner Time
                </option>
                <option value="18:00" label="6:00 pm">
                  6:00 pm
                </option>
                <option value="18:30" label="6:30 pm">
                  6:30 pm
                </option>
                <option value="19:00" label="7:00 pm">
                  7:00 pm
                </option>
                <option value="19:30" label="7:30 pm">
                  7:30 pm
                </option>
                <option value="20:00" label="8:00 pm">
                  8:00 pm
                </option>
                <option value="20:30" label="8:30 pm">
                  8:30 pm
                </option>
                <option value="21:00" label="9:00 pm">
                  9:00 pm
                </option>
                <option value="21:30" label="9:30 pm">
                  9:30 pm
                </option>
                <option value="22:00" label="10:00 pm">
                  10:00 pm
                </option>
                <option value="22:30" label="10:30 pm">
                  10:30 pm
                </option>
                <option value="23:00" label="11:00 pm">
                  11:00 pm
                </option>
                <option value="23:30" label="11:30 pm">
                  11:30 pm
                </option>
                <option value="00:00" label="12:00 am">
                  12:00 am
                </option>
                <option value="00:30" label="12:30 am">
                  12:30 am
                </option>
                <option value="01:00" label="1:00 am">
                  1:00 am
                </option>
                <option value="1:30" label="1:30 am">
                  1:30 am
                </option>
              </select>
              <div className="cut cut-short"></div>
              <label for="email" className="placeholder">
                Time
              </label>
            </div>
            <div className="input-container ic2">
              <textarea
                id="email"
                className="input"
                type="text"
                placeholder=" "
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
              <div className="cut cut-short"></div>
              <label for="email" className="placeholder">
                Notes...
              </label>
            </div>

            <button type="submit" className="submit">
              Submit Reservation
            </button>
          </div>
        </form>
      </div>

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

              <Link to={reso._id}>View Reservation</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Reso;



{
  /* <form style={{ width: "400px" }} onSubmit={createReso}>
        <h1>Make a Reservation</h1>
        <div></div>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Phone Number</label>
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Guests</label>
          <input
            type="number"
            placeholder="Amount of Guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Time</label>
          <select
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          >
            <option value="" label="Lunch Time's">
              Lunch Time
            </option>
            <option value="12:00" label="12:00 pm">
              12:00 pm
            </option>
            <option value="12:30" label="12:30 pm">
              12:30 pm
            </option>
            <option value="13:00" label="1:00 pm">
              1:00 pm
            </option>
            <option value="13:30" label="1:30 pm">
              1:30 pm
            </option>
            <option value="14:00" label="2:00 pm">
              2:00 pm
            </option>
            <option value="14:30" label="2:30 pm">
              2:30 pm
            </option>
            <option value="15:00" label="3:00 pm">
              3:00 pm
            </option>
            <option value="15:30" label="3:30 pm">
              3:30 pm
            </option>

            <option value="" label="Dinner Time's">
              Dinner Time
            </option>
            <option value="18:00" label="6:00 pm">
              6:00 pm
            </option>
            <option value="18:30" label="6:30 pm">
              6:30 pm
            </option>
            <option value="19:00" label="7:00 pm">
              7:00 pm
            </option>
            <option value="19:30" label="7:30 pm">
              7:30 pm
            </option>
            <option value="20:00" label="8:00 pm">
              8:00 pm
            </option>
            <option value="20:30" label="8:30 pm">
              8:30 pm
            </option>
            <option value="21:00" label="9:00 pm">
              9:00 pm
            </option>
            <option value="21:30" label="9:30 pm">
              9:30 pm
            </option>
            <option value="22:00" label="10:00 pm">
              10:00 pm
            </option>
            <option value="22:30" label="10:30 pm">
              10:30 pm
            </option>
            <option value="23:00" label="11:00 pm">
              11:00 pm
            </option>
            <option value="23:30" label="11:30 pm">
              11:30 pm
            </option>
            <option value="00:00" label="12:00 am">
              12:00 am
            </option>
            <option value="00:30" label="12:30 am">
              12:30 am
            </option>
            <option value="01:00" label="1:00 am">
              1:00 am
            </option>
            <option value="1:30" label="1:30 am">
              1:30 am
            </option>
          </select>
        </div>

        <div>
          <label>Notes</label>
          <input
            type="text"
            placeholder="Additonal Notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        <button type="submit">Submit Reservation</button>
      </form> */
}
