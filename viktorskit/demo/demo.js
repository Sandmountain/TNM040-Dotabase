(function () {
    angular
        .module('demo', [
            'ngSanitize',
            'angular-carousel-3d',


        ])
        .controller('AppController', AppController);

    AppController.$inject = ['$scope', '$log'];



    function AppController($scope, $log) {
        var vm = this;

        // SLIDES WITH CAPTIONS
        //===================================
        vm.slides = [
            {'src': 'images/photo2.jpg', caption: 'Abaddon'},
            {'src': 'images/photo3.jpg', caption: 'Alchemist '},
            {'src': 'images/photo4.jpg', caption: 'AA'},
            {'src': 'images/photo5.jpg', caption: 'Anti-mage'},
            {'src': 'images/photo6.jpg', caption: 'Axe'}
        ];

        vm.options = {
            sourceProp: 'src',
            visible: 5,
            perspective: 35,
            startSlide: 0,
            border: 0,
            dir: 'ltr',
            width: 360,
            height: 270,
            space: 220,
            autoRotationSpeed: 0,
            loop: false,
        };


        // ANY HTML
        //===================================
        vm.slides2 = [
            {'bg': '#2a6496', caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.'},
            {'bg': '#000000', caption: 'Lorem ipsum dolor sit amet '},
            {'bg': '#ffcc41', caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '},
            {'bg': '#445fac', caption: 'Lorem ipsum dolor sit amet,  Enim, maxime.'},
            {'bg': '#442BF3', caption: 'Lorem ipsum dolor sit amet,  Maxime.'}
        ];

        vm.options2 = {
            visible: 3,
            perspective: 35,
            startSlide: 0,
            border: 0,
            dir: 'ltr',
            width: 360,
            height: 270,
            space: 220,
            loop: false,
            controls: true
        };

        vm.removeSlide = removeSlide;
        vm.addSlide = addSlide;
        vm.selectedClick = selectedClick;
        vm.slideChanged = slideChanged;
        vm.beforeChange = beforeChange;
        vm.lastSlide = lastSlide;


        function lastSlide(index) {
           // $log.log('Last Slide Selected callback triggered. \n == Slide index is: ' + index + ' ==');
        }

        function beforeChange(index) {
           // $log.log('Before Slide Change callback triggered. \n == Slide index is: ' + index + ' ==');
        }

        function selectedClick(index) {
            //$log.log('Selected Slide Clicked callback triggered. \n == Slide index is: ' + index + ' ==');
        }

        function slideChanged(index) {
           // $log.log('Slide Changed callback triggered. \n == Slide index is: ' + index + ' ==');
        }


        function addSlide(slide, array) {
            array.push(slide);
            vm.slide2 = {};
        }

        function removeSlide(index, array) {
            array.splice(array.indexOf(array[index]), 1);
        }
    }


})();


var app2 = angular.module('dotabaseApp2', []);

app2.service("abilitiesService", function ($http, $q)
{
    var deferred2 = $q.defer();
    $http.get('json/abilities.json').then(function (data)
    {
        deferred2.resolve(data);
    });

    this.getAbilities = function ()
    {
        return deferred2.promise;
    }
})

.controller("abilitiesCtrl", function ($scope, abilitiesService)
{
    var promise = abilitiesService.getAbilities();
    promise.then(function (data)
    {
        $scope.abilities = data.data;
        console.log($scope)
    });
});
angular.bootstrap(document.getElementById("App2"), ['dotabaseApp2']);


var app3 = angular.module('dotabaseApp3', []);

app3.service("dotaService", function ($http, $q)
{
    var deferred = $q.defer();
    $http.get('json/heroes.json').then(function (data)
    {
        deferred.resolve(data);
    });

    this.getHeroes = function ()
    {
        return deferred.promise;
    }
})

.controller("heroesCtrl", function ($scope, dotaService)
{
    var promise = dotaService.getHeroes();
    promise.then(function (data)
    {
        $scope.heroes = data.data;
        console.log($scope)
    });
});
angular.bootstrap(document.getElementById("App3"), ['dotabaseApp3']);