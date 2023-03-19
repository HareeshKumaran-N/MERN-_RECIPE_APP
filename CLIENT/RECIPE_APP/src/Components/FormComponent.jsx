import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
function FormComponet({ isRegistering }) {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [cookie, setCookie] = useCookies(["Access_Token"]);

  const RegisterUser = async () => {
    const endPoint = "http://localhost:3001/auth/register";
    const result = await axios.post(endPoint, { username: userName, password });

    if (result.data.isOk){
      toast.success("user Registered..please login", {
        position: "bottom-center",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      return;
    } 


      toast.warn(`${result.data.message}`, {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    
  };

  const loginUser = async () => {
    let result = await axios.post("http://localhost:3001/auth/login", {
      username: userName,
      password,
    });


     if(result.data.token)
     {
       alert('navigate user to Home');
       setCookie("Access_Token",result.data.token);
       localStorage.setItem("User_ID",result.data.userID)

     }
     else
     {
        
      toast.warn(`${result.data.message}`, {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
     }
  };
  return (
    <Container
      style={{ display: "flex", width: "100%", justifyContent: "center" }}
    >
      <Form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "30%",
          paddingTop: "5%",
          gap: "30px",
         
        }}
      >
        <h2>{(isRegistering)?"Register":"Login"}</h2>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter username"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="Password"
            placeholder="Enter password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Button onClick={isRegistering ? RegisterUser : loginUser} style={{width:'40%',alignSelf:"center"}}>
          {isRegistering ? "Register" : "Login"}
        </Button>
      </Form>
    </Container>
  );
}

export default FormComponet;
