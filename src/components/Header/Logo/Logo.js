import React, {Component} from 'react';

import './Logo.scss';
import logo from '../../../assets/img/logo.png';

class Logo extends Component{
    render(){
        return(
            <div className="Logo">
                <img src={logo} alt="Logo" className="logo" />
            </div>
        );
    }
}

export default Logo;