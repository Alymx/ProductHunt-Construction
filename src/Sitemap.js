import React, { Component } from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

import HomePage from './Home/HomePage';
import PostPage from './Posts/PostPage';
import Header from './Includes/Header';

export default class Sitemap extends Component {
    render() {
        return (
            <Switch>
                <Header />
                <Route path="/" exact component={HomePage} />
                <Route path="/post/:id" component={PostPage} />
            </Switch>
        )
    }
}
