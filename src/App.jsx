import { useState } from 'react'
import logo from '@assets/images/logo.svg'
import '@assets/css/App.css'

import '@assets/fonts/sohne-mono-buch.woff2'
import '@assets/fonts/sohne-mono-buch-italic.woff2'
import '@assets/fonts/sohne-mono-halbfett.woff2'
import '@assets/fonts/sohne-mono-halbfett-italic.woff2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header text-red-400">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-red-400">Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
