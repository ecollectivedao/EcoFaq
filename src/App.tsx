import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routings } from 'routes/Routings';
import { setupTheme } from 'store/authSlice';
import { AppDispatch, RootState } from 'store/store';

export const App = () => {
  const {theme} = useSelector((state:RootState) => state)
  const dispatch = useDispatch<AppDispatch>()

  const toggleTheme = () => {
    document.body.setAttribute('theme', theme.theme);
  };

  useEffect(() => {
    dispatch(setupTheme(localStorage.getItem('theme')))
  },[])

  useEffect(() => {
      toggleTheme()
  },[theme.theme])

  return (
    <Routings/>
  );
}

export default App;
