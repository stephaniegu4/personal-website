import React from 'react';
import './index.css';
import { Container, Row, Col } from 'reactstrap';
import TextTransition from 'react-text-transition';
import { AboutSection } from './about.js';
import { ContactForm, SimpleContact } from './contact.js';
import ExperienceSection from './experience.js';
import ProjectSection from './projects.js';
import { ScrollToTopButton } from './navbar.js';

const descriptors = ["software engineer", "dog lover", "food enthusiast"];
const colors = ["#ebbed5", "#9ed5e6", "#484C93"];
const icons = ['animoji.png', 'animoji2.png', 'animoji3.png'];
const containerStyle = {
    // marginRight: '5%',
    // marginLeft: '5%',
    paddingTop: '100px',
    paddingBottom: '80px',
}

class HeaderText extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            colorIndex: 0,
            imgIndex: 0
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ 
            index: this.state.index === descriptors.length - 1 ? 0 : this.state.index + 1,
            colorIndex: this.state.colorIndex === colors.length - 1 ? 0 : this.state.colorIndex + 1,
            imgIndex: this.state.imgIndex === icons.length - 1 ? 0 : this.state.imgIndex + 1
        }), 2500)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {

        var colStyle = {
            paddingTop: '20px',
            paddingBottom: '20px'
        }

        return (
            <div id="start" style={containerStyle} className="verticalCenter fullHeightStyle" >
                <Container>
                    <Row>
                        <Col md={{ size: 4 }} style={{ display: 'flex', alignItems: 'right' }} >
                            <img src={require('./images/' + icons[this.state.imgIndex])} id="headerIcon" alt="animoji icons" />
                        </Col>
                        <Col md="8" className="verticalCenter" style={colStyle} >
                            <Container fluid >
                                <Row>
                                    <Col>
                                        <h1 className="headerText">Hi! I'm Stephanie Gu.</h1>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="subHeaderText">
                                        I'm a <TextTransition
                                            text={descriptors[this.state.index]}
                                            style={{ color: colors[this.state.colorIndex] }}
                                            inline
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="12" className="supportingText" >Get to know me!</Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

const Home = () => {
    return(
        <div>
            <ScrollToTopButton />
            <HeaderText />
            <AboutSection />
            <ExperienceSection />
            <ProjectSection />
            <SimpleContact />
        </div>
    );
}

export default Home;