import React from 'react';
import { graphql } from 'react-apollo';
import { IS_LOGGED_IN } from './AppQueries';
import AppPresenter from './AppPresenter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from '../../typed-components';
import theme from '../../theme';


const AppContainer = ({ data }: { data?: any }) => (
    <React.Fragment>
        <ThemeProvider theme={theme}>
            <AppPresenter isLoggedIn={data.auth.isLoggedIn} />
        </ThemeProvider>
        <ToastContainer draggable={true} position={"bottom-center"} />
    </React.Fragment>
)
export default graphql(IS_LOGGED_IN)(AppContainer);