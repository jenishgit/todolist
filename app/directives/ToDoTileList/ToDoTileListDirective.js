angular.module('ToDoApp').directive('todoTileList', function(){
    return {
        templateUrl: 'directives/ToDoTileList/ToDoTileList.html',
        scope: {
            todoList: '='
        }
    }
});