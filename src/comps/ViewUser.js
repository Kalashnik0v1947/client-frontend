import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { get } from "../http/service";

const Profile = () => {
  const [resos, setResos] = React.useState([]);
  const { userId } = useParams();

  React.useEffect(() => {
    get(`/user/profile/${userId}`)
      .then((results) => {
        console.log("Are you logged in?", results.data);
        setResos(results.data.userProfile);
      })
      .catch((err) => {
        console.error(err.message);
        // navigate("/login");
      });
  }, []);

  return (
    <div >
    
        {resos.map((reso) => {
          return (
            <div >
           
                <p>{reso.name}</p>
                <p>{reso.email}</p>
                <p>{reso.phone}</p>
                <p>{reso.guests}</p>
                <p>
                  {new Date(reso.date).toLocaleDateString("en-US", {
                    timeZone: "UTC",
                  })}
                </p>
                <p>{reso.time}</p>
                <p>{reso.notes}</p>
                <p>{reso.creatorId.username}</p>
            
            </div>
          );
        })}
     
    </div>
  );
};

export default Profile;
