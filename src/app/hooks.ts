import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from './store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
const appState: TypedUseSelectorHook<RootState> = useSelector
export const useAppSelector = () => appState((s) => s)
