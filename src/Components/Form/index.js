import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const Pesquisa = ({ user, loading, error, buttonRepoAction,buttonStarredAction, changeUser }) => (
  <div className="formContainer">
    <Form>
      <Form.Group>
        <input
          type="text"
          className="userInput"
          value={user}
          placeholder="Buscar usuário"
          onChange={e => changeUser(e.target.value)}
        />
      </Form.Group>
      <Col xs="auto" className="my-1">
        <Button variant="primary" size="sm" onClick={buttonRepoAction}>
          REPO
        </Button>
      </Col>
      <Col xs="auto" className="my-1">
        <Button variant="primary" size="sm" onClick={buttonStarredAction}>
          STARRED
        </Button>
      </Col>    
      <p className="errorText">{error}</p>
    </Form>
  </div>
);

export default Pesquisa;
