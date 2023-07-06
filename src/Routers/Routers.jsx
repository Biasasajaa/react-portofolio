import {
    BrowseRouter,
    Route,
    Routes
} from "react-router-dom"
import profile from "../pages/profile"
import App from "../App"

function Routers() {
    return (
        <BrowseRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/profile" element={<profile />} />
            </Routes>
        </BrowseRouter>
    )
}

export default Routers