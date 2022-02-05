import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardImg,
  CardText,
  Container,
} from "reactstrap";
import usericon from "./usericon.svg";
import Users from "./fakerAPI.json";
import "./style.css";

function Info() {
  return (
    <Container>
      {Users.map((e) => (
        <Card>
          <CardHeader>
            <CardImg src={usericon} />
          </CardHeader>
          <CardBody>
            <CardText>
              <b>User Id:</b> {e.uuid}
            </CardText>
            <CardText>
              <b>First Name:</b> {e.first_name}
            </CardText>
            <CardText>
              <b>Last Name:</b> {e.last_name}
            </CardText>
            <CardText>
              <b>Birthday:</b> {e.birthday}
            </CardText>
          </CardBody>
        </Card>
      ))}
    </Container>
  );
}
export default Info;
