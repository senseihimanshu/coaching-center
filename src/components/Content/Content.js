import React, {Component} from 'react';

import './Content.scss';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';

class Content extends Component{
    render(){
        return(
            <div className ="Content">
                <Sidebar />
                <Main />
            </div>
        );
    }
}

export default Content;