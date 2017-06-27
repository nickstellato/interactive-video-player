(function(){

    const video = document.querySelector('video');
    const transcript = document.querySelector('.transcript');
    const sentences = [].slice.call(transcript.querySelectorAll('span'));

    video.addEventListener('timeupdate', () => {
        for (let i = 0; i < sentences.length; i += 1) {
            let currentSentence = sentences[i];
            let nextSentence = sentences[i+1];
            let lastSentence = sentences[sentences.length-1];

            if (video.currentTime > currentSentence.dataset.time && currentSentence == lastSentence) {
                currentSentence.className = 'highlight';
            } else if (video.currentTime > currentSentence.dataset.time && video.currentTime < nextSentence.dataset.time) {
                currentSentence.className = 'highlight';
            } else if (video.currentTime > currentSentence.dataset.time && video.currentTime > nextSentence.dataset.time) {
                currentSentence.className = '';
            };
        }
    });

})();