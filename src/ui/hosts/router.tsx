import {Route, Routes} from "react-router";
import List from "./screens/list";
import Form from "./screens/form";
import Layout from "./screens/layout";

const Router = () =>
    <Routes>
        <Route element={<Layout />}>
            <Route path="main_window" index element={<List />} />
            <Route path="/hosts/list" index element={<List />} />
            <Route path="/hosts/edit" element={<Form />} />
        </Route>
    </Routes>

export default Router