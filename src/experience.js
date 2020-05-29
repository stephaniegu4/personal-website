import React from 'react';
import './index.css';
import {
    CardDeck,
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
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        color: "#eccddd",
        personal: `P.S. The office was amazing because I got to see so many office dogs.`
    },
    {
        key: 2,
        title: "iOS Developer",
        company: "Osellus Mobile",
        location: "Toronto, ON",
        date: "Apr 2019 - Aug 2019",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        color: "#E0EBF1",
        personal: ``
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
                <p className="subtitleText" >Here's a longer, more detailed version of my <a href="Stephanie Gu Resume Fall 2019.pdf" target="_blank">resume</a>!</p>
                <CardDeck style={deckStyle} >
                    {experiences.map(item => {
                        return(
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
                        );
                    })}
                </CardDeck>
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
            fontSize: '16px'
        }

        var border = "8px solid " + this.props.color

        return(
            <Card style={{ ...cardStyle, ...{ borderLeft: border } }} onClick={this.toggle} >
                <CardBody>
                    <h1 className="bodyText" style={titleStyle} >{this.props.title}</h1>
                    <h1 className="bodyText" style={secondaryStyle} >{this.props.company}</h1>
                    <h1 className="subtitleText" >{this.props.location}</h1>
                    <h1 className="subtitleText" >{this.props.date}</h1>
                    <Collapse isOpen={!this.state.isOpen}>
                        <p className="subtitleText" style={clickForMore}>Click for more!</p>
                    </Collapse>
                    <Collapse isOpen={this.state.isOpen} >
                        <p className="subtitleText" style={descriptionStyle} >{this.props.description}</p>
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