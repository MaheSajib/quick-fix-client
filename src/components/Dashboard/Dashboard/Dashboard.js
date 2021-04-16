import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import AddService from '../AddService/AddService';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <Sidebar></Sidebar>
            <div className="content">
                <Switch>
                    <Route exact path={path}>
                        <h3>Please select a topic.</h3>
                    </Route>
                    <Route path={`${path}/addservice`}>
                        <AddService></AddService>
                    </Route>
                </Switch>

            </div>
        </div>
    );
};

export default Dashboard;