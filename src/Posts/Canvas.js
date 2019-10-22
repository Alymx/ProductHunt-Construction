import React, { Component } from 'react';
import ThumbNails from './ThumbNails';
import SocialShare from './SocialShare';
import Comments from './Comments/Comments';
import * as firebase from 'firebase';

export default class Canvas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            canv: {
                img: "http://lorempixel.com/640/480/sports",
                details: "Magnam necessitatibus quo ratione tenetur reprehenderit. Minima quis illum voluptatem atque. Porro corporis nam quaerat voluptatibus id.",
                nb_feature: 4,
                nb_like: 6,
                id: 0,
            },
            posters: [],
            liked: false,
            enableComment: false,
            votes: 5,
        };
    }

    OutPutVoteClick = (event) => {
        if (!this.state.liked) {
            this.setState({ votes: this.state.votes + 1, liked: true, enableComment: true });
        }

    }

    OutPuthandleClick = (e) => {
        // e.preventDefault();
        if (!this.state.liked)
            this.setState({ liked: true, enableComment: true });
        else
            this.setState({ liked: false, enableComment: false });

        console.log("Liked: " + this.state.liked + " -- Enable: " + this.state.enableComment);

    }

    componentWillMount() {
        const posterRef = firebase.database().ref('article');

        posterRef.on('value', (snap) => {
            this.setState({
                posters: snap.val(),
                loading: false
            })
        })
    }



    render() {

        if (this.state.loading) {
            return <p style={{ "margin": "100px" }}> Chargement de l'image a la une </p>
        }

        const Posterx = Object.keys(this.state.posters).map((index) => console.log(index));




        return (
            <div className="listepost">
                <div className="canvas">
                    {Posterx}
                    <div id={this.props.urlId}>
                        <img className="media_9601e" alt="Imag de garde"
                            src={this.state.posters[this.props.urlId].image}
                            srcSet={this.state.posters[this.props.urlId].image}
                            style={{ "width": "100%", "height": "auto" }} />
                    </div >
                    <ThumbNails />

                    <div id="description-post">
                        <p>{this.state.posters[this.props.urlId].description}</p>
                    </div>
                    <SocialShare handleClick={this.OutPuthandleClick} voteClick={this.OutPutVoteClick} liker={this.state.liked} votes={this.state.votes} />
                    {console.log("COTE CANVAS - vient de cliker sur like: " + this.state.liked + " -- Desactive le formulaire: " + this.state.enableComment)}

                    <div>
                        FEATURED 14 HOURS AGO
                    </div>
                </div>

                <h2 id="kj"> Discussion </h2>
                <Comments liker={this.state.liked} enabler={this.state.enableComment} />
            </div>
        );
    }
}
