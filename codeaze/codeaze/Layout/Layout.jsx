import React from 'react';
import Navbar from '../components/Navbar';
import Progressbar from '../components/Progressbar';

const Layout = ({children}) => {
    return (
        <div className='layout'>
            <Navbar />
            <Progressbar />
            {children}
        </div>
    )
}

export default Layout
