var demo = angular.module('demo', [
            'ngSanitize',
            'angular-carousel-3d',


        ])
        .controller('AppController', AppController);

    AppController.$inject = ['$filter', '$log', '$scope', 'dotaService', 'abilitiesService', 'itemsService'];



    function AppController($filter, $log, $scope,  dotaService, abilitiesService, itemsService) {
        var vm = this;

        // SLIDES WITH CAPTIONS
        //===================================
        /*vm.slides = [];
        for (var i = 0; i < 5; i++) 
        {
            vm.slides[i] = {'src': 'images/photo3.jpg', caption: 'Alchemist '};
        }*/
        
        vm.slides = [
            {'src': 'images/heroes/abaddon_vert.jpg', caption: 'Abaddon'},
            {'src': 'images/heroes/alchemist_vert.jpg', caption: 'Alchemist'},
            {'src': 'images/heroes/ancient_apparition_vert.jpg', caption: 'Ancient Apparition'},
            {'src': 'images/heroes/anti-mage_vert.jpg', caption: 'Anti Mage'},
            {'src': 'images/heroes/axe_vert.jpg', caption: 'Axe'},
            {'src': 'images/heroes/bane_vert.jpg', caption: 'Bane'},
            {'src': 'images/heroes/batrider_vert.jpg', caption: 'Batrider'},
            {'src': 'images/heroes/beastmaster_vert.jpg', caption: 'Beastmaster'},
            {'src': 'images/heroes/bloodseeker_vert.jpg', caption: 'Bloodseeker'},
            {'src': 'images/heroes/bounty_hunter_vert.jpg', caption: 'Bounty Hunter'},
            {'src': 'images/heroes/brewmaster_vert.jpg', caption: 'Brewmaster'},
            {'src': 'images/heroes/bristleback_vert.jpg', caption: 'Bristleback'}, 
            {'src': 'images/heroes/broodmother_vert.jpg', caption: 'Broodmother'},
            {'src': 'images/heroes/Centaur_warrunner_vert.jpg', caption: 'Centaur Warrunner'},
            {'src': 'images/heroes/chen_vert.jpg', caption: 'Chen'},
            {'src': 'images/heroes/clinkz_vert.jpg', caption: 'Clinkz'},
            {'src': 'images/heroes/Clockwerk_vert.jpg', caption: 'Clockwerk'},
            {'src': 'images/heroes/crystal_maiden_vert.jpg', caption: 'Crystal Maiden'},
            {'src': 'images/heroes/dark_seer_vert.jpg', caption: 'Dark Seer'},
            {'src': 'images/heroes/dazzle_vert.jpg', caption: 'Dazzle'},
            {'src': 'images/heroes/death_prophet_vert.jpg', caption: 'Death Prophet'},
            {'src': 'images/heroes/disruptor_vert.jpg', caption: 'Disruptor'},
            {'src': 'images/heroes/doom_bringer_vert.jpg', caption: 'Doom Bringer'},
            {'src': 'images/heroes/Dragon_knight_vert.jpg', caption: 'Dragon Knight'},
            {'src': 'images/heroes/drow_ranger_vert.jpg', caption: 'Drow Ranger'},
            {'src': 'images/heroes/earth_spirit_vert.jpg', caption: 'Earth Spirit'},
            {'src': 'images/heroes/earthshaker_vert.jpg', caption: 'Earth Shaker'},
            {'src': 'images/heroes/elder_titan_vert.jpg', caption: 'Elder Titan'},
            {'src': 'images/heroes/ember_spirit_vert.jpg', caption: 'Ember Spirit'},
            {'src': 'images/heroes/enchantress_vert.jpg', caption: 'Enchantress'},
            {'src': 'images/heroes/enigma_vert.jpg', caption: 'Enigma'},
            {'src': 'images/heroes/Faceless_void_vert.jpg', caption: 'Faceless'},
            {'src': 'images/heroes/gyrocopter_vert.jpg', caption: 'Gyrocopter'},
            {'src': 'images/heroes/huskar_vert.jpg', caption: 'Huskar'},
            {'src': 'images/heroes/invoker_vert.jpg', caption: 'Invoker'},
            {'src': 'images/heroes/Io_vert.jpg', caption: 'Io'},
            {'src': 'images/heroes/jakiro_vert.jpg', caption: 'Jakiro'},
            {'src': 'images/heroes/keeper_of_the_light_vert.jpg', caption: 'Keeper of the Light'},
            {'src': 'images/heroes/kunkka_vert.jpg', caption: 'Kunkka'},
            {'src': 'images/heroes/legion_commander_vert.jpg', caption: 'Legion Commander'},
            {'src': 'images/heroes/leshrac_vert.jpg', caption: 'Leshrac'},
            {'src': 'images/heroes/lich_vert.jpg', caption: 'Lich'},
            {'src': 'images/heroes/lifestealer_vert.jpg', caption: 'Lifestealer'},
            {'src': 'images/heroes/legion_commander_vert.jpg', caption: 'Legion Commander'},
            {'src': 'images/heroes/leshrac_vert.jpg', caption: 'Leshrac'},
            {'src': 'images/heroes/lich_vert.jpg', caption: 'Lich'},
            {'src': 'images/heroes/Lifestealer_vert.jpg', caption: 'Lifestealer'},
            {'src': 'images/heroes/lina_vert.jpg', caption: 'Lina'},
            {'src': 'images/heroes/lion_vert.jpg', caption: 'Lion'},
            {'src': 'images/heroes/lone_druid_vert.jpg', caption: 'Lone Druid'},
            {'src': 'images/heroes/luna_vert.jpg', caption: 'Luna'},
            {'src': 'images/heroes/lycan_vert.jpg', caption: 'Lycan'},
            {'src': 'images/heroes/Magnus_vert.jpg', caption: 'Magnus'},
            {'src': 'images/heroes/medusa_vert.jpg', caption: 'Medusa'},
            {'src': 'images/heroes/meepo_vert.jpg', caption: 'Meepo'},
            {'src': 'images/heroes/mirana_vert.jpg', caption: 'Mirana'},
            {'src': 'images/heroes/morphling_vert.jpg', caption: 'Morphling'},
            {'src': 'images/heroes/naga_siren_vert.jpg', caption: 'Naga Siren'},
            {'src': 'images/heroes/Natures_Prophet_vert.jpg', caption: 'Natures Prophet'},
            {'src': 'images/heroes/Necrophos_vert.jpg', caption: 'Necrophos'},
            {'src': 'images/heroes/night_stalker_vert.jpg', caption: 'Night Stalker'},
            {'src': 'images/heroes/nyx_assassin_vert.jpg', caption: 'Nyx Assassin'},
            {'src': 'images/heroes/ogre_magi_vert.jpg', caption: 'Ogre Magi'},
            {'src': 'images/heroes/omniknight_vert.jpg', caption: 'Omniknight'},
            {'src': 'images/heroes/Outworld_Devourer_vert.jpg', caption: 'Outworld Devourer'},
            {'src': 'images/heroes/phantom_assassin_vert.jpg', caption: 'phantom assassin'},
            {'src': 'images/heroes/phoenix_vert.jpg', caption: 'pheonix'},
            {'src': 'images/heroes/puck_vert.jpg', caption: 'Puck'},
            {'src': 'images/heroes/pudge_vert.jpg', caption: 'punge'},
            {'src': 'images/heroes/pugna_vert.jpg', caption: 'pugna'},
            {'src': 'images/heroes/Queen_of_Pain_vert.jpg', caption: 'Queen of Pain'},
            {'src': 'images/heroes/razor_vert.jpg', caption: 'razor'},
            {'src': 'images/heroes/riki_vert.jpg', caption: 'Riki'},
            {'src': 'images/heroes/rubick_vert.jpg', caption: 'Rubick'},
            {'src': 'images/heroes/sand_king_vert.jpg', caption: 'Sand King'},
            {'src': 'images/heroes/shadow_demon_vert.jpg', caption: 'Shadow Demon'},
            {'src': 'images/heroes/Shadow_Fiend_vert.jpg', caption: 'Shadow Fiend'},
            {'src': 'images/heroes/shadow_shaman_vert.jpg', caption: 'Shadow Shaman'},
            {'src': 'images/heroes/silencer_vert.jpg', caption: 'Silencer'},
            {'src': 'images/heroes/skywrath_mage_vert.jpg', caption: 'Skywrath'},
            {'src': 'images/heroes/slardar_vert.jpg', caption: 'Slardar'},
            {'src': 'images/heroes/slark_vert.jpg', caption: 'Slark'},
            {'src': 'images/heroes/sniper_vert.jpg', caption: 'Sniper'},
            {'src': 'images/heroes/spectre_vert.jpg', caption: 'Spectre'},
            {'src': 'images/heroes/spirit_breaker_vert.jpg', caption: 'Spirit Breaker'},
            {'src': 'images/heroes/storm_spirit_vert.jpg', caption: 'Storm Spirit'},
            {'src': 'images/heroes/sven_vert.jpg', caption: 'Sven'},
            {'src': 'images/heroes/templar_assassin_vert.jpg', caption: 'Templar Assassin'},
            {'src': 'images/heroes/terrorblade_vert.jpg', caption: 'Terrorblade'},
            {'src': 'images/heroes/tidehunter_vert.jpg', caption: 'Tidehunter'},
            {'src': 'images/heroes/Timbersaw_vert.jpg', caption: 'Timbersaw'},
            {'src': 'images/heroes/tinker_vert.jpg', caption: 'Tinker'},
            {'src': 'images/heroes/tiny_vert.jpg', caption: 'Tiny'},
            {'src': 'images/heroes/treant_protector_vert.jpg', caption: 'Treant Protector'},
            {'src': 'images/heroes/troll_warlord_vert.jpg', caption: 'Troll Warlord'},
            {'src': 'images/heroes/tusk_vert.jpg', caption: 'Bane'},
            {'src': 'images/heroes/undying_vert.jpg', caption: 'Undying'},
            {'src': 'images/heroes/ursa_vert.jpg', caption: 'Ursa'},
            {'src': 'images/heroes/Vengeful_spirit_vert.jpg', caption: 'Vengeful Spirit'},
            {'src': 'images/heroes/venomancer_vert.jpg', caption: 'Venomancer'},
            {'src': 'images/heroes/viper_vert.jpg', caption: 'Viper'},
            {'src': 'images/heroes/visage_vert.jpg', caption: 'Visage'},
            {'src': 'images/heroes/warlock_vert.jpg', caption: 'Warlock'},
            {'src': 'images/heroes/weaver_vert.jpg', caption: 'Weaver'},
            {'src': 'images/heroes/windranger_vert.jpg', caption: 'Windrunner'},
            {'src': 'images/heroes/witch_doctor_vert.jpg', caption: 'Witch Doctor'},
            {'src': 'images/heroes/Wraith_king_vert.jpg', caption: 'Wraith King'},
            {'src': 'images/heroes/zeus_vert.jpg', caption: 'Zeus'},
        ];
        vm.filteredSlides = vm.slides;

        vm.options = {
            sourceProp: 'src',
            visible: 5,
            perspective: 35,
            startSlide: 0,
            border: 0,
            dir: 'rtl',
            width: 360,
            height: 270,
            space: 220,
            autoRotationSpeed: 0,
            loop: true,
            clicking: true
        };


        vm.options2 = {
            visible: 3,
            perspective: 35,
            startSlide: 2,
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
        vm.filterSlides = filterSlides;

        function filterSlides(){
            vm.filteredSlides = $filter('filter')(vm.slides, vm.filterQuery);
            if($filter('filter')(vm.slides, vm.filterQuery) == 0)
            vm.filteredSlides = [{'src': 'images/heroes/error.jpg', caption: 'error'}];
          
        }

        function lastSlide(index) {
           // $log.log('Last Slide Selected callback triggered. \n == Slide index is: ' + index + ' ==');
        }

        function beforeChange(index) {
           // $log.log('Before Slide Change callback triggered. \n == Slide index is: ' + index + ' ==');
        }

        function selectedClick(index) {
            $log.log('Selected Slide Clicked callback triggered. \n == Slide index is: ' + index + ' ==');
           // document.write(index);
          // console.log($scope.heroes);
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

        //Heroes
        var promise = dotaService.getHeroes();
        promise.then(function (data)
        {
            $scope.heroes = data.data;
            console.log($scope)
        })

        //Abilites
        var promise2 = abilitiesService.getAbilities();
        promise2.then(function (data)
        {
            $scope.abilities = data.data;
            console.log($scope)
        })
        //items
        var promise3 = itemsService.getItems();
        promise3.then(function (data)
        {
            $scope.items = data.data;
            console.log($scope)
        });
    }


demo.service("abilitiesService", function ($http, $q)
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
});

demo.service("itemsService", function ($http, $q)
{
    var deferred3 = $q.defer();
    $http.get('json/items.json').then(function (data)
    {
        deferred3.resolve(data);
    });

    this.getItems = function ()
    {
        return deferred3.promise;
    }
});


demo.service("dotaService", function ($http, $q)
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
});



