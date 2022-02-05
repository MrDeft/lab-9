import { Button, Card, CardBody, CardImg, CardTitle, Col, Container, Row } from 'reactstrap'
import Users from "./fakerAPI.json";
import usericon from "./usericon.svg";
import { Link } from "react-router-dom";

function Show() {
  return (
    <div>
      <h2 >User</h2>
      <Container>
        <Row>
          {
          
          Users.map((post) => (
            
            <Col md="2" key={post.uuid}>
              <Card>
                <CardImg src={usericon} />
                <CardBody>
                  <CardTitle className="title">{post.first_name}</CardTitle>
                  <div className="title">
                    <Link to="/info">
                      <Button color="success"> Batafsil...</Button>
                    </Link>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))
          
          }

        </Row>
      </Container>
    </div>
  );
}
export default Show;
// 22 ok 12 lab .  noyabr 3 lab