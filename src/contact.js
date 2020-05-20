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
    Alert
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
                    <a href="http://www.github.com/stephaniegu4">
                        <GitHubIcon style={iconStyle} className="link-icon" />
                    </a>
                </Col>
                <Col>
                    <a href="mailto: stephaniegu7h@gmail.com">
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
            alertColour: "danger"
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
                    alertColour: 'success'
                })
                this.resetForm()
            } else if (response.data.status === 'fail') {
                this.setState({
                    showAlert: true,
                    alertMessage: 'Message failed to send.',
                    alertColour: 'danger'
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
            borderRadius: '0',
            border: '0',
            borderBottom: '1px solid black'
        }

        var buttonStyle = {
            borderRadius: '0'
        }

        return (
            <div style={containerStyle} >
                <Alert color={this.state.alertColour} isOpen={this.state.showAlert} toggle={this.onDismiss} >
                    {this.state.alertMessage}
                </Alert>
                <h1 style={headerText} >CONTACT</h1>
                <p className="bodyText" style={subtitleText} >Connect with me and leave a message!</p>
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
                </Form>
            </div>
        );
    }
}

export { ConnectIcons, ContactForm };