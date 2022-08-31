//Legg til funksjonen
function addNewItem(list, itemText) {
    done.style.cssText = "opacity: 0;";
        var listItem = document.createElement("p");
        //Flytter objektet fra to-do's til done.
        listItem.onclick = moveMe;
        listItem.innerText = itemText;
        list.appendChild(listItem); 
    }
        
    //Input
    var input = document.getElementById("input");
        input.focus();
        
    var newBtn = document.getElementById("btn");

    //onclick funksjonen
    newBtn.onclick = function() {
        var itemText = input.value;
                
        if (!itemText || itemText == "" || itemText == " ") {
            //hvis ikke, OR tom string, OR tom string med whitepsace, return false
            return false;
        }  
            addNewItem(document.getElementById("todo"), itemText);
            //"Clearer" feltet etter man har lagt til en task
            input.value = "";
            input.select();
    }
    
    //moveMe-metoden som flytter fra to'do til done.
    function moveMe() {
        if (this.parentElement.id === "antallTodo") {
        todo.appendChild(this);
        } else {
            done.appendChild(this);
            this.style.cssText = "background-color: green; opacity: 1; margin-left: 200px; font-size: 26px; font-weight: bold;";
            done.style.cssText = "opacity: 1;";
        }
    }