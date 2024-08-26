import React from 'react'

const TS = () => {
  return (
      <div>
          <ul className="list">
              <li className="link-with-favicon"><a href="https://www.typescriptlang.org/docs/">TypeScript documentation</a></li>
          </ul>

          <h1>Commands for vite+React+TS project</h1>
          <ul className="list">
              <li className="command">
                <span>npm create vite@latest my-react-project -- --template react-ts</span>
                <button onClick={() => copyToClipboard('npm create vite@latest my-react-project -- --template react-ts')}>
                    <GrCopy />
                </button>
              </li>
              <li className="command">
                <span>npm install --save-dev @types/react</span>
                <button onClick={() => copyToClipboard('npm install --save-dev @types/react')}>
                    <GrCopy />
                </button>
              </li>
              <li className="command">
                <span>npm install --save-dev @types/react-router-dom</span>
                <button onClick={() => copyToClipboard('npm install --save-dev @types/react-router-dom')}>
                    <GrCopy />
                </button>
              </li>
              <li className="command">
                <span>npm install --save-dev @types/react-icons</span>
                <button onClick={() => copyToClipboard('npm install --save-dev @types/react-icons')}>
                    <GrCopy />
                </button>
              </li>
              <li className="command">
                <span>npm install --save-dev @types/react-modal</span>
                <button onClick={() => copyToClipboard('npm install --save-dev @types/react-modal')}>
                    <GrCopy />
                </button>
              </li>
              <li className="command">
                <span>npm install --save-dev @types/react-loader-spinner</span>
                <button onClick={() => copyToClipboard('npm install --save-dev @types/react-loader-spinner')}>
                    <GrCopy />
                </button>
              </li>
              <li className="command">
                <span>npm install --save-dev @types/react-hot-toast</span>
                <button onClick={() => copyToClipboard('npm install --save-dev @types/react-hot-toast')}>
                    <GrCopy />
                </button>
              </li>
              <li className="command">
                <span>npm install --save-dev @types/axios</span>
                <button onClick={() => copyToClipboard('npm install --save-dev @types/axios')}>
                    <GrCopy />
                </button>
              </li>
              
          </ul>
    </div>
  )
}

export default TS