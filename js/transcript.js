(function(){

    const video = document.querySelector('video');
    const transcript = document.querySelector('.transcript');
    const transcriptSections = transcript.querySelectorAll('span');

    video.addEventListener('timeupdate', () => {
        for (let i = 0; i < transcriptSections.length; i += 1) {
            let section = transcriptSections.item(i);
            let nextSection = section.nextElementSibling;

            console.log(nextSection);

            if (section.dataset.time < video.currentTime) {
                section.className = 'highlight';
            }

            if (nextSection.dataset.time < video.currentTime) {
                section.className = '';
            }

            // if (section.dataset.time < video.currentTime) {
            //     section.className = 'highlight';
            // }
        }
    });

})();