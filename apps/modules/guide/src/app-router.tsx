import React from 'react'
import { getConfigRouter } from 'Guide/configs/app'
import { Route, Routes } from 'react-router-dom'
import { EntrypointComponentProps, RouterGenerator } from '@ms7/router'
import { NotFound404 } from '@ms7/bui'
import { env } from '@ms7/common'

const AppRouter = (props: EntrypointComponentProps) => {
    const { routes } = getConfigRouter()

    const Component404 = (
        <NotFound404
            to={'/'}
            title={'404 - Not Found'}
            header={env.REACT_APP_NAME}>
            {'Index'}
        </NotFound404> )

    return (
        <React.Fragment>
            <Routes>
                {RouterGenerator(routes, Component404, props.parentLayout)}
                <Route
                    path={'*'}
                    element={Component404} />
            </Routes>
        </React.Fragment>
    )
}

export default AppRouter