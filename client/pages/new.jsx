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

export default function New() {
  return (
    <Container className="md-container">
      <Head>
        <title>ReactJS with reactstrap</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Form>
      <Row>
          <Col md={6}>
          <FormGroup>
              <Label for="exampleEmail">
              Email
              </Label>
              <Input
              id="exampleEmail"
              name="email"
              placeholder="with a placeholder"
              type="email"
              />
          </FormGroup>
          </Col>
          <Col md={6}>
          <FormGroup>
              <Label for="examplePassword">
              Password
              </Label>
              <Input
              id="examplePassword"
              name="password"
              placeholder="password placeholder"
              type="password"
              />
          </FormGroup>
          </Col>
      </Row>
      <FormGroup>
          <Label for="exampleAddress">
          Address
          </Label>
          <Input
          id="exampleAddress"
          name="address"
          placeholder="1234 Main St"
          />
      </FormGroup>
      <FormGroup>
          <Label for="exampleAddress2">
          Address 2
          </Label>
          <Input
          id="exampleAddress2"
          name="address2"
          placeholder="Apartment, studio, or floor"
          />
      </FormGroup>
      <Row>
          <Col md={6}>
          <FormGroup>
              <Label for="exampleCity">
              City
              </Label>
              <Input
              id="exampleCity"
              name="city"
              />
          </FormGroup>
          </Col>
          <Col md={4}>
          <FormGroup>
              <Label for="exampleState">
              State
              </Label>
              <Input
              id="exampleState"
              name="state"
              />
          </FormGroup>
          </Col>
          <Col md={2}>
          <FormGroup>
              <Label for="exampleZip">
              Zip
              </Label>
              <Input
              id="exampleZip"
              name="zip"
              />
          </FormGroup>
          </Col>
      </Row>
      <FormGroup check>
          <Input
          id="exampleCheck"
          name="check"
          type="checkbox"
          />
          <Label
          check
          for="exampleCheck"
          >
          Check me out
          </Label>
      </FormGroup>
      <Button>
          Sign in
      </Button>
      </Form>

      <footer className="cntr-footer">
        <p> Powered by apedalmedia</p>
      </footer>
    </Container>
  )
}