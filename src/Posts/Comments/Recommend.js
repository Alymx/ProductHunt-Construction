import React from 'react';
import { Link } from 'react-router-dom';

import * as firebase from 'firebase';

let user = "";
let index = 0;

class Recommend extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            termine: false,
            username: "",
            message: "",
        };
    }

    HandleKey = (event) => {
        event.preventDefault();
        const msg = event.target.value;
        this.setState({ message: msg });
        console.log(user + " -- " + msg);
    }

    Commenter = (e) => {
        e.preventDefault();
        e.target.texte = "";
        const usname = prompt("Veuillez entrer votre nom d'utilisateur avant de continuer");
        this.setState({ termine: true, username: usname });
        let refer = firebase.database().ref("avis").orderByKey();
        refer.once("value")
            .then((snap) => {
                index = snap.numChildren();

                let ref = firebase.database().ref(`avis/${index}`);

                ref.set({
                    description: this.state.message,
                    nom: usname,
                    like: true,
                    timer: `${Date.now()}`,
                    image: "https://ph-avatars.imgix.net/1656290/original?auto=format&amp;auto=compress&amp;codec=mozjpeg&amp;cs=strip&amp;w=30&amp;h=30&amp;fit=crop&amp;dpr=2 2x"
                }).then(() => {
                    return ref.once("value");
                }).then((snap) => {
                    console.log("resultat: ", snap.val());

                })
            });

        //Balancer dans la base
    }


    Formular = () => {
        if (this.props.liker) {
            console.log("Au final: " + this.state.username + " -- " + this.state.message);
            return (
                <form onSubmit={this.Commenter}>
                    <img className="userImageContainer_5888f"
                        src="https://ph-static.imgix.net/guest-user-avatar.png?auto=format&amp;auto=compress&amp;codec=mozjpeg&amp;cs=strip&amp;w=30&amp;h=30&amp;fit=crop" alt=""
                        srcSet="https://ph-static.imgix.net/guest-user-avatar.png?auto=format&amp;auto=compress&amp;codec=mozjpeg&amp;cs=strip&amp;w=30&amp;h=30&amp;fit=crop&amp;dpr=2 2x, https://ph-static.imgix.net/guest-user-avatar.png?auto=format&amp;auto=compress&amp;codec=mozjpeg&amp;cs=strip&amp;w=30&amp;h=30&amp;fit=crop&amp;dpr=3 3x" style={{ "width": "30px", "height": "30px" }} />

                    <input name="texte" type="text" onChange={this.HandleKey} placeholder={`Vous pouvez entrer votre commentaire...`} />
                    <button type="submit" >SEND</button>

                </form>);
        }
        return <p style={{ "margin": "10px auto" }}> <strong>Veuillez voter avant de commenter</strong> </p>
    };



    render() {

        return (
            <div className="recommend">
                <div>
                    <label> Would you recommend this product ? </label>
                    <button id="btn-yes"> <span className="glyphicon glyphicon-thumbs-up"></span>  Yes </button>
                    <button id="btn-no"> <span className="glyphicon glyphicon-thumbs-down"></span> No </button>
                </div>
                <div>
                    <label id="reviews"> 2 Reviews {this.props.liker} </label>
                    <Link to="/"> 5.0 / 5 </Link>
                </div>
                {this.Formular()}

            </div>
        );
    }
}

export default Recommend;
