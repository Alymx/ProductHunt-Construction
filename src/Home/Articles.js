
import React from 'react';
import { Link } from 'react-router-dom';

const Article = (props) => (
    // Toujours mettre la tete de lecture adequate autour du rotor

    <div className="post">
        <div id="div1">
            <img alt="Terms &amp; Conditions Generator by iubenda"
                src={props.src}
                srcSet="https://ph-files.imgix.net/87f75b2b-9e53-41f9-b503-c16a75225fd0?auto=format&amp;auto=compress&amp;codec=mozjpeg&amp;cs=strip&amp;w=80&amp;h=80&amp;fit=crop&amp;dpr=2 2x, https://ph-files.imgix.net/87f75b2b-9e53-41f9-b503-c16a75225fd0?auto=format&amp;auto=compress&amp;codec=mozjpeg&amp;cs=strip&amp;w=80&amp;h=80&amp;fit=crop&amp;dpr=3 3x"
                style={{ "wsidth": "80px", "height": "80px" }} />
        </div>
        <div id="div2">
            <h2> {props.titre}{props.id + 1} </h2>
            <p> {props.details} </p>
            <Link id="comments" to={"/post/" + props.id}><label> <span className="glyphicon glyphicon-envelope"></span> {props.nb_feature} comments </label></Link>
            <Link id="edit" to="/"><label> <span className="glyphicon glyphicon-edit"></span> </label></Link>
            <Link id="legal" to="/"> Legal </Link>

        </div>
        <div id="div3">
            <span className="glyphicon glyphicon-triangle-top"></span>
            <label> {props.nb_like} </label>
        </div>
    </div>
);

export default Article;


