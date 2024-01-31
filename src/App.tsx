import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ConfigurableCard from "./module/card/ui/Card.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
        <ConfigurableCard
            cardStyles="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row"
            textBoxStyles="flex flex-col justify-start p-6"
            titleStyles="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50"
            textStyles="mb-4 text-base text-neutral-600 dark:text-neutral-200"
            title="Card T"
            text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            imagePosition="right"
            imageStyles="h-96 w-full rounded-t-lg object-cover md:h-auto md:!rounded-none md:!rounded-l-lg"
            imageSrc="https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
        />
    </>
  )
}

export default App
