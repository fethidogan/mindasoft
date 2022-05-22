import React from 'react'
import Footer from './Footer'
import Menu from './Menu'

const Layout = ({ children }) => {
    return (
        <>
            <Menu />
            {children}
            <Footer />
        </>
    )
}

export default Layout