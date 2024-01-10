import React from "react";
import Card from "react-bootstrap/Card";
import { deleteuser } from "../redux/userslice";
import { useDispatch } from "react-redux";
import Edituser from "./Edituser";
function Usercard({ user, ping, setping }) {
  const dispatch = useDispatch();
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={user?.img} />
      <Card.Body>
        <Card.Title>
          <p> {user?.name}</p>
          {user?.Lastname}
        </Card.Title>

        <Card.Text>
          <h6>{user?.email}</h6>
          <p>{user?.age}</p>
          <button
            onClick={() => {
              dispatch(deleteuser(user._id));
              setping(!ping);
            }}
          >
            x
          </button>
          <Edituser user={user} ping={ping} setping={setping} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Usercard;
