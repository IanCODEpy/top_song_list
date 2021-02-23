//Adding songs functionality
const form = document.querySelector('#user-input');
const ul = document.querySelector('ul');
const deafaultList = document.querySelector('.list-container > ul > h1')

form.addEventListener('submit', e =>{
    e.preventDefault();

    let inputSongName = form.songInput.value

    //Empty strings cannot be added
    if(inputSongName){
        let liEle = document.createElement('li');

        if(document.querySelector('.list-container > ul > h1') != null){
        const deafaultList = document.querySelector('.list-container > ul > h1');
        }
        liEle.textContent = inputSongName;
        ul.append(liEle);
        form.reset();
        deafaultList.remove();
        }

    // Updating the title to reflect how many songs has in list
    const allLis = document.querySelectorAll('li');
    const titleNum = document.querySelector('header > h1');
    let numSongs = allLis.length;
    titleNum.textContent = `Your top ${numSongs} songs`;


});

//Removing songs functionality
ul.addEventListener('click', e=>{

    if(e.target.tagName === 'LI'){
        e.target.remove();

        const allLis = document.querySelectorAll('li');

        //checking if list is now empty (if so update the user)
        if(allLis.length == 0){
            const listcontainer = document.querySelector('.list-container > ul');
            const noSongsTitle = document.createElement('h1');
            noSongsTitle.textContent = "You have no songs :(" 
            listcontainer.append(noSongsTitle);
        }
    }

    // Updating the title to reflect how many songs has in list
    const allLis = document.querySelectorAll('li');
    const titleNum = document.querySelector('header > h1');
    let numSongs = allLis.length;
    titleNum.textContent = `Your top ${numSongs} songs`;

});


// Line 15 to 17 if the condition is removed the code runs fine and will only throw a null error, please look