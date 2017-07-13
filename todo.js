var todos=[];

var input = prompt("What would you like to do?");



while (input !== "quit"){
  if(input == ="list"){
    console.log(todos);
  }else if(input === "new"){
    //ask for new todos
     var newTodo = prompt("Enter new todos: ");
    //add todos to the array
    todos.push(newTodo);
  }

  input = prompt("What would you like to do?");
}
console.log("Okay, now you Quit the APP. ");
