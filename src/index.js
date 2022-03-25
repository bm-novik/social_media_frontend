import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from "react-query";
import * as PropTypes from "prop-types";


const queryClient = new QueryClient();
BrowserRouter.propTypes = {children: PropTypes.node};

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

