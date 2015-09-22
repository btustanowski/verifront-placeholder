vf.config(["$stateProvider", "$urlRouterProvider", "$locationProvider",
    function($stateProvider, $urlRouterProvider, $locationProvider) {
        // Default route
        $urlRouterProvider.otherwise("/");

        // Enable no-hash routing
        $locationProvider.html5Mode(true);

        // Define states
        $stateProvider
            .state("index", {
                url: "/",
                templateUrl: "template/home.html",
            })
            .state("auth", {
                url: "/signin",
                templateUrl: "template/auth.html",
                controller: "AuthController",
                controllerAs: "vm",
            });
    },
]);