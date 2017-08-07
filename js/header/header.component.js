angular.module("header").component("headerComponent",{

       templateUrl:"templates/header.html",
       controller:function($scope){
           $scope.headertext="Header Text ";
       }

});