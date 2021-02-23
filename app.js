//Adding songs functionality
const form = document.querySelector('#user-input');
const ul = document.querySelector('ul');
const deafaultList = document.querySelector('.list-container > ul > h1')

form.addEventListener('submit', e =>{
    e.preventDefault();

    let inputSongName = form.songInput.value

    //Empty strings cannot be added
    if(inputSongName){
        const liEle = document.createElement('li');
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
    if(e.target.tagName == 'LI'){
        e.target.remove();
    }

    //checking if list is now empty (if so update the user)
    const allLis = document.querySelectorAll('li');

    if(allLis.length == 0){
        const listcontainer = document.querySelector('.list-container > ul');
        const noSongsTitle = document.createElement('h1');

        noSongsTitle.textContent = "You have no songs :(" //remove if list is populated again
        listcontainer.append(noSongsTitle);
    
    }

    // Updating the title to reflect how many songs has in list
    
    const titleNum = document.querySelector('header > h1');
    let numSongs = allLis.length;
    titleNum.textContent = `Your top ${numSongs} songs`;
    const p = document.createElement('p');

    //Enmerating the songs
    allLis.forEach((ele,pos) =>{
        
        p.textContent = `${pos+1}.`;
        ele.prepend(p);
    });

});


//clicking on 'add more songs generates stuff user message'