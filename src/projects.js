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
        `,
        emoji: '🌎',
        emojiLabel: 'earth',
        link: 'https://github.com/stephaniegu4/EcoStore'
    },
    {
        key: 2,
        title: 'Biquadris',
        skills: 'C++',
        description: `This was a group project for a C++ Object Oriented Software Development course at university (CS246)! 
        We built both a graphical interface for playing the game using XQuartz, as well as a textual version in the terminal. The functionalities
        of our game include all the basics of Tetris along with increasingly difficult levels, special effects and actions to make the game more competitive. 
        Our implementation uses various design patterns such as MVC, Observer, and Factory. Overall, I learned a lot from working on this project 
        and it was super fun to make!`,
        summary: 'Biquadris is a two-player competitive game of Tetris built with C++.',
        emoji: '🕹',
        emojiLabel: 'joystick'
    },
    {
        key: 3,
        title: 'Personal Website',
        skills: 'ReactJS, PHP, CSS',
        description: `This website was created using ReactJS and CSS. I wrote a PHP script to create the emailing functionality of the contact form
        at the end of this website. I decided to try to make my own personal website in 2018 because I wanted to learn more about React.
        The first version of my website was a complete mess (the opposite of user friendly and mobile friendly), and I am constantly trying to improve it!
        I've learned a lot since then including how to make my app scalable, and taking more into consideration the user experience. I
        still have a lot to learn, so please let me know if you have any feedback for this page!`,
        summary: `You're looking at it right now!`,
        emoji: '🚀',
        emojiLabel: 'rocket',
        link: 'https://github.com/stephaniegu4/personal-website'
    },
    {
        key: 4,
        title: 'Kingdom Hearts Game',
        skills: 'Java',
        description: `This was my first ever largescale project in computer science, so it had a huge impact on me. This was for a highschool 
        computer science course, and developing this game is what kickstarted my interest in game development! It was built using Java Swing, 
        and I had so much fun designing the UI to be Kingdom Hearts themed (my fave video game). I have matured a lot as a developer since then, 
        and I've realized that the code for this game is definitely FAR, far from perfect (or even good to be honest), but developing this game
        was one of the biggest contributors to the decision I made to major in CS, so I'm keeping it here to honour it.`,
        summary: `A Kingdom Hearts themed game inspired by 1942 (plane shooting arcade game).`,
        emoji: '👾',
        emojiLabel: 'alien monster'
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
                        <p className="subtitleText" style={{ color: 'white' }}>
                            These are some of the projects I've worked on in the past! Click on the title to go their respective github repos.
                            Unfortuantely, some of these were projects for a school course (titles in black), so I cannot provide the github link for them, but feel free to reach out
                            if you have any specific questions!
                        </p>
                    </Row>
                    <Row>
                    {projects.map(item => {
                        return(
                            <Col md="4" key={item.key}>
                                <ProjectCard
                                    key={item.key}
                                    title={item.title}
                                    skills={item.skills}
                                    description={item.description}
                                    summary={item.summary}
                                    emoji={item.emoji}
                                    emojiLabel={item.emojiLabel}
                                    link={item.link}
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
                        <a href={this.props.link} target="_blank" id={this.props.link ? "projectLink" : ""} >{this.props.title}</a>
                        <span role="img" aria-label={this.props.emojiLabel} > {this.props.emoji}</span>
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