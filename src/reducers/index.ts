import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: MainState = {
  notices: [],
  events: [],
  certificates: [],
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
    setCertificates: (state, action: PayloadAction<_Certificates[]>) => {
      state.certificates = action.payload
    },
  },
})

export const { setEvents, setNotices, removeNotice, setCertificates } = mainSlice.actions
export default mainSlice.reducer

type MainState = {
  notices: _Notices[]
  events: TEvent[]
  certificates: _Certificates[]
}
