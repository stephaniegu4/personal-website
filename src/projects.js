import React from 'react';
import './index.css';
import { 
    Container, 
    Row, 
    Col, 
    Collapse
} from 'reactstrap';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const projects = [
    {
        key: 1,
        title: 'EcoStore',
        skills: 'Swift, Microsoft Azure, CoreML',
        summary: 'EcoStore is an app that encourages being more green through gamifying the act of recycling!',
        description: ` 
        In order to encourage people to recycle more, we created a game with super cute animals that all need saving. 
        Our app uses a tensorflow model trained using Microsoft Azure to identify if an item is recyclable or not. The more they reycle,
        the more points they get, and the more animals they can unlock on the path to restoring the ecosystem! This was a team project
        created in a 17 hour sprint for Hack The North 2019, and although the final product is not perfect, it was an awesome learning 
        experience.
        `
    },
    {
        key: 2,
        title: 'Biquadris',
        skills: 'C++',
        description: '',
        summary: ''
    },
    {
        key: 3,
        title: 'Kingdom Hearts Game',
        skills: 'Java',
        description: '',
        summary: ''
    },
    {
        key: 4,
        title: 'Personal Website',
        skills: 'ReactJS, PHP, CSS',
        description: '',
        summary: ''
    }
]

class ProjectSection extends React.Component {
    render() {

        var headerStyle = {
            color: 'white',
            paddingTop: '50px'
        }

        return(
            <Container id="projects" fluid >
                <h1 className="sectionTitleText" style={headerStyle} >PROJECTS</h1>
                <Container>
                    <Row>
                    {projects.map(item => {
                        return(
                            <Col md="4">
                                <ProjectCard
                                    key={item.key}
                                    title={item.title}
                                    skills={item.skills}
                                    description={item.description}
                                    summary={item.summary}
                                />
                            </Col>
                        );
                    })}
                    </Row>
                </Container>
            </Container>
        );
    }
}

class ProjectCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        var cardStyle = {
            background: '#ede4e9',
            marginTop: '15px',
            paddingTop: '10px',
            paddingBottom: '5px',
            borderRadius: '10px',
            cursor: 'pointer'
        }

        var imgStyle = {
            width: '300px'
        }

        var titleStyle = {
            fontSize: '24px',
            fontFamily: 'JostBold'
        }

        var descriptionStyle = {
            paddingTop: '15px',
            fontSize: '16px'
        }

        var iconStyle = {
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '5px'
        }

        return(
            <Container style={cardStyle} onClick={this.toggle} >
                <Row>
                    <Col className="bodyText" style={titleStyle} >
                        {this.props.title}
                    </Col>
                </Row>
                <Row>
                    <Col className="subtitleText" >{this.props.skills}</Col>
                </Row>
                <Collapse isOpen={!this.state.isOpen}>
                    <Row>
                        <Col className="subtitleText" style={descriptionStyle} >{this.props.summary}</Col>
                    </Row>
                </Collapse>
                <Collapse isOpen={this.state.isOpen}>
                    <Row>
                        <Col className="subtitleText" style={descriptionStyle} >{this.props.description}</Col>
                    </Row>
                </Collapse>
                <Row>
                    <ExpandMoreIcon style={iconStyle} />
                </Row>
            </Container>
        );
    }
}

export default ProjectSection;