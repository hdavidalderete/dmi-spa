import React from 'react'
// import { Switch, Route } from 'react-router'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import SpaDetails from '../pages/spaDetails/SpaDetails';
import SpaList from '../pages/spaList/SpaList';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path='/spa'
                    component={SpaList}
                />
                <Route
                    exact
                    path='/spa/:id'
                    component={SpaDetails}
                />
                <Route render={() => <Redirect to="/spa" />} />
            </Switch>
        </Router>
    )
}

export default Routes
