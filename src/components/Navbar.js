import React, { Component } from 'react'
import logo from '../images/logo.svg';
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';

export class Navbar extends Component {
    state={
        isOpen: false
    }

    // As you use this function, it will toggle between false and true in state.isOpen
    handleToggle = () => {
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                       <Link to ="/">
                            <img src={logo} alt="beach resort" />
                        </Link>

                        <button type="buton" className="nav-btn" onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    {/* is this.state.isOpen set to true? if not, show nav-links and show-nav. If so, show nav-links */}
                    <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                        <li>
                            <Link to ="/">Home</Link>
                        </li>
                        <li>
                            <Link to ="/rooms">Rooms</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;
