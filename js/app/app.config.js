angular.module("main").config(["$routeProvider","$locationProvider",
	    function($routeProvider,$locationProvider)
	    {  $locationProvider.html5Mode({
   	         enabled:true
          })  /**/
   
   $routeProvider.when("/",{
           template:"<homecomponent></homecomponent>"
               }).when("/home",{
           template:"<homecomponent></homecomponent>"
               }).when("/about",{
           template:"<aboutcomponent></aboutcomponent>"
               }).otherwise({ 
           template:"Not Found!"   
               })
}]);