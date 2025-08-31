import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Your React App
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This is a modern React application built with Vite and styled with Tailwind CSS. 
            Start building your amazing project!
          </p>
        </header>

        <main className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Getting Started
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-gray-700">Available Scripts</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><code className="bg-gray-100 px-2 py-1 rounded">npm run dev</code> - Start development server</li>
                  <li><code className="bg-gray-100 px-2 py-1 rounded">npm run build</code> - Build for production</li>
                  <li><code className="bg-gray-100 px-2 py-1 rounded">npm run preview</code> - Preview production build</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-gray-700">Features</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>⚡ Vite for fast development</li>
                  <li>🎨 Tailwind CSS for styling</li>
                  <li>⚛️ React 18 with hooks</li>
                  <li>🔄 Hot Module Replacement</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Interactive Counter
            </h2>
            <div className="text-center">
              <p className="text-6xl font-bold text-indigo-600 mb-6">{count}</p>
              <div className="space-x-4">
                <button
                  onClick={() => setCount(count - 1)}
                  className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200 font-medium"
                >
                  Decrease
                </button>
                <button
                  onClick={() => setCount(0)}
                  className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 font-medium"
                >
                  Reset
                </button>
                <button
                  onClick={() => setCount(count + 1)}
                  className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200 font-medium"
                >
                  Increase
                </button>
              </div>
            </div>
          </div>
        </main>

        <footer className="text-center mt-12 text-gray-500">
          <p>Built with ❤️ using React + Vite + Tailwind CSS</p>
        </footer>
      </div>
    </div>
  )
}

export default App
