import { init } from 'config/init';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routings } from 'routes/Routings';
import { setupTheme } from 'store/authSlice';
import { AppDispatch, RootState } from 'store/store';
import { Loader } from 'ui';

export const App = () => {
  const [initiation, setInitiation] = useState<any>()
  const { theme } = useSelector((state: RootState) => state)
  const dispatch = useDispatch<AppDispatch>()

  const toggleTheme = () => {
    document.body.setAttribute('theme', theme.theme);
  };

  useEffect(() => {
    dispatch(setupTheme(localStorage.getItem('theme')))
    const statusCheacker = async () => {
    setInitiation( await init())
    }
    statusCheacker()
  }, [])

  useEffect(() => {
    toggleTheme()
  }, [theme.theme])

  const view = initiation ? <Routings /> : <div className='loader__wrapper'><Loader/></div>

  return (
    <>
    {view}
    </>
    
  );
}

export default App;
