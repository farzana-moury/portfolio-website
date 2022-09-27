import MotionHoc from "../higher order components/MotionHoc"
import "./home.scss"
import profile from "../../images/profile images/me.PNG"
import { Container, Row, Col } from "react-bootstrap"

const Home = () => {
    return ( 
        <section className="home">
            <div>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1>Hello! I'm Farzie.</h1>
                        <h2>I make apps, games and websites.</h2>
                        <br/><br/>

                        <a href="https://farzanamoury.netlify.app/resume_farzana.pdf"><button>R E S U M E</button></a>
                        
                        <br/><br/><br/>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={profile} alt="Header Img" width={300} />
                    </Col>
                </Row>
            </Container>
            </div>
        </section>
    )
};

const HomeComponent = MotionHoc(Home)

export default HomeComponent