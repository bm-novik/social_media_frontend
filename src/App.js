import React from 'react'
import {Route, Routes } from 'react-router-dom'
import {useRecoilValue} from "recoil";
import {AuthenticatedAtom} from "./recoil/atom/AtomStore";
import {ReactQueryDevtools} from 'react-query/devtools'
import {createTheme, ThemeProvider} from '@material-ui/core'
import {Signup} from "./pages/Signup.page";
import {Login} from "./pages/Login.page";
import {StyledAppBox} from "./components/boxs/Box.styles";
import NotFound from './pages/error pages/NotFound';
import PrimarySearchAppBar from "./components/layout/appbar";
import {pink} from "@mui/material/colors";
import {AuthenticationCheck} from "./PathControl";
import {EditProfilePage} from "./pages/EditProfile.page";
import {WindowLoader} from "./components/layout/icons/Loader";
import {Test} from "./pages/Test";

const LazyProfile = React.lazy(() => import('./pages/Profile.page'))
const LazyFeed = React.lazy(() => import("./pages/Feed.page"))
const LazyExplore = React.lazy(() => import("./pages/Explore.page"))



const theme = createTheme({
        palette: {
        primary: pink
        ,
        secondary : pink
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
    const auth = useRecoilValue(AuthenticatedAtom)

    return (
        <ThemeProvider theme={theme}>
            {auth.token && <PrimarySearchAppBar/>}
            <StyledAppBox>
                <Routes>
                    <Route path="accounts/login" element={<Login />}/>
                    <Route path="accounts/emailsignup" element={<Signup />}/>
                    {/*<Route path="test" element={<Test />}/>*/}
                    <Route path="/" element={
                        <AuthenticationCheck >
                            <React.Suspense fallback={<WindowLoader/>}>
                                <LazyFeed />
                            </React.Suspense>
                        </AuthenticationCheck>}/>
                    <Route path="explore" element={
                        <AuthenticationCheck >
                            <React.Suspense fallback={<WindowLoader/>}>
                                <LazyExplore />
                            </React.Suspense>
                        </AuthenticationCheck>}/>
                    <Route path="*" element={<NotFound />}/>
                    <Route path="/:id" element={
                        <AuthenticationCheck >
                            <React.Suspense fallback={<WindowLoader/>}>
                                <LazyProfile />
                            </React.Suspense>
                        </AuthenticationCheck>}
                    />
                    <Route path="accounts/edit" element={<AuthenticationCheck >
                        <EditProfilePage />
                    </AuthenticationCheck>}/>
                </Routes>
            </StyledAppBox>
            <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
        </ThemeProvider>
    );
}

export default App;
