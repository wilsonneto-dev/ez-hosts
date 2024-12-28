import {Outlet} from "react-router";

const Layout = () => {
    return <div>
        <header>
            <div>
                <span>Add</span>
            </div>
        </header>
        <Outlet />
    </div>
}

export default Layout;