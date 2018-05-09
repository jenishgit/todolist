angular.module('ToDoApp').directive('todoTile', function(){
    return {
        templateUrl: 'directives/ToDoTile/ToDoTile.html',
        scope: {
            todo: '='
        }
    }
});