import React, {Component} from 'react';

import './Sidebar.scss';
import {ReactComponent as Home} from '../../../assets/img/SVG/home.svg'
import {ReactComponent as ChatRoom} from '../../../assets/img/SVG/chat.svg'
import {ReactComponent as GuruUpdates} from '../../../assets/img/SVG/hipster2.svg'
import {ReactComponent as Bookmarks} from '../../../assets/img/SVG/bookmarks.svg'

class Sidebar extends Component{
    render(){
        return(
            <div className="Sidebar">
                <ul className="side-nav">
                    <li className="side-nav__item side-nav__item--active">
                        <a href="#" className="side-nav__link">
                            <Home width="1.75rem" height="1.75rem" fill="currentColor" />
                            <span className="side-nav__link--title">Home</span>    
                        </a>      
                    </li>

                    <li className="side-nav__item">
                        <a href="#" className="side-nav__link">
                            <ChatRoom width="1.75rem" height="1.75rem" fill="currentColor" />
                            <span className="side-nav__link--title">Chat Room</span>    
                        </a>      
                    </li>

                    <li className="side-nav__item">
                        <a href="#" className="side-nav__link">
                            <GuruUpdates width="1.75rem" height="1.75rem" fill="currentColor" />
                            <span className="side-nav__link--title">Guru's Updates</span>    
                        </a>      
                    </li>

                    <li className="side-nav__item">
                        <a href="#" className="side-nav__link">
                            <Bookmarks width="1.75rem" height="1.75rem" fill="currentColor" />
                            <span className="side-nav__link--title">Bookmarks</span>    
                        </a>      
                    </li>
                </ul>

                <div className="legal">
                    &copy; 2019 by Sensei. All rights reserved.
                </div>        
            </div>
        );
    }
}

export default Sidebar;