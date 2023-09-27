import React from 'react'

function App() {
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