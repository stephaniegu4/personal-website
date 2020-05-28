import React from 'react';
import './index.css';
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ConnectIcons } from './contact.js';

class AboutSection extends React.Component {
    render() {
        var imgStyle = {
            width: '100%',
            height: 'auto'
        }

        var bodyStyle = {
            paddingTop: '20px',
            paddingBottom: '20px'
        }

        var iconStyle = {
            height: '40px',
            width: '40px',
            fill: 'white'
        }

        return(
            <div id="about" >
                <Container fluid style={{paddingTop: '20px'}}>
                    <Row>
                        <Col md="5"><img style={imgStyle} src={require('./images/sg.jpg')} /></Col>
                        <Col md="6" className="verticalCenter" style={bodyStyle} >
                            <Container fluid>
                                <Row>
                                    <Col md="12">
                                        <p className="subtitleText" style={{ color: 'white' }}>
                                            Hey there! I'm a second year student at the University of Waterloo currently pursuing a degree in computer science. 
                                            I'm an aspiring software developer hoping to grow, excel, and make an impact wherever I go!
                                            I'm always looking for chances to learn new things and meet new people, and <span style={{ fontFamily: 'JostBold' }} >I'm actively looking for internships in Winter 2021 or Summer 2021. </span>
                                            <br /><br />
                                            If I'm not working or playing with the dogs, you can probably find me pursuing my dream of being an amateur baker. Ask me for my 
                                            chocolate chip cookies recipe <span role="img" aria-label="cowboy emoji">🤠</span>.
                                            <br /><br />
                                            Hobbies include: eating, online shopping too much, volleyball, re-bingeing Brooklyn 99
                                            <br /><br />
                                            If you like what you see or you just want my cookies recipe, I'd love to connect! You know where to find me.
                                        </p>
                                    </Col>
                                </Row>
                                <Row style={{paddingTop: '20px', color: 'white'}} >
                                    <Col md="12" className="subtitleText">Scroll for more me!</Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <ExpandMoreIcon style={iconStyle} />
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col md="1" >
                            <ConnectIcons fill="white" />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export { AboutSection }