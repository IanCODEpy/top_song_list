//Adding songs functionality
const form = document.querySelector('#user-input');
const ul = document.querySelector('ul');
const deafaultList = document.querySelector('.list-container > ul > h1')
const search = document.querySelector('#search-bar')

form.addEventListener('submit', e =>{
    e.preventDefault();

    let inputSongName = form.songInput.value

    //Empty strings cannot be added
    if(inputSongName){
        let liEle = document.createElement('li');

        if(document.querySelector('.list-container > ul > h1') != null){
        let deafaultList = document.querySelector('.list-container > ul > h1');
        deafaultList.remove(); //moved this here from line 23
        }
        
        liEle.textContent = inputSongName;
        ul.append(liEle);
        form.reset();
        
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


// Search functionality

//Filtering results
const filterFunc = term =>{

    // Hides LI element if does not include term
    Array.from(ul.children)
        .filter((listElelment) =>{
            return !listElelment.textContent.toLowerCase().includes(term);
        })
        .forEach(element => {
            element.classList.add('hidden');
        });

    //Shows LI element if includes term
    Array.from(ul.children)
        .filter(listElelment =>{
            return listElelment.textContent.toLowerCase().includes(term);
        })
        .forEach(element => {
            element.classList.remove('hidden');
        });
};

// Grabbing text 
search.addEventListener('keyup', () =>{
    let term = search.value.trim().toLowerCase();
    filterFunc(term);
});

