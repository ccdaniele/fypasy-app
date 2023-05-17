import Head from 'next/head'
import Link from 'next/link';
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardText,
  CardTitle,
  CardBody,
} from 'reactstrap'

export default function Home() {
  return (
    <Container className="md-container">
      <Head>
        <title>fypasi</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Container>
        <h1>
          Welcome to your organized life
        </h1>
        <Container>
          <Row>
            <Col sm="6">
              <Card className="my-3">
                <CardBody>
                  <CardTitle tag="h5">Start a project</CardTitle>
                  <CardText>
                    Create your new project
                  </CardText>
                  <Link
                    color="primary"
                    href="pages/projects/new-project">
                    Create &rarr;
                  </Link>
                </CardBody>
              </Card>
            </Col>
            <Col sm="6">
              <Card className="my-3">
                <CardBody>
                  <CardTitle tag="h5">Check your projects</CardTitle>
                  <CardText>
                    Review and update your projects
                  </CardText>
                  <Link
                    color="primary"
                    href="https://vercel.com/new?utm_source=github&utm_medium=example&utm_campaign=next-example"
                  >
                    My projects &rarr;
                  </Link>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>

      <footer className="cntr-footer">
        <p> Powered by apedalmedia</p>
      </footer>
    </Container>
  )
}
