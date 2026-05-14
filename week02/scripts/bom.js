const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        const items = list.querySelectorAll('li');
        for (let item of items) {
            if (item.textContent.includes(input.value)) {
            alert("This chapter is already in your list!");
            return;
        }
}
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', 'Remove ' + input.value);
        
        deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        input.focus();
        });

        li.append(deleteButton);

        list.append(li);

        input.value = '';
        input.focus();
    } 
    else {
        input.focus();
    }
});