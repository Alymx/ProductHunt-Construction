import React from 'react';


class SocialShare extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stylebtn: "#555",
            textbtn: "Like ?",
            icone: "",
            liked: false,
            enableComment: false,
            votes: "",
        }
    }


    EtatDuGlyph = (event) => {
        if (this.props.liker === true) {
            this.setState({ icone: "", liked: true, enableComment: true, stylebtn: "#555", textbtn: "Like ?" });
        }
        else this.setState({ icone: "glyphicon glyphicon-heart", liked: true, enableComment: true, stylebtn: "#FB1A85", textbtn: "" });
    }

    componentDidUpdate() {
        if (this.state.votes !== this.props.votes)
            this.setState({ votes: this.props.votes });
    }


    render() {
        console.log("vient de cliker sur like: " + this.state.liked + " -- Desactive le formulaire: " + this.state.enableComment + " -- glyph: " + this.state.icone + " -- votes: " + this.state.votes);

        return (
            <div id="partage-post" >
                <button id='twitter-btn'>
                    <span className="font_9d927 xSmall_1a46e semiBold_e201b buttonContainer_b6eb3 lineHeight_042f1 underline_57d3c uppercase_a49b4"><span className="buttonIcon_743d1"><svg width="16" height="13" viewBox="0 0 16 13" xmlns="http://www.w3.org/2000/svg"><path d="M15.999 1.537a6.57 6.57 0 0 1-1.885.517A3.296 3.296 0 0 0 15.557.238a6.576 6.576 0 0 1-2.084.796A3.282 3.282 0 0 0 7.88 4.027 9.32 9.32 0 0 1 1.112.599 3.28 3.28 0 0 0 2.13 4.98a3.27 3.27 0 0 1-1.487-.41v.042a3.284 3.284 0 0 0 2.633 3.217 3.29 3.29 0 0 1-1.483.056 3.286 3.286 0 0 0 3.067 2.28A6.587 6.587 0 0 1 0 11.523a9.29 9.29 0 0 0 5.032 1.475c6.038 0 9.34-5.001 9.34-9.338 0-.143-.004-.284-.01-.425a6.673 6.673 0 0 0 1.637-1.698H16z"></path></svg></span></span>
                </button>
                <button id='facebook-btn' >
                    <span className="font_9d927 xSmall_1a46e semiBold_e201b buttonContainer_b6eb3 lineHeight_042f1 underline_57d3c uppercase_a49b4"><span className="buttonIcon_743d1"><svg width="8" height="13" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg"><path d="M7.2 2.323H5.923c-1.046 0-1.278.464-1.278 1.16V5.11h2.44l-.35 2.438h-2.09v6.387H2.09V7.548H0V5.11h2.09V3.252C2.09 1.162 3.368 0 5.342 0c.93 0 1.742.116 1.858.116v2.207z" fill="#FFF" fillRule="evenodd"></path></svg></span></span>
                </button>
                <button id='more-btn' style={{ "background": `${this.state.stylebtn}` }} onClick={this.props.handleClick} >
                    <span onClick={this.EtatDuGlyph} style={{ "color": "#fff" }} className={this.state.icone}>{this.state.textbtn}</span>
                </button>
                <button id="upvote" onClick={(e) => this.props.voteClick(e)}>
                    <span class="glyphicon glyphicon-triangle-top"></span>
                    UPVOTE
                        <label id="votes"> {this.state.votes} </label>
                </button>
            </div>
        );
    }
}

export default SocialShare;
