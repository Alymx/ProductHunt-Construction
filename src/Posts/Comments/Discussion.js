import React from 'react';
import Avis from './Avis';
import * as firebase from 'firebase';

class Discussion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            discusses: [],
            loading: true,
        };
    }

    componentWillMount() {

        const discRef = firebase.database().ref('avis');

        discRef.on('value', (snapshot) => {
            this.setState({
                discusses: snapshot.val(),
                loading: false
            });
        });
    }

    render() {
        if (this.state.loading) {
            return <p style={{ "margin": "100px" }}> Chargement des commentaires </p>
        }

        const Discussion = Object.keys(this.state.discusses).map((element, index) => (
            <Avis key={index} id={index} description={this.state.discusses[index].description} nom={this.state.discusses[index].nom} like={this.state.discusses[index].like} timer={this.state.discusses[index].timer} image={this.state.discusses[index].image} />
        ));


        return (
            <div className="discussions">
                {Discussion}
            </div>
        )
    }
}

export default Discussion;
