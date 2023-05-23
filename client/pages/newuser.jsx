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

export default function NewUser() {
    

    const submitNewUser = async (event) =>{
    
        event.preventDefault();
        
        const newObj ={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
    
            username: event.target.nuUsername.value,
            email: event.target.nuEmail.value,
            password: event.target.nuPassword.value


        })
        }
        
        const endpoint = 'http://localhost:3000/newproject'
        fetch(endpoint,newObj)
        .then(resp=>resp.json())
        .then(data=>{console.log(data,'new user created')})
    }

  return (
    <Container className="md-container">
      <Head>
        <title>theapp</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Form onSubmit={submitNewUser}>
      <Row>
    <Col md={3}>
      <FormGroup>
        <Label for="nuUsername" htmlFor="nuUsername">Username</Label>
        <Input id="nuUsername"name="username"placeholder="your username"type="text"/>
      </FormGroup>
    </Col>
  </Row>
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