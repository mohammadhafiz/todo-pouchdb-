application.controller('TodoController', ['$interval', '$mdSidenav', '$scope',
    function($interval, $mdSidenav, $scope)
    {
        $scope.theme = 'teal';

        $scope.close = function()
        {
            $mdSidenav('menu').close();
        };

        $scope.menu = function()
        {
            $mdSidenav('menu').open();
        };

        $scope.query = {
            username: '',
        };
        
        $scope.vpn = function()
        {
            $location.path('/vpn');
        };

        $scope.reset = function()
        {
            $scope.query.$ = '';
        };
        
        var db = new PouchDB('todos');
        
        var remoteCouch = false;
        db.changes({
          since: 'now',
          live: true
        }).on('change', showTodos);
        
        function addTodo(text) {
          var todo = {
            _id: new Date().toISOString(),
            username: text,
            password: text,
            completed: false
          };
          db.put(todo, function callback(err, result) {
            if (!err) {
              console.log('Successfully posted a todo!');
            }
          });
        }
        
        function showTodos() {
          db.allDocs({include_docs: true, descending: true}, function(err, doc) {
            redrawTodosUI(doc.rows);
          });
        }
        
        function checkboxChanged(todo, event) {
          todo.completed = event.target.checked;
          db.put(todo);
        }
}]);