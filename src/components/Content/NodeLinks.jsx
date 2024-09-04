import React from 'react'
import { GrCopy } from 'react-icons/gr';

const NodeLinks = () => {
 const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
  <>
     <ul className="list">
    <li>
      <a className="link-with-favicon" href="https://nodejs.org/en">Download the latest version of Node.js</a>
      <a className="link-with-favicon" href="https://editorconfig.org/">What is EditorConfig?</a>
      <a className="link-with-favicon" href="https://github.com/danmar66/fson99">GoIt Node.js GitHub repository (fson99)</a>
    </li>
      </ul>
      
      <h2>Ініціалізація проєкту</h2>
  
      <ul className='list'>
        <li className="command">
          <span>node --version</span>
          <button onClick={() => copyToClipboard('node --version')}>
            <GrCopy />
          </button>
        </li>
        <li className="command">
          <span>npm init -y</span>
          <button onClick={() => copyToClipboard('npm init -y')}>
            <GrCopy />
          </button>
        </li>
        <li className="command">
          <span>npm install --save-dev nodemon</span>
          <button onClick={() => copyToClipboard('npm install --save-dev nodemon')}>
            <GrCopy />
          </button>
        </li>
  
        
      </ul>
  </>
  )
}

export default NodeLinks