import React, { Component } from 'react';
import Article from './Articles';
import * as firebase from 'firebase';
export default class Actualite extends Component {

    constructor(props) {
        super(props);
        // State correspondant a l'initalisation des valeurs a passer au rotor
        this.state = {
            loading: true,
            posts: [
                {
                    titre: "Titre du post",
                    description: "description du post",
                    nbcomment: 12,
                },
                {
                    titre: "Titre du post",
                    description: "description du post",
                    nbcomment: 13,
                },
                {
                    titre: "Titre du post",
                    description: "description du post",
                    nbcomment: 14,
                },
            ],
            articles: undefined
        };


    }

    componentWillMount() {
        //Indexation de la table 'article'
        const articleRef = firebase.database().ref('post');

        //Capture instantanee des donnees et MaJ du state
        articleRef.on('value', snapshot => {
            this.setState({
                articles: snapshot.val(),
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

        const Arts = Object.keys(this.state.articles).map((element, index) => (
            <Article key={index} id={index} titre={this.state.articles[index].titre} src={this.state.articles[index].image} details={this.state.articles[index].details} nb_feature={this.state.articles[index].nb_feature} nb_like={this.state.articles[index].nb_like} />
        ));

        return (
            // Toujours mettre la tete de lecture adequate autour du rotor
            <div className="liste">
                <h1> {this.props.titre} </h1>
                <div className="posts">

                    {Arts}

                </div>
            </div>
        )
    }
}
