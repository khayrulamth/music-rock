const inputText = document.querySelector(".input-text-class"),
    searchButton = document.querySelector(".search-button-class"),
    singleTite = document.querySelector(".single-title-class"),
    authorName = document.querySelector(".author-name-class"),
    singleResult = document.querySelector('.search-result'),
    lyricButton = document.querySelector('.get-lyrics-button-class');

const displaySongs = songs => {
    singleResult.innerHTML = ''; 
    songs.forEach(song => {
        const songDiv = document.createElement('div');
        songDiv.innerHTML = `
         <div class="col-md-9">
         <h3 class="lyrics-name single-title-class">${song.title}</h3>
         <p class="author lead author-name-class ">Album by <span>${song.artist.name}</span>
         </p>
         <audio
         controls
         src="${song.preview}">
             Your browser does not support the
             <code>audio</code> element.
        </audio>
     </div>
     <div class="col-md-3 text-md-right text-center">
         <button onclick="getLyric('${song.artist.name}','${song.title}')" class="btn btn-success get-lyrics-button-class">Get Lyrics</button>
     </div>`;
        songDiv.className = "single-result row align-items-center my-3 p-3";
        singleResult.appendChild(songDiv);
    });
}
const findSearchResult = async () =>{
    const searchText = inputText.value;
    const url = `https://api.lyrics.ovh/suggest/${searchText}`;
    const res = await fetch(url)
        const data = await res.json();
            const dataArray = data.data;
            displaySongs(dataArray);
}

searchButton.addEventListener("click", findSearchResult);

const displayLyrics = lyrics =>{
    document.querySelector(".single-lyrics").innerText = lyrics;
}

const getLyric = async (artist,title) =>{
    const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
    const res = await fetch(url)
    const data = await res.json();
    displayLyrics(data.lyrics);
}

