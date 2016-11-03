/**
 * Created by yuli on 2016/11/1.
 */
import '../../../node_modules/bootstrap/scss/bootstrap.scss';
import React from 'react';
import ReactDOM from 'react-dom';

var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');

import Search from '../../components/search';
import Plist from '../../components/plist';

class App extends React.Component{
    constructor() {
        super();
        this.state = {"keyword": ""};
        this.refreshKeyword = this.refreshKeyword.bind(this);
    }
    refreshKeyword(name) {
        this.setState({"keyword": name});
    }
    render() {
        //JSX here!
        return (
            <div className="container">
                <section className="jumbotron">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <Search sendAction={this.refreshKeyword}/>
                </section>

                <Plist keyword={this.state.keyword}/>
            </div>
        )
    }
};

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App />, app);


