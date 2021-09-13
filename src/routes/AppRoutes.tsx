import React from "react";
import {APP_NAV} from "../utils/constants/appNav/headerNav/headerNav";
import {Switch, Route} from "react-router-dom";


export function AppRoutes() {
    const renderRoutes = APP_NAV.map((item, index) => (
        <Route key={index} exact path={item.route} component={item.component}/>
    ));

    return (
        <Switch>
            {renderRoutes}
        </Switch>
    )
}