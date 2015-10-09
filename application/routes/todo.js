application.config(['$routeProvider',
    function($routeProvider)
    {
        $routeProvider
            .when('/todo', {
                controller: 'TodoController',
                templateUrl: 'todo/todo.html',
                resolve: {
                    isGuest: ['Auth', function(Auth)
                    {
                        return Auth.isGuest();
                    }],
                },
            });
    }]);
