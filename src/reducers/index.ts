import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: MainState = {
  notices: [],
  events: [],
}

export const mainSlice = createSlice({
  name: 'mainState',
  initialState,
  reducers: {
    setNotices: (state, action: PayloadAction<_Notices[]>) => {
      state.notices = action.payload
    },
    removeNotice: (state, action: PayloadAction<_Notices>) => {
      state.notices = state.notices.filter((not) => not.id !== action.payload.id)
    },
    setEvents: (state, action: PayloadAction<TEvent[]>) => {
      state.events = action.payload
    },
  },
})

export const { setEvents, setNotices, removeNotice } = mainSlice.actions
export default mainSlice.reducer

type MainState = {
  notices: _Notices[]
  events: TEvent[]
}
