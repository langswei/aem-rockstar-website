/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

function loadGlider() {
    const gliderScript = document.createElement('script');
    gliderScript.setAttribute('src',`${window.hlx.codeBasePath}/blocks/carousel/glider.min.js`);
    document.head.appendChild(gliderScript);

    const gliderStyles = document.createElement('link');
    gliderStyles.setAttribute('rel', 'stylesheet');
    gliderStyles.setAttribute('href', `${window.hlx.codeBasePath}/blocks/carousel/glider.min.css`);
    document.head.appendChild( gliderStyles);
}

export default function decorate(block) {
    loadGlider();

    //decorate carousel with controls
    const prev = document.createElement('button');
    prev.classList.add('glider-prev');
    prev.innerText = '<'
    prev.setAttribute('aria-label', 'Previous');

    const next = document.createElement('button');
    next.classList.add('glider-next');
    next.innerText = '>';
    next.setAttribute('aria-label', 'Next');

    block.parentElement.appendChild(prev);
    block.parentElement.appendChild(next);

    var count = 0;
    const intervalId = setInterval(function(){
        console.log(`interval called: ${count}`);
        count++;
        if(typeof Glider === 'function') {
            new Glider(document.querySelector('.carousel'), {
                slidesToShow: 1,
                slidesToScroll: 1,
                draggable: false,
                rewind: true,
                arrows: {
                    prev: '.glider-prev',
                    next: '.glider-next'
                  }
              });

              clearInterval(intervalId);
        }
    }, 1000);
}