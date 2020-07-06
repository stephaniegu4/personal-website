import React from 'react';
import './index.css';
import {
    Container,
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    Input,
    Alert,
    Spinner
} from 'reactstrap';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import NotesIcon from '@material-ui/icons/Notes';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import axios from 'axios';

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
                    <a href="http://www.github.com/stephaniegu4" target="_blank" >
                        <GitHubIcon style={iconStyle} className="link-icon" />
                    </a>
                </Col>
                <Col>
                    <a href="mailto: stephaniegu7h@gmail.com" >
                        <EmailIcon style={iconStyle} className="link-icon" />
                    </a>
                </Col>
                <Col>
                    <a href="http://www.linkedin.com/in/gu-stephanie" target="_blank" >
                        <LinkedInIcon style={iconStyle} className="link-icon" />
                    </a>
                </Col>
                <Col>
                    <a href="Resume Spring 2020.pdf" target="_blank" >
                        <NotesIcon style={iconStyle} className="link-icon" />
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

class SimpleContact extends React.Component {
    render() {
        var iconStyle = {
            width: '60px',
            height: '60px',
            marginTop: '10px',
            marginBottom: '10px'
        }

        var descriptionStyle = {
            fontFamily: 'JostRegular',
            fontSize: '18px',
            //background: '#ede4e9',
            borderBottom: '1.5px solid #9ed5e6',
            //paddingLeft: '30px',
            height: '50px',
        }
        
        var rowStyle = {
            paddingTop: '5px'
        }

        var subtitleText = {
            color: '#4f4d49'
        }

        return(
            <div id="contactWrapper" style ={{marginBottom: '40px'}}>
                <div id="simpleContact" >
                    <Container>
                        <Row>
                            <Col md="4">
                                <img src={require('./images/laptop.png')} id="contactIcon" />
                            </Col>
                            <Col md="8" >
                                <Container >
                                    <Row>
                                        <h1 className="sectionTitleText" style={{ marginBottom: '10px' }} >CONTACT</h1>
                                    </Row>
                                    <Row>
                                        <p className="subtitleText" style={subtitleText} >Connect with me!</p>
                                    </Row>
                                    <Row style={rowStyle} className="verticalCenter" >
                                        <Col md="2" >
                                            <GitHubIcon style={iconStyle} />
                                        </Col>
                                        <Col md="10" className="verticalCenter" style={descriptionStyle} >
                                            stephaniegu4
                                    </Col>
                                    </Row>
                                    <Row style={rowStyle} className="verticalCenter" >
                                        <Col md="2" >
                                            <EmailIcon style={iconStyle} />
                                        </Col>
                                        <Col md="10" className="verticalCenter" style={descriptionStyle} >
                                            stephaniegu7h@gmail.com
                                    </Col>
                                    </Row>
                                    <Row style={rowStyle} className="verticalCenter" >
                                        <Col md="2" >
                                            <LinkedInIcon style={iconStyle} />
                                        </Col>
                                        <Col md="10" className="verticalCenter" style={descriptionStyle} >
                                            gu-stephanie
                                    </Col>
                                    </Row>
                                    <Row style={rowStyle} className="verticalCenter" >
                                        <Col md="2" >
                                            <NotesIcon style={iconStyle} />
                                        </Col>
                                        <Col md="10" className="verticalCenter" style={descriptionStyle} >
                                            My resume!
                                    </Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

class ContactForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            number: '',
            message: '',
            showAlert: false,
            alertMessage: '',
            alertColour: "danger",
            showSpinner: false
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(this.state)

        this.setState({
            showSpinner: true
        })

        axios({
            method: "POST",
            url: "http://localhost:3001",
            data: this.state
        }).then((response) => {
            console.log(response)
            if (response.data.status === 'success') {
                this.setState({
                    showAlert: true,
                    alertMessage: 'Message sent successfully!',
                    alertColour: 'success',
                    showSpinner: false
                })
                this.resetForm()
            } else if (response.data.status === 'fail') {
                this.setState({
                    showAlert: true,
                    alertMessage: response.data.message,
                    alertColour: 'danger',
                    showSpinner: false
                })
            }
        })
    }

    onDismiss = () => {
        this.setState({
            showAlert: false,
            alertMessage: '',
            alertColour: ''
        })
    }

    resetForm = () => {
        this.setState({
            name: '',
            email: '',
            number: '',
            message: ''
        })
    }

    render() {
        var subtitleText = {
            color: '#4f4d49'
        }

        var inputStyle = {
            borderRadius: '0',
            border: '0',
            borderBottom: '1px solid black'
        }

        var buttonStyle = {
            borderRadius: '0'
        }

        return (
            <div id="contactWrapper">
                <div id="contact" >
                    <Alert color={this.state.alertColour} isOpen={this.state.showAlert} toggle={this.onDismiss} >
                        {this.state.alertMessage}
                    </Alert>
                    <h1 className="sectionTitleText" >CONTACT</h1>
                    <p className="subtitleText" style={subtitleText} >Connect with me and leave a message!</p>
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        <Row form>
                            <Col md={6} >
                                <FormGroup>
                                    <Input
                                        type="name"
                                        name="name"
                                        placeholder="Name*"
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                        required style={inputStyle} />
                                </FormGroup>
                            </Col>
                            <Col md={6} >
                                <FormGroup>
                                    <Input
                                        type="number"
                                        name="number"
                                        placeholder="Phone Number"
                                        value={this.state.number}
                                        onChange={this.handleChange}
                                        style={inputStyle} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Input
                                type="email"
                                name="email"
                                placeholder="Email*"
                                value={this.state.email}
                                onChange={this.handleChange}
                                required style={inputStyle} />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="textarea"
                                name="message"
                                placeholder="Message*"
                                value={this.state.message}
                                onChange={this.handleChange}
                                required
                                style={inputStyle} />
                        </FormGroup>
                        <Button type="submit" outline color="secondary" style={buttonStyle} >Submit</Button>
                        {this.state.showSpinner ?
                            <Spinner color="secondary" style={{ marginLeft: '15px' }} />
                            : null}
                    </Form>
                </div>
            </div>
        );
    }
}

export { ConnectIcons, ContactForm, SimpleContact };