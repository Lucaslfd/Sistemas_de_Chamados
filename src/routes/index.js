import { Routes, Route } from 'react-router-dom';

import SingIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

import Private from './Private';
function RoutesApp() {
    return(
        <Routes>
            <Route path='/' element={ <SingIn/> }/>
            <Route path='/register' element={ <SingUp/> }/>
            <Route path='/dashboard' element={<Private><Dashboard/></Private> }/>
            <Route path='/profile' element={ <Private> <Profile/> </Private> }/>
        </Routes>
    )
}

export default RoutesApp;