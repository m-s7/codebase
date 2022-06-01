import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/store/store'
import WebsocketClient from '@/lib/websocket/lib/websocket-client'
import AppState from 'Dummy/business/models/store/app-state'

export interface WebsocketState {
    client: WebsocketClient | undefined,
}

const initialState: WebsocketState = {
    client: undefined,
}

export const websocketReducer = createSlice({
    name: 'websocket',
    initialState,
    reducers: {
        setClient: (state, action: PayloadAction<WebsocketClient>) => {
            state.client = action.payload
        },
        reset: () => initialState,
    },
})

export const { setClient, reset } = websocketReducer.actions

export const selectClient = (state: RootState) => (state.apps as AppState).dummyWebsocket.client

export default websocketReducer.reducer