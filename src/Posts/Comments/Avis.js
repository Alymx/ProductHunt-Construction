import React from 'react';
import { Link } from 'react-router-dom';

const Avis = (props) => {
    return (
        <div id="discussion">
            <div>
                <img className="userImageContainer_5888f" 
                src={props.image} alt="ProfilePic"
                    srcSet="https://ph-avatars.imgix.net/1656290/original?auto=format&amp;auto=compress&amp;codec=mozjpeg&amp;cs=strip&amp;w=30&amp;h=30&amp;fit=crop&amp;dpr=2 2x, https://ph-avatars.imgix.net/1656290/original?auto=format&amp;auto=compress&amp;codec=mozjpeg&amp;cs=strip&amp;w=30&amp;h=30&amp;fit=crop&amp;dpr=3 3x" style={{ "width": "30px", "height": "30px" }} />
                <Link to="/"> {props.nom} </Link>
            </div>
            <div>
                <p> {props.description} </p>
                <span> Upvote (2) </span>
                <span> <Link to="/"> Share </Link> </span>
                <span><i>{props.timer/100} hours ago</i> </span>
            </div>
        </div>
    )
}

export default Avis;
