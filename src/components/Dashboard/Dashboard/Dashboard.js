import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import AddService from '../AddService/AddService';
import Book from '../Book/Book';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageServices from '../ManageServices/ManageServices';
import OrderList from '../OrderList/OrderList';
import Review from '../Review/Review';
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
                    <Route path={`${path}/orderlist`}>
                        <OrderList></OrderList>
                    </Route>
                    <Route path={`${path}/addservice`}>
                        <AddService></AddService>
                    </Route>
                    <Route path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/manageservices`}>
                        <ManageServices></ManageServices>
                    </Route>
                    <Route path={`${path}/book`}>
                        <Book></Book>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                </Switch>

            </div>
        </div>
    );
};

export default Dashboard;