// inject ngRoute for all our routing needs
angular.module('routerRoutes', ['ngRoute'])

// configure our routes
.config(function($routeProvider, $locationProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'views/pages/work.html'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'views/pages/about.html'
        })

        // route for the photography page
        .when('/photography', {
            templateUrl : 'views/pages/photography.html'
        });
    

    $locationProvider.html5Mode(true);
});