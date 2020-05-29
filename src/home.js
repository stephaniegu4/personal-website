import React from 'react';
import './index.css';
import { Container, Row, Col } from 'reactstrap';
import TextTransition from 'react-text-transition';
import { AboutSection } from './about.js';
import { ContactForm } from './contact.js';
import ExperienceSection from './experience.js';
import ProjectSection from './projects.js';

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
            index: this.state.index == descriptors.length - 1 ? 0 : this.state.index + 1,
            colorIndex: this.state.colorIndex == colors.length - 1 ? 0 : this.state.colorIndex + 1,
            imgIndex: this.state.imgIndex == icons.length - 1 ? 0 : this.state.imgIndex + 1
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
                            <img src={require('./images/' + icons[this.state.imgIndex])} id="headerIcon" alt="" />
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

class Profile extends React.Component {
    render() {
        var backgroundStyle = {
            background: '#22222e',
            paddingTop:'90px',
            paddingBottom:'90px',
            paddingLeft: '5%',
            paddingRight: '5%'
        }

        var imgStyle = {
            width:'100%',
            height:'auto'
        }
        
        var bodyStyle = {
            color: 'white', 
            paddingTop: '20px', 
            paddingBottom: '20px'
        }

        return(
            <div style={{...containerStyle, ...backgroundStyle}}>
                <Container fluid>
                    <Row>
                        <Col md="5" ><img style={imgStyle} src={require('./images/profile.jpg')} /></Col>
                        <Col md="7" className="verticalCenter">
                            <p className="bodyText" style={bodyStyle}>
                                Hey there! I'm a second year student at the University of Waterloo currently pursuing a degree in computer science.
                                I'm an aspiring software developer hoping to grow, excel, and make an impact wherever I go!
                                I'm always looking for chances to learn new things and meet new people, and I'm actively looking for internships in Winter 2021 or Summer 2021.
                                <br /><br />
                                If I'm not working or playing with the dogs, you can probably find me pursuing my dream of being an amateur baker. Ask me for my
                                chocolate chip cookies recipe :).
                                <br /><br />
                                Hobbies include: eating, online shopping too much, volleyball, re-bingeing Brooklyn 99
                                <br /><br />
                                If you like what you see or you just want my cookies recipe, I'd love to connect! You know where to find me.
                            </p>
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
            <HeaderText />
            <AboutSection />
            <ExperienceSection />
            <ProjectSection />
            <ContactForm />
        </div>
    );
}

export default Home;