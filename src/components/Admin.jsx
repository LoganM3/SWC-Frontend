import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

 export default function Admin(){

    return(
        <Form>
            <h1>Admin Login</h1>
        <Form.Group className="username" controlId="formBasicUserName">
          <Form.Label>username</Form.Label>
          <Form.Control type="username" placeholder="Enter Username" />
        </Form.Group>
  
        <Form.Group className="password" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
    
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
}

