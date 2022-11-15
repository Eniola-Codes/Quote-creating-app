import {Route, Redirect, Switch} from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllQuote from './pages/AllQuote';
import NewQuote from './pages/NewQuote';
import NotFound from './pages/NotFound';
import QuoteDetail from './pages/QuoteDetail';

function App() {
  return (
    <Layout>
      <Switch>
    <Route path='/' exact>
      <Redirect to='/quotes' />
    </Route>
    <Route path='/quotes' exact>
      <AllQuote/>
    </Route>
    <Route path='/quotes/:quotesid'>
      <QuoteDetail/>
    </Route>
    <Route path='/newquote'>
      <NewQuote/>
    </Route>
    <Route path='*'>
      <NotFound/>
    </Route>
    </Switch>
    </Layout>
  );
}

export default App;
