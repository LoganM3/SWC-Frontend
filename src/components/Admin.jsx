import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';  /// want to redirct to home page
                                                /// want to make add buttons vanish if not logged in

 export default function Admin({setToken, setIsAdmin,}){
     const [username, setUsername] = useState()
     const [password, setPassword] = useState()
     let navigate = useNavigate();
    const [form, setForm] = useState({})

    const handleLogin = (e) =>{

        e.preventDefault();
    
         fetch("https://swc-api-aa731.web.app/admin"
          //fetch("http://localhost:5050/admin"
            ,{
            method: "POST",
            //  mode: "cors",
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ username, password })
        })
        .then(res => res.json())
        .then(data =>{
            setToken(data.token);
            localStorage.setItem('token', data.token)
            console.log(data.token)
            navigate("/")
           setIsAdmin(true)   // if username == username && password == password????
        })
        .catch(err => alert(err.message))
        
    }

    const handleLogOut = (e) => {
      localStorage.clear();
      window.location.href = '/';
    }
  
  
    return(
        <Form  onSubmit={handleLogin}  >
            <h1>Admin Login</h1>
        <Form.Group className="username" controlId="formBasicUserName">
          <Form.Label>username</Form.Label>
          <Form.Control 
          type="username"
          name="username"
          placeholder="Enter Username" 
          onChange={(e) => setUsername(e.target.value)}/>
        </Form.Group>
  
        <Form.Group className="password" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
           type="password" 
           name="password"
           placeholder="Password" 
           onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
    
        <Button variant="primary" type="submit" >Login </Button>
        <Button onClick={handleLogOut}>Logout</Button>
      </Form>
    )
}

