angular.module('ToDoApp').service('toDoService', function(){

    this.todos = [
        {
            text: "Test1",
            isSelected: false
        },
        {
            text: "Test2",
            isSelected: false
        },
        {
            text: "Test3",
            isSelected: false
        }
    ];

    this.getTodos = function() {
        return this.todos;
    };

    this.addTodo = function(todoText) {
        var todo = {
            text: todoText,
            isSelected: false
        }
        this.todos.push(todo);
    };

    this.deleteTodo = function(todo) {
        var index = this.todos.indexOf(todo);
        if(index > -1) {
            this.todos.splice(index, 1);
        }
    }

});