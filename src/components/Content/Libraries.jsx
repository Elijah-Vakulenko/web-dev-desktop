import React from 'react';
import { GrCopy } from 'react-icons/gr';

const Libraries = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div>
      <div>
        <ul className="list">
          <li>
            <a className="link-with-favicon" href="https://www.npmjs.com/">npm</a>
          </li>
          <li>
            <a className="link-with-favicon" href="https://simplelightbox.com/">SimpleLightBox</a>
          </li>
          <li>
            <a className="link-with-favicon" href="https://izitoast.marcelodolza.com/">iziToast</a>
          </li>
          <li>
            <a className="link-with-favicon" href="https://cssloaders.github.io/">CSS Loaders</a>
          </li>
          <li>
            <a className="link-with-favicon" href="https://cdnjs.com/libraries/modern-normalize">Modern Normalize</a>
          </li>
          <li>
            <a className="link-with-favicon" href="https://swiperjs.com/">Swiper-js</a>
          </li>
          <li>
            <a className="link-with-favicon" href="https://www.npmjs.com/package/accordion-js">accordion-js</a>
          </li>
          <li>
            <a className="link-with-favicon" href="https://animate.style/">Animate CSS</a>
          </li>
          <li>
            <a className="link-with-favicon" href="https://michalsnik.github.io/aos/">Animate On Scroll Library</a>
          </li>
          <li>
            <a className="link-with-favicon" href="https://github.com/public-apis/public-apis">Public APIs</a>
          </li>
          <li>
            <a className="link-with-favicon" href="https://formik.org/docs/overview">Formik</a>
          </li>
          <li>
            <a className="link-with-favicon" href="https://github.com/jquense/yup">Yup</a>
          </li>
          <li>
            <a className="link-with-favicon" href="https://github.com/ai/nanoid/blob/bacb11b58ec098b5192e1eb927d3581872c86921/README.md">NanoID</a>
          </li>
          <li>
            <a className="link-with-favicon" href="https://react-hot-toast.com/docs">React Hot Toast</a>
          </li>
          <li>
            <a className="link-with-favicon" href="https://github.com/reactjs/react-modal?tab=readme-ov-file#examples">React Modal</a>
          </li>
          <li>
            <a className="link-with-favicon" href="https://github.com/mhnpd/react-loader-spinner">react-spinner-loader</a>
          </li>
          <li>
            <a className="link-with-favicon" href="https://redux-toolkit.js.org/">Redux Toolkit</a>
          </li>
          <li>
            <a className="link-with-favicon" href="https://react-redux.js.org/">React Redux</a>
          </li>
          <li>
            <a className="link-with-favicon" href="https://animejs.com/">Amime.js</a>
          </li>
          <li>
            <a className="link-with-favicon" href="https://gsap.com/">GSAP (JS animation library)</a>
          </li>
          <li>
            <a className="link-with-favicon" href="http://velocityjs.org/">Velocity.js (JS animation library)</a>
          </li>
          <li>
            <a className="link-with-favicon" href="https://www.react-spring.dev/">React-spring (animation library for React)</a>
          </li>
          <li>
            <a className="link-with-favicon" href="https://mojs.github.io/">Mo.js (animation library)</a>
          </li>
          <li>
            <a className="link-with-favicon" href="https://www.npmjs.com/package/redux-persist">Redux Persist </a>
          </li>
          <li>
            <a className="link-with-favicon" href="https://dummyjson.com/">Dummy JSON database </a>
          </li>
      <li><a className="link-with-favicon" href="https://www.framer.com/motion/?utm_source=google&utm_medium=adwords&utm_campaign=PerfMax-Framer-ControlTargets-M-July2024-PUBLISH_&gad_source=1&gclid=Cj0KCQjwz7C2BhDkARIsAA_SZKYyEejIUNP1kjSAeVsS6iwFV9xcnqcLBm4_L1US9m-MY3rpyfCkzycaAmOhEALw_wcB">Framer Motion</a></li>
    
        </ul>
      </div>

      <h3>Команди інсталяції для консолі:</h3>

      <ul className="command-list">
       <li className="command">
  <span>npm create vite@latest</span>
  <button onClick={() => copyToClipboard('npm create vite@latest')}>
    <GrCopy />
  </button>
        </li>
       <li className="command">
  <span>npm install</span>
  <button onClick={() => copyToClipboard('npm install')}>
    <GrCopy />
  </button>
        </li>
<li className="command">
  <span>npm run dev</span>
  <button onClick={() => copyToClipboard('npm run dev')}>
    <GrCopy />
  </button>
</li>
<li className="command">
  <span>npm install modern-normalize</span>
  <button onClick={() => copyToClipboard('npm install modern-normalize')}>
    <GrCopy />
  </button>
</li>
<li className="command">
  <span>npm install simplelightbox</span>
  <button onClick={() => copyToClipboard('npm install simplelightbox')}>
    <GrCopy />
  </button>
</li>
<li className="command">
  <span>npm install izitoast --save</span>
  <button onClick={() => copyToClipboard('npm install izitoast --save')}>
    <GrCopy />
  </button>
</li>
<li className="command">
  <span>$ npm install swiper</span>
  <button onClick={() => copyToClipboard('$ npm install swiper')}>
    <GrCopy />
  </button>
</li>
<li className="command">
  <span>npm install axios</span>
  <button onClick={() => copyToClipboard('npm install axios')}>
    <GrCopy />
  </button>
</li>
<li className="command">
  <span>npm install accordion-js</span>
  <button onClick={() => copyToClipboard('npm install accordion-js')}>
    <GrCopy />
  </button>
</li>
<li className="command">
  <span>npm install react-icons</span>
  <button onClick={() => copyToClipboard('npm install react-icons')}>
    <GrCopy />
  </button>
</li>
<li className="command">
  <span>npm install formik --save</span>
  <button onClick={() => copyToClipboard('npm install formik --save')}>
    <GrCopy />
  </button>
</li>
<li className="command">
  <span>npm install nanoid</span>
  <button onClick={() => copyToClipboard('npm install nanoid')}>
    <GrCopy />
  </button>
</li>
<li className="command">
  <span>npm install clsx</span>
  <button onClick={() => copyToClipboard('npm install clsx')}>
    <GrCopy />
  </button>
</li>
<li className="command">
  <span>npm install Yup</span>
  <button onClick={() => copyToClipboard('npm install yup')}>
    <GrCopy />
  </button>
</li>
<li className="command">
  <span>npm install react-hot-toast</span>
  <button onClick={() => copyToClipboard('npm install react-hot-toast')}>
    <GrCopy />
  </button>
</li>
<li className="command">
  <span>npm install --save react-modal</span>
  <button onClick={() => copyToClipboard('npm install --save react-modal')}>
    <GrCopy />
  </button>
</li>
<li className="command">
  <span>npm install react-loader-spinner --save</span>
  <button onClick={() => copyToClipboard('npm install react-loader-spinner --save')}>
    <GrCopy />
  </button>
</li>
<li className="command">
  <span>npm install react-redux</span>
  <button onClick={() => copyToClipboard('npm install react-redux')}>
    <GrCopy />
  </button>
</li>
<li className="command">
  <span>npm install @reduxjs/toolkit</span>
  <button onClick={() => copyToClipboard('npm install @reduxjs/toolkit')}>
    <GrCopy />
  </button>
</li>
<li className="command">
  <span>npm i @react-spring/web</span>
  <button onClick={() => copyToClipboard('npm i @react-spring/web')}>
    <GrCopy />
  </button>
</li>
<li className="command">
  <span>npm i redux-persist</span>
  <button onClick={() => copyToClipboard('npm i redux-persist')}>
    <GrCopy />
  </button>
</li>
<li className="command">
  <span>npm install react-router-dom
</span>
  <button onClick={() => copyToClipboard('npm install react-router-dom')}>
    <GrCopy />
  </button>
</li>
      </ul>
    </div>
  );
};

export default Libraries;
