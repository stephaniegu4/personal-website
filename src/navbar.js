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

const navItems = [
    { title: "About", link: "about", key: 1 }, 
    { title: "Experience", link: "/experience", key: 2 }, 
    { title: "Contact", link: "contact", key: 3 },
    { title: "Resume", link: "/resumepdf", key: 4 }, // Add resume pdf as link
    { title: "Gallery", link: "/gallery", key: 5 }
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

    scrollToTop = () => {
        Scroll.animateScroll.scrollTo(0, {
            duration:200
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
            color: "#f7a38f",
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
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;