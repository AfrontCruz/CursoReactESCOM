import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import IndexContainer from '../containers/IndexContainer';

const App = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <IndexContainer />
                </Route>
                <Route path="/first">
                    <div>
                        <h1>Hola First!</h1>
                    </div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;