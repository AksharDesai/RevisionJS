const js local scope
js global scope

editbtn.addEventListener('click',editBtnn)

function deleteBtnn(e){
const todo = e.target.parentElement

        const id = todo.getAttribute('id')

        ul.removeChild(todo)

        removeFromLocalStorage(id)

}

no need to pass the e
make the event listener functions they are necessary dont define inside

what is JSON.parse?,JSON.stringify?

complete the ui first and then add to database maybe it is better for UX in my opinion


nextsibling / previous sibling


set and get attribute in html sometimes helpful


li.queryselector


how to use git ignore

and use

git rm -r --cached directory_name


to remove the already added file in github 