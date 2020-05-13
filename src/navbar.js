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
            width: '90%',
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

        var navStyle = {
            float:'right'
        }

        return(
            <div style={containerStyle}>
                <Navbar color="faded" light expand="md">
                    <NavbarBrand href="/" style={navBrandStyle}>steph gu</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem style={navItemStyle}>
                                <NavLink href="/">About</NavLink>
                            </NavItem>
                            <NavItem style={navItemStyle}>
                                <NavLink href="/">Gallery</NavLink>
                            </NavItem>
                            <NavItem style={navItemStyle}>
                                <NavLink href="/">Experience</NavLink>
                            </NavItem>
                            <NavItem style={navItemStyle}>
                                <NavLink href="/">Goals</NavLink>
                            </NavItem>
                            <NavItem style={navItemStyle}>
                                <NavLink href="/">Contact</NavLink>
                            </NavItem>
                            <NavItem style={navItemStyle}>
                                <NavLink href="/">Resume</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;