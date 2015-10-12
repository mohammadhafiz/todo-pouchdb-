application.controller('TodoMenuController', ['$location', '$scope',
    function($location, $scope)
    {
        $scope.todo = function()
        {
            $location.path('/todo');
        };
        $scope.vpn = function()
        {
            $location.path('/vpn');
        };
    }]);
