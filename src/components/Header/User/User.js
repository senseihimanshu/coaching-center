import React, {Component} from 'react';

import './User.scss';
import {ReactComponent as Bookmarks} from '../../../assets/img/SVG/bookmarks.svg';
import {ReactComponent as Hipster2} from '../../../assets/img/SVG/hipster2.svg';
import {ReactComponent as Chat} from '../../../assets/img/SVG/chat.svg';
import Student from '../../../assets/img/me1.jpg';

class User extends Component{
    render(){
        return(
            <div className="User student-nav">
                <div className="student-nav__icon-box">
                    <Bookmarks height="2.25rem" width="2.25rem" fill="var(--color-grey-dark-2)" />
                    <span className="student-nav__notification">5</span>
                </div>
                <div className="student-nav__icon-box">
                    <Hipster2 height="2.25rem" width="2.25rem" fill="var(--color-grey-dark-2)" />
                    <span className="student-nav__notification">15</span>
                </div>
                <div className="student-nav__icon-box">
                    <Chat height="2.25rem" width="2.25rem" fill="var(--color-grey-dark-2)" />
                    <span className="student-nav__notification">508</span>
                </div>

                <div className="student-nav__student">
                    <img src={Student} alt="Student" className="student-nav__student-photo" />
                    <span className="student-nav__student-name">Himanshu</span>
                </div>
            </div>
        );
    }
}

export default User;