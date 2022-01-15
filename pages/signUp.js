import Link from "next/link";
import { useState } from "react";
import BaseURL from "../lib/baseUrl"
import { useRouter } from "next/router"; 
import {Form,Button,Row,Col,InputGroup,} from 'react-bootstrap'
import { Alert } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';







const SignUp =()=>{

  // states
  const [name,setName]= useState('')
  const [password,setPassword]= useState('')
  const [email,setEmail]= useState('')
  const router = useRouter();

  const [validated, setValidated] = useState(false);

// All the Event Handlers

  const nameHandler=(e)=>{
    setName(e.target.value)
  }
  // Email Handler
  const emailHandler=(e)=>{
    setEmail(e.target.value)
  }

  // password handler
  const passwordHandler=(e)=>{
    setPassword(e.target.value)
  }
  // submit Handler
  const submitHandler=async(e)=>{
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
  
    const res = await fetch(`${BaseURL}/api/signUp`,{
      method:"POST",
      headers:{
        "content-Type": "application/json"
      },
      body:JSON.stringify({
         email,
         password,
         name

      })
    })
    
    const res2 = await res.json()
    console.log(res2)
    if(res2.error){
      <Alert variant="danger">{res2.message}</Alert>
    }else{
      <Alert variant="success">Success</Alert>

    }
    
   

  }
    return(
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your Account</h2>
         
        </div>
        <Form noValidate validated={validated} onSubmit={submitHandler}>
      <Col className="mb-3 2xl:w-3/4">
        <Form.Group as={Col} md="4" controlId="validationCustom01" className="2xl:w-3/4">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Please Enter your name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        
        
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Email Address</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="Email Address"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide valid email address.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Password</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="password"
              placeholder="Password"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide valid email address.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Col>
   
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
      </div>
    </div>
    )
}


export default SignUp;