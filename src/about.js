import React from 'react';
import './index.css';
import {
    Card, 
    CardImg, 
    CardDeck,
    CardText, 
    CardBody,
    CardTitle,
    Container,
    Row,
    Col,
} from 'reactstrap';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const bgColor = "#3a3045"
const interestItems = [
    { 
        key: 1, 
        title: "Food", 
        description: `I LOVE food and eating.
                    One of my favourite things about travelling is getting to experience all the new food!
                    I'm always in need of food recommendations, so please send some my way if you have any favourites :).
                    `, 
        src: "food.svg"
    },
    { 
        key: 2, 
        title: "Dogs", 
        description: `I have two dogs that I adore and unfortunately never shut up about. One is named Ciel (Bichon-ShihTzu mix), 
                    and one is named Sora (a huge shiba)!`, 
        src: "pets.svg"
    },
    { 
        key: 3, 
        title: "Games", 
        description: `Some of my favourite games include Animal Crossing New Horizons and Kingdom Hearts! 
                    I've definitely poured hours into my island in ACNH, and Kingdom Hearts is a childhood classic.`, 
        src: "game.svg"
    },
    { 
        key: 4, 
        title: "Activities", 
        description: `Volleyball has been my favourite sport for the past few years. Recently I've also been trying to get into running! I used to dread running,
                    but I'm finally starting to enjoy it!`, 
        src: "sports.svg"
    }
]

const travelItems = [
    {
        key: 1,
        title: "Banff",
        description: `Definitely one of the most beautiful places I've ever been in my life and the best place for hiking! Hoping to go back soon.
                    `,
        src: "banff.jpg"
    },
    {
        key: 2,
        title: "San Francisco",
        description: `I lived in SF for an internship recently and the city really grew on me. The food is AMAZING. 
                    I loved being able to bike everywhere I needed to go in the city.`,
        src: "sf.JPG"
    },
    {
        key: 3,
        title: "Seoul",
        description: `Korean is one of my favourite cuisines so going to Seoul was a dream. I loved exploring the city and learning
                    more about the culture. I miss the convenience stores (if you haven't been to one you're missing out).`,
        src: "seoul.jpg"
    },
    {
        key: 4,
        title: "Chongqing",
        description: `I've been to Chongqing a few times to visit relatives, and it's such a beautiful place! This city is also
                    home to some of my favourite food, and some of the spiciest.`,
        src: "cq.JPG"
    }
]

class AboutSection extends React.Component {
    render() {
        var imgStyle = {
            width: '100%',
            height: 'auto'
        }

        var containerStyle = {
            paddingTop: '100px',
            paddingLeft: '10%',
            paddingRight: '10%'
        }

        var bodyStyle = {
            paddingTop: '20px',
            paddingBottom: '20px'
        }

        var headerStyle = {
            fontSize: '50px',
            overflowWrap: 'break-word'
        }

        var iconStyle = {
            height: '40px',
            width: '40px'
        }

        return(
            <div style={containerStyle} >
                <h1 className="headerText" style={headerStyle} >Me</h1>
                <Container fluid style={{paddingTop: '20px'}}>
                    <Row>
                        <Col md="5"><img style={imgStyle} src={require('./images/sg.jpg')} /></Col>
                        <Col md="7" className="verticalCenter" style={bodyStyle} >
                            <Container fluid>
                                <Row>
                                    <Col md="12">
                                        <p className="bodyText">
                                            Hey there! I'm a student and an aspiring software developer hoping to grow, excel, and make an impact wherever I go!
                                            I'm always looking for chances to learn new things and meet new people, and I'm actively looking for internship opportunities in Winter 2021 or Summer 2021. 
                                            <br /><br />
                                            I'm a creature of habit, so I love an opportunity where I can push myself out of my comfort zone, like when I had to get used to saying "bathroom" instead of "washroom" 
                                            after living in the States for the first time (Canadian eh?).
                                            <br /><br />
                                            If I'm not at home studying or working, you can probably find me pursuing my dream of being an amateur baker. Ask me for my 
                                            chocolate chip cookies recipe :).
                                            <br /><br />
                                            If you like what you see or you just want my cookies recipe, I'd love to connect! You know where to find me.
                                        </p>
                                    </Col>
                                </Row>
                                <Row style={{paddingTop: '20px'}} >
                                    <Col md="12" className="subtitleText">Scroll for more me!</Col>
                                </Row>
                                <Row>
                                    <Col md="12">
                                        <ExpandMoreIcon style={iconStyle} />
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
class Interests extends React.Component {
    render() {
        var containerStyle = {
            paddingTop:'50px',
            paddingBottom:'100px',
            paddingLeft:'10%',
            paddingRight:'10%',
            width:'100%'
        }

        var textStyle = {
            color:'black'
        }

        var headerStyle = {
            fontSize: '45px',
            paddingTop: '100px',
            overflowWrap: 'break-word'
        }

        var imgStyle = {
            width: '60%',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto'
        }

        return(
            <div>
                <h1 className="headerText" style={headerStyle} >Interests</h1>
                <CardDeck style={containerStyle}>
                    {interestItems.map(item => {
                        return (
                            <Card inverse style={{ background: 'white', borderColor: 'white' }} key={item.key} >
                                <CardImg style={imgStyle} top src={require(`./images/icons/${item.src}`)} />
                                <CardBody className="text-center">
                                    <CardTitle style={textStyle} className="bodyText" >{item.title}</CardTitle>
                                    <CardText style={textStyle} className="subtitleText" >{item.description}</CardText>
                                </CardBody>
                            </Card>
                        );
                    })}
                </CardDeck>
            </div>
        );
    }
}

class TravelDoc extends React.Component {
    render() {
        var backgroundStyle = {
            background: bgColor,
            paddingTop: '50px',
            paddingBottom: '50px'
        }

        var headerStyle = {
            fontSize: '50px',
            color: 'white',
            overflowWrap: 'break-word'
        }

        var textStyle = {
            color: 'white',
            textAlign: 'center'
        }

        var imgStyle = {
            width: '100%',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto'
        }

        var containerStyle = {
            paddingLeft: '10%',
            paddingRight: '10%',
            paddingTop: '20px',
            width:'100%'
        }

        return(
            <div style={backgroundStyle} >
                <h1 className="headerText" style={headerStyle}>Travel</h1>
                <div style={{...containerStyle, ...{ paddingTop: '5px' }}} >
                    <p className="subtitleText" style={textStyle} >
                        I'm from Toronto and I love this city, but here are some of my favourite cities I've travelled to!
                        <br /> <span className="bodyText" >Honourable mentions: </span>Kyoto, Tokyo, the drive from LA to SF along the coast, and LA
                        <br /> <span className="bodyText" >Places I want to go: </span>NEW YORK, Vancouver, Beijing, Taiwan, Singapore
                    </p>
                </div>
                <CardDeck style={containerStyle} >
                    {travelItems.map(item => {
                        return (
                            <Card inverse style={{ background: bgColor, border: bgColor }} key={item.key} >
                                <CardImg style={imgStyle} top src={require(`./images/${item.src}`)} />
                                <CardBody className="text-center">
                                    <CardTitle style={textStyle} className="bodyText" >{item.title}</CardTitle>
                                    <CardText style={textStyle} className="subtitleText" >{item.description}</CardText>
                                </CardBody>
                            </Card>
                        );
                    })}
                </CardDeck>
            </div>
        );
    }
}

const About = () => {
    return(
        <div>
            <AboutSection />
            <Interests />
            <TravelDoc />
        </div>
    );
}

export default About;