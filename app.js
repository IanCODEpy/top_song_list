// Adding songs functionality
const textboxInput = document.querySelector('#user-input');

textboxInput.addEventListener('submit', e =>{

    const allLis = document.querySelectorAll('.list-container > ul > li'); //querying all li's into node list
    const title = document.querySelector('header > h1'); //querying the title text 
    const list = document.querySelector('.list-container > ul'); //grabing the ul to add li element

    e.preventDefault();
    let result = textboxInput.songInput.value; //text user typed in
    let userSongsNumber = allLis.length;

    //Only add if there is text in the textbox
    if(result){
        //creating new list item
        const listItem = document.createElement('li');
        listItem.textContent = result;
        list.append(listItem);
        textboxInput.reset();
    }

    //checking if there are no songs or user cleared the list
    if(allLis === 0){
        const noSongs = document.createElement('h1');
        noSongs.textContent = 'You have no songs :(';
        list.append(noSongs);  
    }
    
    //numerating each song
    allLis.forEach((ele,pos) =>{
        ele.textContent = `${pos + 1}. ` + ele.textContent;
    });

    title.textContent =  `Your top ${userSongsNumber + 1} songs`;

});



//probably gonna need to calculate every time the mouse moves or!!!!