(function(){

    const video = document.querySelector('video');
    const transcript = document.querySelector('.transcript');
    const sentences = [].slice.call(transcript.querySelectorAll('span'));

    video.addEventListener('timeupdate', () => {
        for (let i = 0; i < sentences.length; i += 1) {
            let currentSentence = sentences[i];
            let nextSentence = sentences[i+1];
            let lastSentence = sentences[sentences.length-1];
            
            //removes the sentence highlighting on the last sentence when clicking the replay button
            lastSentence.className = '';
            
            if (video.currentTime > currentSentence.dataset.time && currentSentence == lastSentence) {
                currentSentence.className = 'highlight';
            } else if (video.currentTime > currentSentence.dataset.time && video.currentTime < nextSentence.dataset.time) {
                currentSentence.className = 'highlight';
            } else if (video.currentTime > currentSentence.dataset.time && video.currentTime > nextSentence.dataset.time) {
                currentSentence.className = '';
            }
        }
    });

    sentences.forEach((element) => {
        element.addEventListener('click', () => {
            video.currentTime = element.dataset.time;
            video.play();
        })
    });
    
})();