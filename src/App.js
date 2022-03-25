import {Route, Routes} from 'react-router-dom'
import { ReactQueryDevtools } from 'react-query/devtools'
import {createTheme, ThemeProvider} from '@material-ui/core'

import NotFound from './components/error pages/NotFound';
import {Container} from "@mui/material";
import LoginForm from "./components/form/LoginForm";
import RegistrationForm from "./components/form/RegistrationForm";




const theme = createTheme({
    palette: {
        primary: {
            main: '#fefefe'
        },
    },
    typography: {
        fontFamily: 'Quicksand',
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    }
})

function App() {
    return (
        <ThemeProvider theme={theme}>
                    {/*<PrimarySearchAppBar/>*/}
                    <Container  className="content">
                        <Routes>
                            <Route path="login/" element={<LoginForm />}/>
                            <Route path="register/" element={<RegistrationForm />}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Routes>
                    </Container>
                <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
        </ThemeProvider>
    );
}

export default App;
