import {BrowserRouter, Route, Routes} from "react-router";
import HostsRouter from '../hosts/router'

const App = () =>
    <>
        <BrowserRouter>
            <HostsRouter />
        </BrowserRouter>
    </>

export default App