// src/js/linkScript.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { FaFileExport } from 'react-icons/fa6';

export const applyLinkScript = () => {
  const applyToNewLinks = (container) => {
    const linksWithFavicon = container.querySelectorAll(".link-with-favicon");
    linksWithFavicon.forEach(link => {
      // Устанавливаем target="_blank"
      link.setAttribute('target', '_blank');

      // Проверяем, нет ли уже изображения или fallback иконки в ссылке
      if (link.querySelector("img") || link.querySelector("span")) {
        return; // если есть, ничего не делаем
      }

      let linkUrl = new URL(link.href);
      let faviconUrl = linkUrl.origin + "/favicon.ico";

      let img = document.createElement("img");
      img.src = faviconUrl;
      img.alt = "Favicon";
      img.onerror = function() {
        // Убедимся, что fallback иконка добавляется только один раз
        if (!link.querySelector("span")) {
          let fallbackIcon = document.createElement("span");
          fallbackIcon.style.marginRight = '5px'; // Пример стилизации
          ReactDOM.render(<FaFileExport />, fallbackIcon);
          link.insertBefore(fallbackIcon, link.firstChild);
        }
        img.remove();
      };
      link.insertBefore(img, link.firstChild);
    });
  };

  applyToNewLinks(document);

  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach(addedNode => {
          if (addedNode.nodeType === 1) {
            applyToNewLinks(addedNode);
          }
        });
      }
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });

  document.addEventListener('click', (event) => {
    if (event.target.tagName === 'A' && event.target.href.includes('#')) {
   
      return;
    }
  });
};
