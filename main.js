
 
  
  // Event Listener to search Button
function gettingDateByClick(){
    const getData = document.getElementById("search-button");
    const getDataOne = getData.value;
    console.log(getDataOne);
    getDataFromFetch();
    displayData();
    
                    
} 
function getDataFromFetch(){
    const areInput = document.getElementById("input-from-user");
    const inputValue = areInput.value;
fetch("https://api.lyrics.ovh/suggest/"+inputValue)
    .then(response => response.json())
    .then (lyric => displayData(lyric))
}  

                      // Get the Song Title and Singer name from Here
function displayData(data){
        
    const nameValue = document.getElementById("first-song-title");
    nameValue.innerText = data.data[0].title;
    const singerName = document.getElementById("first-song-singer");
    singerName.innerText = data.data[0].artist.name;

    const nameValueOne = document.getElementById("second-song-title");
    nameValueOne.innerText = data.data[1].title;
    const singerNameOne = document.getElementById("second-song-singer");
    singerNameOne.innerText = data.data[1].artist.name;

    const nameValueTwo = document.getElementById("third-song-title");
    nameValueTwo.innerText = data.data[2].title;
    const singerNameTwo = document.getElementById("third-song-singer");
    singerNameTwo.innerText = data.data[2].artist.name;

    const nameValueThree = document.getElementById("four-song-title");
    nameValueThree.innerText = data.data[3].title;
    const singerNameThree = document.getElementById("four-song-singer");
    singerNameThree.innerText = data.data[3].artist.name;

    const nameValueFour = document.getElementById("five-song-title");
    nameValueFour.innerText = data.data[4].title;
    const singerNameFour = document.getElementById("five-song-singer");
    singerNameFour.innerText = data.data[4].artist.name;

    const nameValueFive = document.getElementById("six-song-title");
    nameValueFive.innerText = data.data[5].title;
    const singerNameFive = document.getElementById("six-song-singer");
    singerNameFive.innerText = data.data[5].artist.name;

    const nameValueSix = document.getElementById("seven-song-title");
    nameValueSix.innerText = data.data[6].title;
    const singerNameSix = document.getElementById("seven-song-singer");
    singerNameSix.innerText = data.data[6].artist.name;

    const nameValue7 = document.getElementById("eight-song-title");
    nameValue7.innerText = data.data[7].title;
    const singerName7 = document.getElementById("eight-song-singer");
    singerName7.innerText = data.data[7].artist.name;

    const nameValue8 = document.getElementById("nine-song-title");
    nameValue8.innerText = data.data[8].title;
    const singerName8 = document.getElementById("nine-song-singer");
    singerName8.innerText = data.data[8].artist.name;

    const nameValue10 = document.getElementById("ten-song-title");
    nameValue10.innerText = data.data[9].title;
    const singerName10 = document.getElementById("ten-song-singer");
    singerName10.innerText = data.data[9].artist.name;
    
    getTheLyrics();
    
}



function getTheLyrics(){
    fetch(`https://api.lyrics.ovh/v1/Katy%20perry/Roar`)
    .then(response => response.json())
    .then (lyric => console.log(lyric));
}

