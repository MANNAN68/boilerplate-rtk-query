import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import useAuthCheck from "./hooks/useAuthCheck";
import PublicRoute from "./route/PublicRoute";
import PrivateRoute from "./route/PrivateRoute";

function App() {
    const authCheck = useAuthCheck();

    return !authCheck ? (<div>Checking authentication....</div>) : (
        <Router>
            <Routes>
                <Route path="/" element={<PublicRoute><Login /></PublicRoute>} />
                <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
                <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
            </Routes>
        </Router>
    )
}

export default App;
