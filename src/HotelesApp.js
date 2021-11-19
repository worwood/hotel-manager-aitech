import React from 'react'
import './index.scss'
import { AppRouter } from './routes/AppRouter'
import { Provider } from 'react-redux'
import { store } from './store/store'

export const HotelesApp = () => {
    return (
        <Provider store={ store }>
            <AppRouter/>
        </Provider>
    )
}
