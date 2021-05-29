import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {useSelector} from "react-redux";

function PrivateRoute({ component: Component, roles, ...rest }) {
    const loggedIn = useSelector(state => state.login.loggedIn)

    return (
        <Route {...rest} render={props => {
            if (!loggedIn) {
                return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            }

            return <Component {...props} />
        }} />
    );
}

export { PrivateRoute };