import './index.css';
import 'styles/reset.scss'
import 'styles/base.scss'
import 'styles/variables.scss'

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import { store } from 'store/store'
import { Helmet } from 'react-helmet';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <Helmet>
      <title>Eco FAQ - Портал Eco-сообщества для Eco протокола</title>
      <meta name="description" content="Eco FAQ - сайт о проекте Eco протокола, задания, перевод документов и многое другое"></meta>
    </Helmet>

    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </>

);