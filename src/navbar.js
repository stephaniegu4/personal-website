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

const navItems = [
    { title: "About", link: "/about" }, 
    { title: "Experience", link: "/experience" }, 
    { title: "Gallery", link: "/gallery" }, 
    { title: "Contact", link: "/contact" },
    { title: "Resume", link: "/resumepdf" } // Add resume pdf as link
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
            paddingLeft:'10px'
        }

        var navBrandStyle = {
            color: "#f7a38f"
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
                                    <NavItem style={navItemStyle}>
                                        <NavLink href={item.link}>{item.title}</NavLink>
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