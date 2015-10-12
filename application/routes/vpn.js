application.config(['$routeProvider',
    function($routeProvider)
    {
        $routeProvider
            .when('/vpn', {
                controller: 'VpnController',
                templateUrl: 'vpn/vpn.html',
                resolve: {
                    isGuest: ['Auth', function(Auth)
                    {
                        return Auth.isGuest();
                    }],
                },
            });
    }]);
