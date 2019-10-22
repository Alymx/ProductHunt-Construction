import React, { Component } from 'react';
import * as firebase from 'firebase';

class Firebasic extends Component {

// *** API utilisateur ***
utilisateur = uid => this . db . ref ( `utilisateurs / $ { uid } ` ) ;    
utilisateurs = ( ) => this . db . ref ( 'utilisateurs' ) ;    
// *** API de message ***
message = uid => this . db . ref ( `messages / $ { uid } ` ) ;    
messages = ( ) => ceci . db . ref ( 'messages' ) ;    

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default firebasic;
