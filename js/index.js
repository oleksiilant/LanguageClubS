document.querySelector('.fetch-html')
    .addEventListener('click', fetchHtml);

function fetchHtml() {
    fetch('client-data-alice.html')
        .then( response => response.text() )
        .then( html => document.querySelector('.html-container')
                 .innerHTML = html );
}

document.querySelector('.eng-html')
    .addEventListener('click', engHtml);

function engHtml() {
    fetch('eng.html')
        .then( response => response.text() )
        .then( html => document.querySelector('.container_eng')
                 .innerHTML = html );
}

document.querySelector('.ger-html')
    .addEventListener('click', gerHtml);

function gerHtml() {
    fetch('ger.html')
        .then( response => response.text() )
        .then( html => document.querySelector('.container_ger')
                 .innerHTML = html );
}

document.querySelector('.ita-html')
    .addEventListener('click', itaHtml);

function itaHtml() {
    fetch('ita.html')
        .then( response => response.text() )
        .then( html => document.querySelector('.container_ita')
                 .innerHTML = html );
}

document.querySelector('.fra-html')
    .addEventListener('click', fraHtml);

function fraHtml() {
    fetch('fra.html')
        .then( response => response.text() )
        .then( html => document.querySelector('.container_fra')
                 .innerHTML = html );
}

document.querySelector('.pl-html')
    .addEventListener('click', plHtml);

function plHtml() {
    fetch('pl.html')
        .then( response => response.text() )
        .then( html => document.querySelector('.container_pl')
                 .innerHTML = html );
}

document.querySelector('.chi-html')
    .addEventListener('click', chiHtml);

function chiHtml() {
    fetch('chi.html')
        .then( response => response.text() )
        .then( html => document.querySelector('.container_chi')
                 .innerHTML = html );
}
document.querySelector('.arabic-html')
    .addEventListener('click', arabicHtml);

function arabicHtml() {
    fetch('arabic.html')
        .then( response => response.text() )
        .then( html => document.querySelector('.container_arabic')
                 .innerHTML = html );
}