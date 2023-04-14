import React, { lazy, Suspense } from 'react';
import { Provider } from "react-redux";
import { store } from '../utils/app-config';
import ProgressBar from './layout-ui/progress-bar';
import { HashRouter as Router } from "react-router-dom";
const Layout = lazy(() => import('./layout'));

/**
 * the default root component
 */
export default function Root() {

    /**
     * return the elements for root component
     */
    return (
        <Provider store={store}>
            <Suspense fallback={<ProgressBar />}>
                <Router>
                    <Layout />
                </Router>
            </Suspense>
        </Provider>
    )
} 