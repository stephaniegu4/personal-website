import React from 'react';
import './index.css';
import { Container, Row, Col } from 'reactstrap';
import TextTransition from 'react-text-transition';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const descriptors = ["software engineer", "dog lover", "food enthusiast"];
const colors = ["#f7a38f", "#9ed5e6", "#b49ee6"];

class HeaderText extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            colorIndex: 0,
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ 
            index: this.state.index == descriptors.length - 1 ? 0 : this.state.index + 1,
            colorIndex: this.state.colorIndex == colors.length - 1 ? 0 : this.state.colorIndex + 1,
        }), 2500)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {

        var containerStyle = {
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '-8vh',
        }

        var expandIconStyle = {
            width:'60px',
            height:'60px',
            display:'block',
            marginLeft:'auto',
            marginRight:'auto',
        }

        return (
            <div style={containerStyle}>
                <Container fluid>
                    <Row>
                        <Col md={{ size: 1, offset: 2 }}>
                            <h1 className="headerText">Hi!</h1>
                        </Col>
                        <Col md="8">
                            <h1 className="headerText">I'm Stephanie Gu.</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="subtitleText">
                            I'm a <TextTransition 
                                text={descriptors[this.state.index]} 
                                style={{ color: colors[this.state.colorIndex] }} 
                                inline
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12" className="subtitleText">Get to know me!</Col>
                    </Row>
                    <Row style={{paddingTop:'3vh'}}>
                        <Col><ExpandMoreIcon style={expandIconStyle} /></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

class Home extends React.Component {
    render() {
        return(
            <div>
                <HeaderText />
            </div>
        );
    }
}

export default Home;