import React from 'react'
import { AppContext } from './context/ContextApi'

const App = () => {
    return (
        <AppContext>
            <h1 className="text-xl underline">
                Hello world!
            </h1>
        </AppContext>
    )
}

export default App