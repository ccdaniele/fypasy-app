// Pending:
// check next.js API routes https://nextjs.org/docs/pages/building-your-application/data-fetching/building-forms 

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



export default function New() {


  const [npName, setnpName ] = useState('');
  const [npBudget, setnpBudget ] = useState(0);
  const [npTime, setnpTime ] = useState(0);
  
  const submitNewProject = async (event) =>{
    
    event.preventDefault();

    const newObj ={
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
  
          name: event.target.projectName.value,
          time: event.target.projectTime.value,
          budget: event.target.projectBudget.value

      })
    }
    
    const endpoint = 'http://localhost:3000/newproject'

    fetch(endpoint,newObj)
    .then(resp=>resp.json())
    .then(data=>{console.log(data)})
  }

  return (
    <Container className="md-container">
      <Head>
        <title>ReactJS with reactstrap</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Form onSubmit={submitNewProject}>
      <Row>
          <Col md={4}>
          <FormGroup>
              <Label for="projectName" htmlFor="projectName">Name</Label>
              <Input id="projectName" name="projectName" placeholder="name your project" type="text"/>
          </FormGroup>
          </Col>
          <Col md={4}>
          <FormGroup>
          <Label for="projectBudget" htmlFor="projectBudget">Budget</Label>
              <Input id="projectBudget" name="projectBudget" placeholder="aprox project budget" type="text"/>
          </FormGroup>
          </Col>
          <Col md={4}>
          <FormGroup>
          <Label for="projectTime" htmlFor='projectTime'>Time</Label>
              <Input id="projectTime" name="projectTime" placeholder="aprox project time" type="text"/>
          </FormGroup>
          </Col>
      </Row>
      <Button type="submit">Create project</Button>
    </Form>
      <footer className="cntr-footer"><p> Powered by apedalmedia</p></footer>
    </Container>
  )
}