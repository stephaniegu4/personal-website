import React from 'react';
import { 
    Collapse,
    Navbar, 
    NavbarToggler,
    NavLink,
    NavItem,
    NavbarBrand,
    Nav 
} from 'reactstrap';
import Scroll from 'react-scroll';
import { Link } from 'react-scroll';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const navItems = [
    { title: "About", link: "about", key: 1 }, 
    { title: "Experience", link: "experience", key: 2 }, 
    { title: "Projects", link: "projects", key: 3 },
    { title: "Study", link: "study", key: 4 },
    { title: "Contact", link: "contact", key: 5 },
]

class NavBar extends React.Component {
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
        var containerStyle = {
            display:'block',
            marginLeft:'auto',
            marginRight:'auto',
            height:'auto',
        }

        var navItemStyle = {
            paddingLeft:'20px',
            paddingRight: '10px',
            fontFamily: 'JostRegular',
            cursor: 'pointer',
            fontSize: '18px',
            paddingTop: '5px',
            paddingBottom: '5px'
        }

        var navBrandStyle = {
            color: "#e8b0cd",
            paddingLeft: '10px',
            cursor: 'pointer',
            fontFamily: 'JostBold'
        }

        return(
            <div style={containerStyle}>
                <Navbar color="white" light expand="md" fixed="top">
                    <NavbarBrand href="/" style={navBrandStyle}>steph gu</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {navItems.map(item => {
                                return(
                                    <NavItem style={navItemStyle} key={item.key}>
                                        <Link to={item.link} smooth="true" >{item.title}</Link>
                                    </NavItem>
                                );
                            })}
                            <NavItem style={navItemStyle} >
                                <a href="Resume Spring 2020.pdf" target="_blank" id="navLinkResume" >
                                    Resume
                                </a>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

class ScrollToTopButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showButton: false
        }
    }

    componentDidMount() {
        var scrollComponent = this
        document.addEventListener("scroll", (e) => {
            scrollComponent.toggleVisibility()
        })
    }

    toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            this.setState({
                showButton: true
            })
        } else {
            this.setState({
                showButton: false
            })
        }
    }

    scrollToTop = () => {
        Scroll.animateScroll.scrollTo(0, {
            duration: 300
        })
    }

    render() {
        var divStyle = {
            background: '#ebd3df',
            position: 'fixed',
            bottom: 20,
            right: 20,
            borderRadius: '25px',
            zIndex: 2,
            cursor: 'pointer'
        }

        var iconStyle = {
            width: '50px',
            height: '50px',
            //fill: 'white',
        }

        return(
            <div style={divStyle} onClick={this.scrollToTop} className={this.state.showButton ? "fade-in" : "fade-out"} >
                <ArrowUpwardIcon style={iconStyle}/>
            </div> 
        );
    }
}

export default NavBar;
export { ScrollToTopButton };