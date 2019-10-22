import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import './SideBar.css';
import * as firebase from 'firebase';
import config from '../config';

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }
        this.state = props;
    }

    render() {
        return (
            <header>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        {/* <!-- Partie Gauche --> */}
                        <div id="header-gauche" className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#header-navig" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="glyphicon glyphicon-menu-hamburger"></span></button>

                            <Link className="logo" to="/"><svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20" fill="#DA552F"></path><path d="M22.667 20H17v-6h5.667a3 3 0 0 1 0 6m0-10H13v20h4v-6h5.667a7 7 0 1 0 0-14" fill="#FFF"></path></g></svg></Link>
                            {/* <!--                   <Link className="navbar-brand" to="#"> NomSite </Link>--> */}
                        </div>
                        {/* <!-- Navigation --> */}
                        <div id="header-navig" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav" id="touche-navig">
                                <li id="header-search"> <span className="glyphicon glyphicon-search"></span>  <input type="text" placeholder="Discover your next favorite thing..." /> </li>
                                <li> <Link to="#"> Deals </Link> </li>
                                <li> <Link to="#"> Jobs </Link> </li>
                                <li> <Link to="#"> Makers </Link> </li>
                                <li> <Link to="#"> Radio </Link> </li>
                                <li> <Link to="#"> Ship </Link> </li>
                                <li> <Link to="#"> ••• </Link> </li>
                            </ul>
                            <ul id="connecter" className="nav navbar-nav navbar-right">
                                <li id="login"> <Link to="#"> LOG IN </Link> </li>
                                <li id="signup"> <Link to="#"> SIGN UP </Link> </li>
                            </ul>

                        </div>
                    </div>

                </nav>
            </header>
        );
    }
}
