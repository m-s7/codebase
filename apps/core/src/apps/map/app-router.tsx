import React from 'react'
import { getConfigRouter } from 'Map/configs/app'
import { Route, Routes } from 'react-router-dom'
import AppRouterGenerator from '@/components/generators/app-router-generator'
import NotFound from '@/pages/not-found'

const AppRouter = () => {
    const { routes } = getConfigRouter()

    return (
        <React.Fragment>
            <Routes>
                {AppRouterGenerator(routes)}
                <Route
                    path={'*'}
                    element={<NotFound />} />
            </Routes>
        </React.Fragment>
    )
}

export default AppRouter