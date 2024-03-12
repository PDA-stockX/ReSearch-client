import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "~/components/common/Header";

export default function NavbarLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}