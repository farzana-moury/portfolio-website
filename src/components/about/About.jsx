import MotionHoc from "../higher order components/MotionHoc"
import "./about.scss"
import profile from "../../images/profile images/metoo.jpeg"
import { Container, Row, Col } from "react-bootstrap"

const About = () => {
    return (
        <section className="about">
            <Container>
                <h1>About Me</h1>
                <Row>
                    <Col xs={12} md={6} xl={5}>
                        <img src={profile} alt="About Img" width={450} />
                    </Col>

                    <Col xs={12} md={6} xl={7}>
                        <div>
                            <p>Thanks for visiting my website ☻ you're always welcome!</p>
                                <br />
                            <p>My name is <strong>Farzana Moury</strong>, a compassionate Muslim with a knack for creativity. <br/>Having earned my Advanced Diploma in <strong>Mobile Applications Development</strong>,
                            I am now pursuing my Bachelor of <strong>Computer Science</strong>.</p>
                            <br />

                            <p>I love making <strong>eye-catching</strong> websites, <strong>delightful</strong> games, and <strong>professional</strong> apps. When I'm not programming, you can find me
                                <ul>
                                    <li>enjoying nature in all its glory</li>
                                    <li>reading or writing</li>
                                    <li>doin' pixel art</li>
                                    <li>painting</li>
                                </ul>
                            </p>
                            <br/>

                            <p>Technical skills
                                <br />
                                <strong>Languages</strong>
                                <ul>
                                    <li>Java, Swift, C#, HTML, CSS, JavaScript, Python, Dart</li>
                                </ul>
                            </p>
                            <p><strong>Frameworks</strong>
                                <ul>
                                    <li>Android Studio, Xcode, Flutter, React, Bootstrap, Unity</li>
                                </ul>
                            </p>
                            <p><strong>Tools</strong>
                                <ul>
                                    <li>GitHub, IntelliJ IDEA, VSCode, MySQL, Figma, Adobe XD</li>
                                </ul>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

const AboutComponent = MotionHoc(About)

export default AboutComponent