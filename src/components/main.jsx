//imports
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Category from './category/category';
import Vehicle from './vehicle/vehicle';
import CategoryAddForm from './category/CategoryAddForm';
import VehicleAddForm from './vehicle/Vehicle.AddForm';
import Welcome from './welcome';

//class Declaretion 
export default class Main extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/* set all sub routing */}
                <Switch>
                    <Route exact path="/">
                        <Welcome />
                    </Route>
                    <Route exact path="/category">
                        <Category />
                    </Route>
                    <Route path="/category/Add">
                        <CategoryAddForm />
                    </Route>
                    <Route exact path="/vehicle">
                        <Vehicle
                            status={true} />
                    </Route>
                    <Route exact path="/vehicle/Add">
                        <VehicleAddForm />
                    </Route>
                    <Route exact path="/vehicle/:id" render={(props) => <Vehicle {...props} status={false} />} />
                </Switch>

            </div>
        );
    }
}

