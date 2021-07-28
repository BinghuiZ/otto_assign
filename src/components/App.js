import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './Header';
import ToDo from './ToDo';
import Weather from './Weather';

import { Container } from 'semantic-ui-react'

function App() {
    return (
        <Container>
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path='/' exact component={ToDo} />
                        <Route path='/weather' exact component={Weather} />
                    </Switch>
                </div>
            </BrowserRouter>
        </Container>
    );
}

export default App;
