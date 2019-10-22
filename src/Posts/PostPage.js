import React, { Component } from 'react';
import Entete from './entetePost';
import { Link } from 'react-router-dom';
import './PostPage.css';
import SideBar from '../Includes/SideBar';
import Canvas from './Canvas';

class PostPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comments: [],
        }
    }


    render() {
        let postId = (this.props.match.params.id);

        return (
            <div>
                <section className="entete container">
                    <div className="acces">
                        <Link to="/"> Home </Link> -> <Link to=""> PostPage </Link>
                    </div>
                    <Entete />

                </section>
                <section className="parentpost">
                    <Canvas urlId={postId} />
                    <SideBar />
                </section>
            </div>
        );
    }
}

export default PostPage;