import React from 'react';
import './index.css';
import {
    Card,
    CardBody,
    Container,
    Row,
    Col,
    Collapse
} from 'reactstrap';
import CodeIcon from '@material-ui/icons/Code';

const experiences = [
    {
        key: 1,
        title: "Mobile Engineer",
        company: "PlanGrid",
        location: "San Francisco, CA",
        date: "Jan 2020 - Apr 2020",
        description: `I worked on the SiteVision team, responsible for the gallery and all media (photos, videos, 360 photos, etc.) within the app. I got to build a variety of new features end-to-end, as well as improve on existing features on the iOS app! I worked with both Swift and Objective-C, as well as utilizing the architectural patterns flux and MVC (I actually wrote a work-term report comparing the two, let me know if you want to read it)!
            During my time here, I learned how to build solid, testable, and reusable components, as well as learned how to write unit tests with Quick and XCTest. I also got to work a bit on the Android app with Kotlin. It was definitely a huge learning curve, but worth it because I learned so much!
            During hack week, I got to work on a back-end project with another intern, so I was able to deepen my understanding of how our back-end services
            functioned and interacted with our app.
        `,
        color: "#eccddd",
        personal: `I learned a lot here, and it was an amazing opportunity to work on and interact with so many different platforms! P.S. The office was amazing because I got to see so many office dogs.`
    },
    {
        key: 2,
        title: "iOS Developer",
        company: "Osellus Mobile",
        location: "Toronto, ON",
        date: "Apr 2019 - Aug 2019",
        description: `I worked on the iOS side for the company flagship app. My responsibilities included mainly implementing new features, some of which were end-to-end and required designing the services needed, data structures to be used, and etc. 
        The largest project I was able to pick up was creating a new chat messaging feature within the app. This was definitely a challenge, as no other component of the app had similar functionalities to it, and I was able to learn a lot from this project alone! Through this project, I learned about cacheing to support offline interactions, asynchrounous programming, and a lot about UIKit and how to create a chat box UI.`,
        color: "#E0EBF1",
        personal: `This was my first ever internship, and also my first time doing mobile development. I'm super grateful for the opportunities I had here that introduced me to the world of iOS!`
    }
];

class ExperienceSection extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    } 

    render() {

        var deckStyle = {
            marginTop: '20px'
        }

        return(
            <div className="experienceSection" id="experience" >
                <h1 className="sectionTitleText" >EXPERIENCE</h1>
                <p className="subtitleText" >Here's an informal version of my <a href="Stephanie Gu Resume Fall 2019.pdf" target="_blank">resume</a>!</p>
                <Container style={deckStyle} >
                    <Row>
                        {experiences.map(item => {
                            return (
                                <Col key={item.key}>
                                    <ExperienceCard
                                        key={item.key}
                                        title={item.title}
                                        company={item.company}
                                        location={item.location}
                                        date={item.date}
                                        description={item.description}
                                        personal={item.personal}
                                        color={item.color}
                                    />
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
                <Goals />
            </div>
        );
    }
}

class ExperienceCard extends React.Component {
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

        var titleStyle = {
            fontFamily: 'JostBold',
            fontSize: '24px',
            color: '#292929'
        }

        var secondaryStyle = {
            color: '#292929'
        }

        var descriptionStyle = {
            paddingTop: '10px',
        }

        var cardStyle = {
            border: 'none',
            //borderRadius: '0px',
            paddingRight: '20px',
            cursor: 'pointer'
        }

        var clickForMore = {
            marginTop: '25px',
            fontSize: '16px',
        }

        var clickButtonStyle = {
            background: this.props.color,
            paddingLeft: '5px',
            paddingRight: '5px',
            borderRadius: '5px'
        }

        var border = "8px solid " + this.props.color
        var split = this.props.description.split('\n')
        var key = 0
        var lines = split.map(line => {
            key++
            return(
                <p key={key}>{line}</p>
            );
        })

        return(
            <Card style={{ ...cardStyle, ...{ borderLeft: border } }} onClick={this.toggle} >
                <CardBody>
                    <h1 className="bodyText" style={titleStyle} >{this.props.title}</h1>
                    <h1 className="bodyText" style={secondaryStyle} >{this.props.company}</h1>
                    <h1 className="subtitleText" >{this.props.location}</h1>
                    <h1 className="subtitleText" >{this.props.date}</h1>
                    <Collapse isOpen={!this.state.isOpen}>
                        <p className="subtitleText" style={clickForMore}><span style={clickButtonStyle} >Click for more!</span></p>
                    </Collapse>
                    <Collapse isOpen={this.state.isOpen} >
                        <div className="subtitleText" style={descriptionStyle} >{lines}</div>
                        <p className="subtitleText" style={{ fontFamily: 'JostBold' }}>Personal Note: <span className="subtitleText">
                            {this.props.personal}
                        </span>
                        </p>
                    </Collapse>
                </CardBody>
            </Card>
        );
    }
}

class GoalCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        var containerStyle = {
            background: this.props.colour,
            borderRadius: '10px',
            paddingTop: '20px',
            paddingBottom: '20px',
            marginTop: '15px',
        }

        var bodyStyle = {
            color: 'white',
        }

        var rowStyle = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }

        return(
            <Container style={containerStyle} >
                <Row>
                    <Col md="2" className="verticalCenter" style={{ borderRight: '1px solid #2f3042'}}>
                        <Container>
                            <Row>
                                <Col md="1">
                                    <CodeIcon style={{ fill: 'white' }} />
                                </Col>
                                <Col className="bodyText" style={{ color: 'white' }} >{this.props.title}</Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col md="10">
                        <Col className="subtitleText" style={bodyStyle} >
                            {this.props.description}
                        </Col>
                    </Col>
                </Row>
            </Container>
        );
    }
}

const futureGoals = [
    {
        key: 1,
        title: "Backend",
        colour: '#383d5c',
        description: `
            While I've developed features end-to-end in mobile apps and communicated a lot with backend services, I've always wanted to 
            be able to have a full understanding of what exactly I was communicating with. I would love to dive deeper into the world of 
            backend development! There are so many different things that can be accomplished in this field, and I am excited to learn it all!
        `
    },
    {
        key: 2,
        title: "Game Dev",
        colour: '#383d5c',
        description: `
            I grew up playing a lot of video games, and game development is actually one of the reasons I wanted to pursue computer science
            in the first place! I would love to be able to be apart of the creation of a game that I would likely purchase and play myself. 
            It's super surreal being able to see your own work giving enjoyment to so many players, 
            and it is something I definitely want to experience in the future.
        `
    }
]

class Goals extends React.Component {
    render() {
        var headerStyle = {
            fontSize: '35px'
        }

        var containerStyle = {
            paddingTop: '30px'
        }

        return(
            <Container style={containerStyle}>
                <Row>
                    <h1 className="sectionTitleText" style={headerStyle}>For the Future:</h1>
                    <p className="subtitleText" >
                        Although my previous experience has been primarily doing iOS/mobile development, I would love an opportunity to explore and work in other fields!
                        What I love about software development is how there's <span style={{ fontStyle: 'italic' }} >always</span> something new to learn. Here's a list of just some of the areas I hope to work in soon!
                    </p>
                </Row>
                    {futureGoals.map(item => {
                        return (
                            <Row key={item.key}>
                                <GoalCard title={item.title} colour={item.colour} description={item.description} />
                            </Row>
                        );
                    })
                    }
            </Container>
        );
    }
}

export default ExperienceSection;