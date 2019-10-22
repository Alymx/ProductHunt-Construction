import React, { Component } from 'react';
import Actualite from './Actualite';
import './HomePage';
import SideBar from '../Includes/SideBar';
import * as firebase from 'firebase';


export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {

            loading: true,
            actualites: [{
                label: "Titre actualite",
                id: 1,
            },
            {
                label: "Hier",
                id: 2,
            }]

        };
    }

    componentWillMount() {
        //Indexation de la table 'article'
        const articleRef = firebase.database().ref('actualite');

        //Capture instantanee des donnees et MaJ du state
        articleRef.on('value', snapshot => {
            this.setState({
                actualites: snapshot.val(),
                loading: false
            });
        });

    }

    render() {

        if (this.state.loading) {
            return (
                <p> Chargement </p>
            );
        }

        const Actu = Object.keys(this.state.actualites).map((element, index) => (
            <Actualite key={index} id={index} titre={this.state.actualites[index].titre} />
        ));

        return (
            <section className="parent container">
                <div className="principal">
                    {Actu}
                </div>
                <SideBar />
            </section >
        );
    }
}
