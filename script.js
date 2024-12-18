const form = document.querySelector('form')
const userInput = document.querySelector('input')
const ul  = document.querySelector('ul')

let editFlag = false
let editTarget = null





document.addEventListener("DOMContentLoaded", setupItems);

function setupItems(){
    let items = JSON.parse(localStorage.getItem('todo'));
    
    console.log(items);

    for (const i in items) {
       console.log(items[i][0],items[i][1]);

       display(items[i][0],items[i][1])
       
       
    }
    
    

}

function display(id,value){

    li = document.createElement('li')
  
    li.setAttribute('id',id)
    li.innerHTML=`
        <p>${value}</p> <i class="ri-edit-2-line"></i> <i class="ri-delete-bin-fill"></i>
    `
    
    
    ul.appendChild(li)

    const editbtn = li.querySelector('.ri-edit-2-line')
    const deletebtn  = li.querySelector('.ri-delete-bin-fill') 

    editbtn.addEventListener('click',editBtnn)
    deletebtn.addEventListener('click',deleteBtnn)


}

function deleteBtnn(e){
    const todo = e.target.parentElement

        const id = todo.getAttribute('id')

        ul.removeChild(todo)

        removeFromLocalStorage(id)
}

form.addEventListener('submit',function(e){
    e.preventDefault()
    input =  userInput.value

    

    addToDo(input)

   
})

function editBtnn(e){
    editValue = e.target.parentElement.innerText;
            editLi = e.target.previousElementSibling;

            editEl = e.target.parentElement


            // console.log(editValue);
            // console.log(editLi);
            userInput.value=editValue

            editFlag = true
            editTarget=editLi
}

function addToDo(input){


    if (editFlag) {

        editLocalStorage(editTarget.parentElement,input)
        editTodo(input)
       

  
        
    }else{

        li = document.createElement('li')
        const id = new Date().getTime()
        li.setAttribute('id',id)
        li.innerHTML=`
            <p>${input}</p> <i class="ri-edit-2-line"></i> <i class="ri-delete-bin-fill"></i>
        `
        console.log(li);
        
        ul.appendChild(li)

        addToLocalStorage(id,input)
    
        userInput.value = ''
    }



   // </ ====================== Delete todo ======================>
    deleteBtn = li.querySelector('.ri-delete-bin-fill')

    deleteBtn.addEventListener('click',deleteBtnn)
       
        
        

    // <====================== Delete todo ====================== \>



    // </ ====================== Edit todo ======================>
        editBtn = li.querySelector('.ri-edit-2-line')

        editBtn.addEventListener('click',editBtnn)
            
        
            
        
    // <====================== Edit todo ====================== \>
}


function editTodo(input){
    console.log("yo we are editing");

    editTarget.innerText=input
    
    console.log(input);

    editFlag = false
    editTarget = null
    userInput.value = ''
}


function addToLocalStorage(id,input){

    const todo=JSON.parse(localStorage.getItem('todo')) || []

    
    todo.push([id,input])
    
    localStorage.setItem('todo',JSON.stringify(todo))

    
    
    
}

function editLocalStorage(editEl,input){



    id = editEl.getAttribute('id')

    console.log(id);

    ls = JSON.parse(localStorage.getItem('todo')) 

    if (ls) {
        for (const i in ls) {
            if(ls[i][0]==id){
                ls[i][1]=input
            }
            else{
                console.log("value not found");
                
            }
        }

        localStorage.setItem('todo',JSON.stringify(ls))
    }else{
        console.log("value not in local storage");
        
    }
    
    

}

function removeFromLocalStorage(id){

    

    const ls = JSON.parse(localStorage.getItem('todo'))||[]


    for (const i in ls) {
      if (ls[i][0] == id) {


        
        ls.splice(i,1);
        
      }


      
    }

    localStorage.setItem('todo',JSON.stringify(ls))



    
}


    

