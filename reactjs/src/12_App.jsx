import React, { useState } from 'react'
import { ThemeProvider } from './12_Context/theme'
import ThemeBtn from './12_Components/ThemeBtn'
import Card from './12_Components/Card'

function App() {
    const [themeMode,setThemeMode]=useState("light")

    const lightTheme=()=>{
        setThemeMode("light")
    }

    const darkTheme=()=>{
        setThemeMode("dark")
    }

    useEffect(() => {
        document.querySelector('html').classList.remove("light", "dark") // remove any theme light or dark that is present
        document.querySelector('html').classList.add(themeMode)
      }, [themeMode])

    return (
        <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
          <div className="flex flex-wrap min-h-screen items-center">
              <div className="w-full">
                  <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      <ThemeBtn />
                  </div>
    
                  <div className="w-full max-w-sm mx-auto">
                      <Card />
                  </div>
              </div>
          </div>
        </ThemeProvider>
    )
}

export default App