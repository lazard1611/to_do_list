const addTaskBtn = document.querySelector('.add_todolist__btn');
const descTaskInput = document.querySelector('.todo_list_form__input');
const todoWrap = document.querySelector('.todo_list__wrap');

let tasks;
!localStorage.tasks ? tasks = [] : JSON.parse(localStorage.getItem('tasks'));

function Task(description) {
	this.description = description;
	this.completed = false;
}

const createTemplate = (task, index) => {
	return `
	<div class="todo_list_item">
		<div class="todo_list_item__in">
			<input class="todo_list_item__complete" type="checkbox">
		</div>
		<div class="todo_list_item__descrip">${task.description}</div>
		<div class="todo_list_btn">
			<button class="todo_list_btn__del">Dellete</button>
		</div>
	</div>
	`
}

const fillHtmlList = () => {
	todoWrap.innerHTML = "";
	if (tasks.length > 0) {
		tasks.forEach((item, index) => {
			todoWrap.innerHTML += createTemplate(item, index);
		})
	}
}

const updateLocal = () => {
	localStorage.setItem('tasks', JSON.stringify(tasks))
}

addTaskBtn.addEventListener('click', () => {
	tasks.push(new Task(descTaskInput.value));
	updateLocal();
	fillHtmlList();
})


