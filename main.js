let arr = [];



// creating a new div when clicking the add task button
document.querySelector('#add-new > div > div > div.modal-footer > button.btn.btn-primary').onclick = function(){
    if(document.querySelector('#task-title').value.length == 0){
        alert("Please enter the task ")
    }

    else{
        
        acceptData();
        addTask(); 


        // var current_tasks = document.querySelectorAll(".delete");
        // var newtaskdiv = document.querySelector('#tasks > div')
        // for(var i=0; i<current_tasks.length; i++){
        //     current_tasks[i].onclick = function(){
        //         this.parentNode.remove();
        //     }
        // }
    }
}

let acceptData = () => {

    let title = document.querySelector('#task-title').value;
    let description = document.querySelector('#task-description').value;
    let date = document.querySelector('#theDate').value;


    let objAdd = {
        objTitle : title,
        objDescription : description,
        objDate : date 
    }

    arr.push(objAdd)

    console.log(arr);
}

// Add task

let addTask = () => {

    document.querySelector('.task-checkbox').innerHTML = ""
    for(i=0;i<arr.length;i++ ){
        document.querySelector('.task-checkbox').innerHTML += ` 
           
        <!-- Add Modal -->

        <div class="d-flex  form-check border border-1 task-check my-4 px-5  py-3 ">
            <input class="form-check-input rounded-circle px-2" type="checkbox"  value="" id="tik">
            <div class="list-head d-flex flex-column">
                <p class=" task-title px-2 mb-0"  id="task-title">
                    ${arr[i].objTitle}
                </p>
                <br>
                <p class=" task-date mt-0" >
                  by  ${arr[i].objDate}
                </p>
            </div>
            <button class="edit ms-auto bg-light border border-0 btn " data-bs-toggle="modal" data-bs-target="#edit-task${i}">    
                  <img src="/ToDo-1/img/edit-icon.png" class="icons"  alt=""> 
            </button>
            <button class="delete mx-3 bg-light border border-0"   data-bs-toggle="modal" data-bs-target="#delete-task${i}">
                 <img src="/ToDo-1/img/delete-icon.png" class="icons"  alt="">
            </button>    
        </div>


    <!-- Delete Modal -->

    <div class="modal fade" id="delete-task${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog"> 
        <div class="modal-content">
          <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
          <div class="modal-header border-0 pt-4 d-flex justify-content-center">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            
          </div>
          <div class="modal-body d-flex justify-content-center">
            <p>Are you sure you want to delete this task?</p>
          </div>
          <div class="modal-footer border-0 pb-5 d-flex justify-content-center gap-3">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onclick='deleteTask(${i})'>delete</button>
          </div>
        </div>
      </div>
    </div>


    <!-- Edit Modal -->

    <div class="modal fade" id="edit-task${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
                 <div class="modal-content">
                     <div class="modal-header">
                         <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Task</h1>
                         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                     </div>
                     <div class="modal-body">
                         <form>
                    <div class="mb-3">
                        <label for="title" class="col-form-label">Title </label>
                        <input type="text" class="form-control" id="title${i}" value="${arr[i].objTitle}" >
                    </div>
                    <div class="mb-3">
                        <label for="message-text" class="col-form-label">Description</label>
                        <textarea class="form-control" id="description${i}" >${arr[i].objDescription}</textarea>
                    </div>
                    <div class="mb-3">
                        <label for="title" class="col-form-label">Due Date </label>
                        <input type="date"  class="form-control mt-2 mb-3" id="theDate${i}" value="${arr[i].objDate}"></input>
                    </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" id="add-task" data-bs-dismiss="modal" onclick='editTask (${i})'>Edit Task</button>
                </div>                   
            </div>
        </div>
    </div>
    `;
 }

    clear();
}

// Clear

function clear(){
    document.querySelector('#task-title').value = "";
    document.querySelector('#task-description').value = "";
    document.querySelector('#theDate').value = "";
}

// Delete Task

function deleteTask(i){
    arr.splice(i,1)
    addTask()
    console.log(arr)
}

// Edit Task

let editTask = (i) => {
    arr[i].objTitle = document.getElementById(`title${i}`).value
    arr[i].objDescription = document.getElementById(`description${i}`).value
    arr[i].objDate = document.getElementById(`theDate${i}`).value

    addTask()
    console.log(arr)
}


// Sort By Title

let sortByTitle = (i) => {
    arr.sort(function (a, b) {
        if (a.objTitle.toLowerCase() < b.objTitle.toLowerCase()) return -1;
        if (a.objTitle.toLowerCase() > b.objTitle.toLowerCase()) return 1;
        return 0;

        
    })
    document.querySelector('.task-checkbox').innerHTML = ""
    addTask()
}

let sortByDate = (i) => {
    
}
