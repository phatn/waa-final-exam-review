import {Route, Routes} from "react-router";
import Welcome from "./Welcome";
import Login from "./Login";
import {PrivateRoute} from "./PrivateRoute";
import Logout from "./Logout";

export default function AppRouter() {

    return (
        <Routes>
            <Route path='/logout' element={<Logout />} />
            <Route path="/welcome" element={
                <PrivateRoute>
                    <Welcome />
                </PrivateRoute>
            } />
            <Route path='/login' element={<Login />} />

        </Routes>
    )
}