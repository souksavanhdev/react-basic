import React from 'react'
import { Outlet, useNavigate } from "react-router-dom"

export default function PrivateRoute() {

    // const navigate = useNavigate()

    return <Outlet></Outlet>
}
