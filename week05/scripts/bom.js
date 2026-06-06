const text = document.querySelector('#favchap');
const chapter = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(item => {
    displayList(item);
});

chapter.addEventListener('click', () => {
    if (text.value !== '') {
        displayList(text.value);
        chaptersArray.push(text.value);
        setChapterList();
        text.value = '';
        text.focus();
    }
});

function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    
    li.textContent = item;
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete'); 
    
    li.append(deletebutton);
    list.append(li);
    
    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent); 
        text.focus(); 
    });
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapterText) {
    chapterText = chapterText.slice(0, chapterText.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapterText);
    setChapterList();
}