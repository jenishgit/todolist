'use strict';

angular.module('ToDoApp').controller("ToDoController",  function(toDoService){
    this.name = "Jenish Rabadiya";
    this.task = "";
    this.todoList = toDoService.getTodos();

    this.addToDo = function(){
        if(this.task && this.task.trim()) {
            toDoService.addTodo(this.task);
            this.task = "";
        }
    }



    this.removeToDos = function(){
        var todos = [];
        for(var i = 0; i < this.todoList.length; i++) {
            if(this.todoList[i].isSelected) {
                todos.push(this.todoList[i]);
            }
        }

        todos.forEach(function(todo) {
            toDoService.deleteTodo(todo);
        });
    }

    this.removeAllTodos = function(){
        for(var i = this.todoList.length - 1; i >= 0; i--){
            toDoService.deleteTodo(this.todoList[i]);
        }
    }

    this.selectAll = function() {
        for(var i = this.todoList.length - 1; i >= 0; i--){
            this.todoList[i].isSelected = true;
        }
    }
})