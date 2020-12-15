const listHeader = document.querySelector('.list-header');
const theInput = listHeader.querySelector('.list-header #the-input');
const addIcon = listHeader.querySelector('.icon');
const tasksNumber = document.querySelector('.tasks-nomber span');
const tasksCompleted = document.querySelector('.tasks-completed span');

let listBody = document.querySelector('.list-body');
console.log(addIcon)

addIcon.onclick = function() {

    if (theInput.value === '') {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You Should add A Task..!',
            footer: '<a href>Why do I have this issue?</a>'
            })
    } else {
        
        let emptyMsg = document.querySelector('.empty-messege');

        if (document.body.contains(document.querySelector('.empty-messege'))) {

            emptyMsg.remove();
        }
        // Create Task Element
        const mainTask = document.createElement('div');

        // Create Text Node To Task Element
        const mainText = document.createTextNode(theInput.value);

        // Create Delete Element
        const mainSpan = document.createElement('span');

        // Create Text Node To Delete Element
        const mainSpanText = document.createTextNode('Delete')

        // Add Class Name To Main Task Element
        mainTask.className = 'task';

        // Add Class Name To Delete Element
        mainSpan.className = 'delete-task';

        // Append Text Node To Main Span
        mainSpan.appendChild(mainSpanText);

        // Append The Main Span To The Main Task
        mainTask.appendChild(mainSpan);

        // Append The Main Text To The Main Task
        mainTask.appendChild(mainText);
        
        // Append The Main Task To The List Body
        listBody.appendChild(mainTask);

        theInput.value = '';

        calculateTasks();

    }

}

document.addEventListener('click', function (e) {

    if (e.target.className == 'delete-task') {

        e.target.parentNode.remove();

        if (listBody.childElementCount === 0) {

            checkNoTasks();
        }
    }

    if (e.target.classList.contains('task')) {

        e.target.classList.toggle('finished');
    }

    calculateTasks()
})

function checkNoTasks() {

    const emptyMsg = document.createElement('div');

    const emptyMsgText = document.createTextNode('No Tasks To Show');

    emptyMsg.className = 'empty-messege';

    emptyMsg.appendChild(emptyMsgText);

    listBody.appendChild(emptyMsg);

}


function calculateTasks() {

    tasksNumber.innerHTML = document.querySelectorAll('.list-body .task').length;

    tasksCompleted.innerHTML = document.querySelectorAll('.list-body .finished').length;

}
