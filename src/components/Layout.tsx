import { NextPage } from "next";
import React from "react";

const Layout: NextPage<{children: React.ReactNode}> = ({children}) => {
    return (
        <>
            <main>{children}</main>
        </>
    )
}

export default Layout;