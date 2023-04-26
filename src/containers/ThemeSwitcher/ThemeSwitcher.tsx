import {Switcher} from 'ui'
import { setupTheme } from 'store/authSlice'
import { AppDispatch } from 'store/store'
import { useDispatch } from 'react-redux'

export const ThemeSwitcher = () => {

    const checkboxHandler = (status:boolean) => {
        themeHandler(status)
    }
    const dispatch = useDispatch<AppDispatch>()
    const isDark = (localStorage.getItem('theme'));

    const themeHandler = (status: boolean) => {
        if (!status) {
            dispatch(setupTheme('light'))
            localStorage.setItem('theme', 'light');
        } else {
            dispatch(setupTheme('dark')) 
            localStorage.setItem('theme', 'dark');
        }
    }

  return (
    <>
        <Switcher handler={checkboxHandler} initial={isDark === 'dark' ? true : false}/>
    </>
  )
}
