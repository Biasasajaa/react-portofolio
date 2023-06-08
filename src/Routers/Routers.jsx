import {
    BrowseRouter,
    Route,
    Routes
} from "react-router-dom"
import profile from "../pages/profile"
import App from "../App"

const Routers = () => {
    return(
        <BrowseRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/profile" element={<profile />} />
        </Routes>
        </BrowseRouter>
    )
}