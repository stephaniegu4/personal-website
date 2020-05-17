import React from 'react';
import './index.css';
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import NotesIcon from '@material-ui/icons/Notes';

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

export default ContactSection;