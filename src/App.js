import {useEffect, useState } from 'react';
import './App.css';
import Switch from '@mui/material/Switch';

const App =()=>{
  const [themeMode, setThemeMode] = useState('default');
  const [checked,setChecked]=useState(false);

  const toggleTheme = () => {
    const defaultTheme = window.localStorage.getItem('themeMode')
    const savedMode = defaultTheme === 'darkMode' ? 'darkMode' : 'default'
    if (savedMode === 'default') {
      window.localStorage.setItem('themeMode', 'darkMode')
      setThemeMode('darkMode')
      setChecked(true)
    } else {
      window.localStorage.setItem('themeMode', 'default')
      setThemeMode('default')
      setChecked(false)
    }
  }

  useEffect(() => {
    const defaultTheme = window.localStorage.getItem('themeMode')
    setThemeMode(defaultTheme)
    if (defaultTheme === 'darkMode') {
      document.body.classList.add('darkMode')
      setChecked(true)
    }
    else {
      document.body.classList.remove('darkMode')
      setChecked(false)
    }
  },[themeMode,checked])

	return (
    <div>
      <Switch checked={checked} onClick={toggleTheme}/>
    </div>
  );
}

export default App;
