import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { routes } from './routes';
import ScrollToTop from './ScrollToTop';

export const Routers = () => {
    return (
        <>
            <ScrollToTop />
            <Switch>
                <Redirect exact from="/" to="/dashboard" />

                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        render={(props) => (
                            <route.component
                                name={route.name}
                                {...props}
                                {...route.props}
                            />
                        )}
                    />
                ))}
            </Switch>
        </>
    );
};
