import React from 'react'
import Navbar from '../components/header/Navbar'

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-7xl mx-auto mt-2">
                <div className="min-w-full border rounded flex lg:grid lg:grid-cols-3">
                    Well come home page
                </div>
            </div>

        </>
    )
}

export default Home