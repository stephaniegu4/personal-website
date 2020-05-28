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
        color: "#f7a38f",
        personal: `P.S. The office was amazing because I got to see so many office dogs.`
    },
    {
        key: 2,
        title: "iOS Developer",
        company: "Osellus Mobile",
        location: "Toronto, ON",
        date: "Apr 2019 - Aug 2019",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        color: "#b49ee6",
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
                <p className="subtitleText" >Here's a longer, more detailed version of my resume!</p>
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
            <Card style={{ ...cardStyle, ...{ borderLeft: border } }} key={this.props.key} onClick={this.toggle} >
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
            paddingTop: '10px',
            color: 'white',
        }

        return(
            <Container style={containerStyle} >
                <Row>
                    <Col md="1" className="verticalCenter" >
                        <CodeIcon style={{ fill: 'white' }} />
                    </Col>
                    <Col className="bodyText" style={{ color: 'white' }} >{this.props.title}</Col>
                </Row>
                <Row>
                    <Col className="subtitleText" style={bodyStyle} >
                        {this.props.description}
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
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
        key: 2,
        title: "Game Development",
        colour: '#383d5c',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
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
                </Row>
                <Row>
                    {futureGoals.map(item => {
                        return (
                            <Col md="5" key={item.key} >
                                <GoalCard title={item.title} colour={item.colour} description={item.description} />
                            </Col>
                        );
                    })
                    }
                </Row>
            </Container>
        );
    }
}

export default ExperienceSection;