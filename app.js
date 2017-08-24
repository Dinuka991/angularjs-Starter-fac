/**
 * Created by isuru on 8/3/17.
 */
//controlling the routes of app
var app = angular.module("myApp",["ngRoute","appController" ,"sampleApp" ])

    .config(function ($routeProvider,$locationProvider ) {

        $locationProvider.hashPrefix('');
        $routeProvider

            .when("/",{
                templateUrl:"./src/pages/page1.html",
                controller : "myCtrl"
            })
            .when("/add",{
                templateUrl:"./src/pages/page2.html"
            })



    })