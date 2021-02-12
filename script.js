const inputText = document.querySelector(".input-text-class"),
 searchButton = document.querySelector(".search-button-class"),
 singleTite = document.querySelector(".single-title-class"),
 authorName = document.querySelector(".author-name-class"),
 lyricButton = document.querySelector('.get-lyrics-button-class');

 const displaySongs = songs => {
     songs.forEach(song => {
         console.log(song.title);
     });
 }
 function findSearchResult(){
    const searchText = inputText.value;
    const url = `https://api.lyrics.ovh/suggest/${searchText}`;
    fetch(url)
    .then(res=> res.json())
    .then(data => {
        displaySongs(data.data);
    });
    
 }
 searchButton.addEventListener("click",findSearchResult);

