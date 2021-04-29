import './App.css';
import React from 'react';
import {Content} from 'carbon-components-react';
import 'carbon-components/css/carbon-components.min.css';
import SiteHeader from './SiteHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import TranslationPage from './content/TranslationPage';
import LegalPage from "./content/Legal";
import AboutPage from "./content/About";
import Playground from "./content/Playground";
import Alphabet from "./content/AlphabetPage/Alphabet";
import Translator from "./content/Translator/Translator";

function App() {
    return (
        <>
            <SiteHeader/>
            <Content>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/translations" component={TranslationPage} />
                    <Route path="/legal" component={LegalPage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/playground" component={Playground} />
                    <Route path="/alphabet" component={Alphabet} />
                    <Route path="/translator" component={Translator} />
                </Switch>
            </Content>
        </>
    );
}

export default App;
