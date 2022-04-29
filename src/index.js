import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

import App from './App';
import {QueryClient, QueryClientProvider} from "react-query";
import * as PropTypes from "prop-types";
import {RecoilRoot} from "recoil";
import './index.css'



const queryClient = new QueryClient();
BrowserRouter.propTypes = {children: PropTypes.node};

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </RecoilRoot>
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

