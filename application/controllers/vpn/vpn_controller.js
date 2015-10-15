application.controller('VpnController', ['$location', '$interval', '$mdSidenav', '$scope',
    function($location, $interval, $mdSidenav, $scope)
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

        $scope.reset = function()
        {
            $scope.query.$ = '';
        };
        
        function addTodo(text) {
          var todo = {
            _id: new Date().toISOString(),
            title: text,
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
        
        var imagePath = 'img/list/60.jpeg';
            $scope.messages = [
              {
                face : imagePath,
                username: 'hafiz91',
                no: '0123456789',
                times: '8.23 A.M',
                start_date: '09 October 2015',
                end_date: '14 October 2015',
                usage: " 3.6 GB"
              },
              {
                face : imagePath,
                username: 'liya',
                no: '0123456789',
                times: '8.23 A.M',
                start_date: '09 October 2015',
                end_date: '14 October 2015',
                usage: " 3.7 GB"
              },
              {
                face : imagePath,
                username: 'boyoku',
                no: '0123456789',
                times: '8.23 A.M',
                start_date: '09 October 2015',
                end_date: '14 October 2015',
                usage: " 7.6 GB"
              },
              {
                face : imagePath,
                username: 'liyan',
                no: '0123456789',
                times: '8.23 A.M',
                start_date: '09 October 2015',
                end_date: '14 October 2015',
                usage: " 2.7 GB"
              },
              {
                face : imagePath,
                username: 'erumburger',
                no: '0123456789',
                times: '8.23 A.M',
                start_date: '09 October 2015',
                end_date: '14 October 2015',
                usage: " 6.1 GB"
              },
              {
                face : imagePath,
                username: 'limin',
                no: '0123456789',
                times: '8.23 A.M',
                start_date: '09 October 2015',
                end_date: '14 October 2015',
                usage: " 7.5 GB"
              },
              {
                face : imagePath,
                username: 'bapasapar',
                no: '0123456789',
                times: '8.23 A.M',
                start_date: '09 October 2015',
                end_date: '14 October 2015',
                usage: " 800 MB"
              },
              {
                face : imagePath,
                username: 'azmie',
                no: '0123456789',
                times: '8.23 A.M',
                start_date: '09 October 2015',
                end_date: '14 October 2015',
                usage: " 900 MB"
              },
              {
                face : imagePath,
                username: 'maznah',
                no: '0123456789',
                times: '8.23 A.M',
                start_date: '09 October 2015',
                end_date: '14 October 2015',
                usage: " 3.8 GB"
              },
              {
                face : imagePath,
                username: 'nurjianah',
                no: '0123456789',
                times: '8.23 A.M',
                start_date: '09 October 2015',
                end_date: '14 October 2015',
                usage: " 2.9 GB"
              },
              {
                face : imagePath,
                username: 'maxsam',
                no: '0123456789',
                times: '8.23 A.M',
                start_date: '10 October 2015',
                end_date: '15 October 2015',
                usage: " 3.9 GB"
              },
              {
                face : imagePath,
                username: 'ayub',
                no: '0123456789',
                times: '8.23 A.M',
                start_date: '10 October 2015',
                end_date: '15 October 2015',
                usage: " 4.1 GB"
              },
              {
                face : imagePath,
                username: 'uncle',
                no: '0123456789',
                times: '8.23 A.M',
                start_date: '10 October 2015',
                end_date: '15 October 2015',
                usage: " 700 MB"
              },
              {
                face : imagePath,
                username: 'wahab',
                no: '0123456789',
                times: '8.23 A.M',
                start_date: '10 October 2015',
                end_date: '15 October 2015',
                usage: " 3.5 GB"
              },
              {
                face : imagePath,
                username: 'alan',
                no: '0123456789',
                times: '8.23 A.M',
                start_date: '10 October 2015',
                end_date: '15 October 2015',
                usage: " 2.8 GB"
              },
              {
                face : imagePath,
                username: 'kadir',
                no: '0123456789',
                times: '8.23 A.M',
                start_date: '10 October 2015',
                end_date: '15 October 2015',
                usage: " 5.7 GB"
              },
              {
                face : imagePath,
                username: 'rayzal',
                no: '0123456789',
                times: '8.23 A.M',
                start_date: '10 October 2015',
                end_date: '15 October 2015',
                usage: " 4.7 GB"
              },
              {
                face : imagePath,
                username: 'wahab',
                no: '0123456789',
                times: '8.23 A.M',
                start_date: '10 October 2015',
                end_date: '15 October 2015',
                usage: " amie GB"
              },
              {
                face : imagePath,
                username: 'ayiem',
                no: '0123456789',
                times: '8.23 A.M',
                start_date: '12 October 2015',
                end_date: '17 October 2015',
                usage: " 500 MB"
              },
              {
                face : imagePath,
                username: 'adipusher',
                no: '0123456789',
                times: '8.23 A.M',
                start_date: '12 October 2015',
                end_date: '17 October 2015',
                usage: " 2.4 GB"
              },
              {
                face : imagePath,
                username: 'adythrasher',
                no: '0123456789',
                times: '8.23 A.M',
                start_date: '13 October 2015',
                end_date: '18 October 2015',
                usage: " 0 MB"
              },
              {
                face : imagePath,
                username: 'PoulJoshua',
                no: '01131502845',
                times: '8.40 A.M',
                start_date: '13 October 2015',
                end_date: '18 October 2015',
                usage: " 0 MB"
              },
              {
                face : imagePath,
                username: 'mohdafiq',
                no: '01131502845',
                times: '8.50 A.M',
                start_date: '13 October 2015',
                end_date: '18 October 2015',
                usage: " 0 MB"
              },
              {
                face : imagePath,
                username: '0168257662',
                no: '0168257662',
                times: '8.50 A.M',
                start_date: '13 October 2015',
                end_date: '18 October 2015',
                usage: " 0 MB"
              },
              {
                face : imagePath,
                username: '0168201979',
                no: '0168201979',
                times: '8.50 A.M',
                start_date: '14 October 2015',
                end_date: '19 October 2015',
                usage: " 0 MB"
              },
              {
                face : imagePath,
                username: '0168455248',
                no: '0168455248',
                times: '8.50 A.M',
                start_date: '14 October 2015',
                end_date: '19 October 2015',
                usage: " 0 MB"
              },
            ];
            
}]);