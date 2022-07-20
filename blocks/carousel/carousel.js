

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

    //decorate carousel with stuff we want
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