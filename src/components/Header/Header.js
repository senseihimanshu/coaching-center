import React, {Component} from 'react';

import './Header.scss';
import Logo from './Logo/Logo';
import Notice from './Notice/Notice';
import User from './User/User';

class Header extends Component{
    render(){
        return(
            <div className="Header">
                <Logo />
                <Notice />
                <User />
            </div>
        );
    }
}

export default Header;