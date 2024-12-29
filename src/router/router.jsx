import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Layout from "../Layout"
import {GridLayout, Home} from "../components"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/grid" element={<GridLayout/>} />
        </Route>
    )
)
export default router