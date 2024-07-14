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
        </ul>
      </div>

      <h3>Команди інсталяції для консолі:</h3>

      <ul className="command-list">
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
      </ul>
    </div>
  );
};

export default Libraries;
