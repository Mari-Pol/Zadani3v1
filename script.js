onload="handleAddTask()";
   const deleteBtns = document.getElementsByClassName("delete");
        for(let i = 0; i < deleteBtns.length; i++) {
            const deleteBtn = deleteBtns[i];
            deleteBtn.addEventListener("click", function(ev){
                    const liElement = ev.target.parentElement;
                    liElement.parentElement.removeChild(liElement);
                    });
            }
                            
    var list = document.getElementById("myList");
    function handleAddTask(){
        if (!value) {
            alert("Please fill out toDo task");
            return;
        }
    var value = document.getElementById("ToDoTask").value;
    var li = document.createElement("LI");
 
    var deleteSpan = document.createElement('span')
    deleteSpan.innerHTML = "x";
    deleteSpan.classList.add("delete");
    deleteSpan.addEventListener("click", function(ev){
        const liElement = ev.target.parentElement;
        liElement.parentElement.removeChild(liElement);
        });

        var textNode = document.createTextNode(value);
      
        li.appendChild(deleteSpan);
        li.appendChild(textNode);
        list.appendChild(li);
        }

    list.addEventListener("click", function(ev){
        if (ev.target.tagName === "LI") {
            ev.target.classList.toggle("checked");
            }
        }, false);