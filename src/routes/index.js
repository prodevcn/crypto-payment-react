import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ScrollToTop from '../helpers/scroll-to-top';

// add screens
import Landing from '../pages/landing';
import Contact from '../pages/contact';
const Routes = () => {
    return (
        <Router>
            <ScrollToTop>
                <Switch>
                    <Route
                        exact
                        path='/'
                        component={Landing}
                    />
                    <Route
                        path='/landing'
                        component={Landing} 
                    />
                    <Route
                        path='/contact'
                        component={Contact} 
                    />
                </Switch>
            </ScrollToTop>
        </Router>
    )
}

export default Routes;