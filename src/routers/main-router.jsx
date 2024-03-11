import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainPage from '~/pages/main';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>,
        index: true,
    },
]);

export default router;