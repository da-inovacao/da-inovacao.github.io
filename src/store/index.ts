import { configureStore } from '@reduxjs/toolkit'

import mainState from '~/reducers'

export const store = configureStore({
  reducer: {
    mainState
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
