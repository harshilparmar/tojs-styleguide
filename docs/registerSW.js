if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('https://brand.torontojs.com/sw.js', { scope: 'https://brand.torontojs.com/' })})}