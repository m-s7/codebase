import React from 'react'
import App from 'Guide/app'
import store from 'Guide/store/store'
import { env, isDev } from '@ms7/common'
import { getLogLevelForEnv, logging } from '@ms7/logger'
import { Provider } from 'react-redux'
import { FullPageFatalError } from '@ms7/bui'
import { ErrorBoundary } from 'react-error-boundary'
import { FullPageFatalErrorProps } from '@ms7/bui'
import { EntrypointComponentProps } from '@ms7/router'

logging.addConfigurationOption({ minLevels: { 'websocket': getLogLevelForEnv(isDev()) }})

const FallbackError = (props: FullPageFatalErrorProps) => (
    <FullPageFatalError
        error={props.error}
        header={env.REACT_APP_NAME}
        homeLinkName={env.REACT_APP_HOMEPAGE_NAME} />
)

const Entrypoint = (props: EntrypointComponentProps) => (
    <ErrorBoundary FallbackComponent={FallbackError} >
        <Provider store={store}>
            <App {...props} />
        </Provider>
    </ErrorBoundary>
)

export default Entrypoint