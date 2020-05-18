import React from 'react';
import './index.css';
import {
    Container,
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
} from 'reactstrap';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import NotesIcon from '@material-ui/icons/Notes';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

class ContactSection extends React.Component {
    render() {
        var headerStyle = {
            fontSize: '50px',
            overflowWrap: 'break-word',
            paddingTop: '100px'
        }

        var contactStyle = {
            background: '#22222e',
            fontSize: '30px',
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            justifyContent: 'center',
            paddingTop: '10px',
            paddingBottom: '10px',
            overflowWrap: 'break-word'
        }

        var iconStyle = {
            width: '70px',
            height: '70px',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '10px',
            marginBottom: '10px'
        }

        var rowStyle = {
            marginTop: '30px',
        }

        var linkStyle = {
            textDecoration: 'none',
            color: 'white'
        }

        return(
            <div style={{ marginLeft: '10%', marginRight: '10%' }}>
                <h1 className="headerText" style={headerStyle} >Connect with me!</h1>
                <Container style={{ paddingTop: '40px' }} >
                    <Row>
                        <Col md={{ size: 2, offset: 1 }}>
                            <NotesIcon style={iconStyle} />
                        </Col>
                        <Col md="8" style={contactStyle} className="bodyText" >
                            Click for my resume! 
                        </Col>
                    </Row>
                    <Row style={rowStyle} >
                        <Col md={{ size: 2, offset: 1 }}>
                            <EmailIcon style={iconStyle} />
                        </Col>
                        <Col md="8" style={contactStyle} className="bodyText" >
                            s53gu@uwaterloo.ca
                        </Col>
                    </Row>
                    <Row style={rowStyle} >
                        <Col md={{ size: 2, offset: 1 }}>
                            <GitHubIcon style={iconStyle} />
                        </Col>
                        <Col md="8" style={contactStyle} className="bodyText" >
                            <a href="http://www.github.com/stephaniegu4" style={linkStyle} >stephaniegu4</a>
                        </Col>
                    </Row>
                </Container>
            </div>
        );  
    }
}

const ConnectIcons = (props) => {

    var iconStyle = {
        fill: props.fill,
        width: '40px',
        height: '40px'
    }

    return (
        <Container>
            <Row>
                <Col>
                    <a href="http://www.github.com/stephaniegu4">
                        <GitHubIcon style={iconStyle} className="link-icon" />
                    </a>
                </Col>
                <Col>
                    <a href="mailto: s53gu@uwaterloo.ca">
                        <EmailIcon style={iconStyle} className="link-icon" />
                    </a>
                </Col>
                <Col>
                    <a href="http://www.linkedin.com/in/gu-stephanie" >
                        <LinkedInIcon style={iconStyle} className="link-icon" />
                    </a>
                </Col>
                <Col>
                    <NotesIcon style={iconStyle} className="link-icon" />
                </Col>
            </Row>
        </Container>
    );
}

const ContactForm = () => {

    var containerStyle = {
        marginLeft: '25%',
        marginRight: '25%',
        marginTop: '50px',
        marginBottom: '50px'
    }

    var headerText = {
        fontFamily: 'JostRegular',
        fontSize: '45px',
        overflowWrap: 'break-word'
    }

    var subtitleText = {
        fontFamily: 'JostLight',
        color: '#4f4d49'
    }

    var inputStyle = {
        borderRadius:'0',
        border: '0',
        borderBottom: '1px solid black'
    }

    var buttonStyle = {
        borderRadius: '0'
    }

    return(
        <div style={containerStyle} >
            <h1 style={headerText} >CONTACT</h1>
            <p className="bodyText" style={subtitleText} >Connect with me and leave a message!</p>
            <Form>
                <Row form>
                    <Col md={6} >
                        <FormGroup>
                            <Input type="name" name="name" placeholder="Name*" required style={inputStyle} />
                        </FormGroup>
                    </Col>
                    <Col md={6} >
                        <FormGroup>
                            <Input type="number" name="number" placeholder="Phone Number" style={inputStyle} />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Input type="email" name="email" placeholder="Email*" required style={inputStyle} />
                </FormGroup>
                <FormGroup>
                    <Input type="textarea" placeholder="Message" style={inputStyle} />
                </FormGroup>
                <Button outline color="secondary" style={buttonStyle} >Submit</Button>
            </Form>
        </div>
    );
}

export default ContactSection;
export { ConnectIcons, ContactForm };