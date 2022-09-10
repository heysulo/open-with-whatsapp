const BASE_HTML_PATH = 'public/html'
app.config(function($routeProvider) {
    $routeProvider
        .when("/",{
            controller:'HomePageController',
            templateUrl: BASE_HTML_PATH + '/pages/home/view.html',
            controllerAs : 'ctrlHome'
        })
});