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
    { title: "About", link: "/about", key: 1 }, 
    { title: "Experience", link: "/experience", key: 2 }, 
    { title: "Gallery", link: "/gallery", key: 3 }, 
    { title: "Contact", link: "/contact", key: 4 },
    { title: "Resume", link: "/resumepdf", key: 5 } // Add resume pdf as link
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
                                    <NavItem style={navItemStyle} key={item.key}>
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