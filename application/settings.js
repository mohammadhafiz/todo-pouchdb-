application.factory('Settings', ['$window', 'h', 'secret',
    function($window, h, secret)
    {
        var settings = {};

        settings.host           = $window.decrypt(h.ht, secret);

        settings.scopes = [

        ];

        return settings;
    }]);
