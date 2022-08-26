'use strict'

const taskinput = document.getElementById('task__input');
const taskslist = document.getElementById('tasks__list');
const taskadd = document.getElementById('tasks__add');
let tasks = document.getElementsByClassName('task__title');


taskadd.addEventListener('click', taskAdd)

function taskAdd(event){

    const taskHTML = document.createElement('div');
    taskHTML.classList.add('task');
    const taskTitleHTML = document.createElement('div');
    taskTitleHTML.classList.add('task__title');
    taskTitleHTML.textContent = taskinput.value;

    if ((event.key === 'Enter' || event.target === taskadd) && taskinput.value.trim() !== '') {
   
        taskHTML.insertAdjacentHTML('afterbegin', taskTitleHTML.outerHTML);
        taskHTML.insertAdjacentHTML('beforeend', "<a href='#' class='task__remove'>&times;</a>");
        taskslist.insertAdjacentHTML('beforeend', taskHTML.outerHTML);
    }
    const taskRemove = document.getElementsByClassName('task__remove')
    taskRemove[taskRemove.length -1].addEventListener('click', removeTask);
    

    function removeTask() {
        this.closest('.task').remove();
    }

    
    taskinput.value = '';
    event.preventDefault();
}
