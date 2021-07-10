import './App.css';
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './Pages/Home';
import Rhome from './Pages/Resume/rHome/rHome';
import Rabout from './Pages/Resume/rAbout/rAbout';
import Rresume from './Pages/Resume/rResume/rResume.js';
import Rprojects from './Pages/Resume/rProjects/rProjects';
import RappLocker from './Pages/Resume/rAppLocker/rAppLocker';
import Rgithub from './Pages/Resume/rGithub/rGithub';
import Rcontact from './Pages/Resume/rContact/rContact';
import Shome from './Pages/Services/sHome/Home';
import Sabout from './Pages/Services/sAbout/About';
import Sservices from './Pages/Services/sServices/Services';
import Sportfolio from './Pages/Services/sPortfolio/Portfolio';
import SAppLocker from './Pages/Services/sAppLocker/AppLocker';
import Sstart from './Pages/Services/Start/Start';
import Scontact from './Pages/Services/sContact/Contact';
import Layout from './layoutComponents/mainLayout/layoutMain.js';
import {NoMatch} from './Pages/NoMatch.js';
import {BrowserRouter} from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Layout>
            <Router>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/resume/home" component={Rhome} />
                <Route path="/resume/about" component={Rabout}/>
                <Route path="/resume/resume" component={Rresume}/>
                <Route path="/resume/projects" component={Rprojects}/>
                <Route path="/resume/applocker" component={RappLocker}/>
                <Route path="/resume/github" component={Rgithub}/>
                <Route path="/resume/contact" component={Rcontact}/>
                <Route path="/services/home" component={Shome}/>
                <Route path="/services/about" component={Sabout}/>
                <Route path="/services/portfolio" component={Sportfolio}/>
                <Route path="/services/services" component={Sservices}/>
                <Route path="/services/contact" component={Sstart}/>
                <Route path="/services/applocker" component={SAppLocker}/>
                <Route path="/services/contact" component={Scontact}/>
                <Route  component={NoMatch}/>
              </Switch>
            </Router>
          </Layout>
          </BrowserRouter>
      </React.Fragment>
    )
  }
}

export default App;
