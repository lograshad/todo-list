const addForm = document.querySelector('.tayo');
const list = document.querySelector('.to-do-wrapper');
const search = document.querySelector('.search input');

const generateTodo = mission => {
    const html = `
    <li class="to-dos">
    <span>${mission}</span>
    <img src="delete.png" alt="delete" class="i"></li>`;
list.innerHTML += html
};


addForm.addEventListener('submit', e => {
    e.preventDefault();
    const mission = addForm.add.value.trim();

    if (mission.length) {
        generateTodo(mission); 
        addForm.reset();  
    }
});

list.addEventListener('click', e => {


    if(e.target.classList.contains('i')) {
        e.target.parentElement.remove();
    }
});



const filterTodos = (term) => {

    // console.log(Array.from(list.children.textContext));

    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered'));
};


search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);

    console.log(term);
});