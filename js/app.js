(function () {
    'use strict';

    angular.module('ProductsApp', [])
        .controller('ProductsController', ProductsController);

    ProductsController.$inject = ['$scope'];

    function ProductsController($scope) {
        $scope.text = "";
        $scope.listOfProducts = "";

        $scope.showAnswer = function () {
                   let products = $scope.listOfProducts.split(',');
            for (let i = products.length - 1; i >= 0; i--) {
                if (products[i].trim() === "") products.splice(i, 1);
            }
            if (products.length === 0) {
                 $scope.text = "Будь ласка, уведіть дані!";
            } else if (products.length <= 3) {
                 $scope.text = "На здоров'я!";
            } else {
                 $scope.text = "Це забагато!";
            }
        }
    }
})();