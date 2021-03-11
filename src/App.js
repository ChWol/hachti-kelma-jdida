import './App.css';
import React from 'react';
import {Content} from 'carbon-components-react';
import 'carbon-components/css/carbon-components.min.css';
import SiteHeader from './SiteHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/TranslationPage';

function App() {
    return (
        <>
            <SiteHeader/>
            <Content>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/repos" component={RepoPage} />
                </Switch>
            </Content>
        </>
    );
}

export default App;
