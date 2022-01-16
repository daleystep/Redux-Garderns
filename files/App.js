import React from 'react';
import { useDispatch } from 'react-redux'

import './App.css';
import Garden from './src/components/garden/Garden';
import SeedMarket from './src/components/seedMarket/SeedMarket';

const App = () => {
    const dispatch = useDispatch()

    return (
        <div className='App'>
            <Money />
            <div className='Body'>
                <SeedMarket />
                <Garden />
                <Storage />
            </div>
            <Footer />
        </div>
    )
}

export default App