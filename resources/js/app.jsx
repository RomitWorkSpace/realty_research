
import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Layout from './components/common/Layout';


if(document.getElementById('app')){
    createRoot(document.getElementById('app')).render(
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    );
}