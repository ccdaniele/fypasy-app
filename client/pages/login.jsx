import Head from 'next/head';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input

} from 'reactstrap'
import { useState } from 'react'

export default function Login() {
    

    const validateUser = async (event) =>{
    
        event.preventDefault();
        
        const newObj ={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: event.target.nuEmail.value,
            password: event.target.nuPassword.value
        })
        }
        
        const endpoint = 'http://localhost:3000/login'
        fetch(endpoint,newObj)
        .then(resp=>resp.json())
        .then(data=>{console.log(data,"Getting user validation")})
    }

  return (
    <Container className="md-container">
      <Head>
        <title>theapp</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Form onSubmit={submitNewProject}>
      <Row>
    <Col md={3}>
      <FormGroup>
        <Label for="nuEmail" htmlFor="nuEmail">Email</Label>
        <Input id="nuEmail" name="email" placeholder="your email" type="email"/>
      </FormGroup>
    </Col>
    </Row>
    <Row>
    <Col md={3}>
      <FormGroup>
        <Label for="nuPassword" htmlFor="nuPassword">Password</Label>
        <Input id="nuPassword"name="password"placeholder="your password"type="password"/>
      </FormGroup>
    </Col>
  </Row>
      
      <Button type="submit">Create User</Button>
    </Form>
      <footer className="cntr-footer"><p> Powered by apedalmedia</p></footer>
    </Container>
  )
}