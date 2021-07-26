import { Router, Route, Switch } from 'react-router-dom'

import history from '../history'
import ToDo from './ToDo';
import Weather from './Weather';

import { Container } from 'semantic-ui-react'

function App() {
    return (
        <Container>
            <Router history={history}>
                <div>
                    <Switch>
                        <Route path='/' exact component={ToDo} />
                        <Route path='/weather' exact component={Weather} />
                    </Switch>
                </div>
            </Router>
        </Container>
    );
}

export default App;
