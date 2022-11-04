import MainPage from "../pages/MainPage/MainPage";
import ChangeLogVideo from "../pages/ChangeLogVideo/ChangeLogVideo";
import ChaneLogWheel from "../pages/ChangeLogWheel/ChaneLogWheel";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'

const App = () =>{

    return(
        <>
            <Router>
                <Routes>
                    <Route  path="/" element={<MainPage/>}/>
                    <Route  path="/change-log-video-request" element={<ChangeLogVideo/>}/>
                    <Route  path="/change-log-wheel" element={<ChaneLogWheel/>}/>
                </Routes>
            </Router>
        </>
    )
}

export default App;