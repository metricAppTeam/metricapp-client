(function() { 'use strict';

/************************************************************************************
* @ngdoc controller
* @name ProfileController
* @module metricapp
* @requires $scope
* @requires $location
* @requires ProfileService
*
* @description
* Manages the profile visualization and editing.
* Realizes the control layer for `profile.view`.
************************************************************************************/

angular.module('metricapp')

.controller('ProfileController', ProfileController);

ProfileController.$inject = ['$scope', '$location', 'ProfileService','FlashService', 'GENDERS'];

function ProfileController($scope, $location, ProfileService, FlashService, GENDERS) 
{

    var vm = this;

    //Section.show
    vm.show=1;

    vm.GENDERS = GENDERS;

    vm.config = {
        title: 'Products',
        tooltips: true,
        labels: false,
        mouseover: function() {},
        mouseout: function() {},
        click: function() {},
        legend: {
          display: true,
          //could be 'left, right'
          position: 'right'
        }
      };

    vm.data = {
        series: ['Sales', 'Income', 'Expense', 'Laptops', 'Keyboards'],
        data: [{
          x: "Laptops",
          y: [100, 500, 0],
          tooltip: "this is tooltip"
        }, {
          x: "Desktops",
          y: [300, 100, 100]
        }, {
          x: "Mobiles",
          y: [351]
        }, {
          x: "Tablets",
          y: [54, 0, 879]
        }]
      };

    //load picture
    vm.picture = 'assets/images/users/user2.jpg';

    //dati da pubblicare
    vm.userFullName = 'Maria Bianchi';
    vm.workRole = 'Metricator';

    vm.firstname = 'Maria';
    vm.lastname = 'Bianchi';
    vm.email = 'mariabianchi@gmail.com';
    vm.phone = '+39 38376 6284';
    vm.role = 'Metricator';
    vm.birthday = '01/01/1990';
    vm.gender = 'Female';
    vm.url = 'www.mariabianchi.it';
    vm.biography = 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

    /********************************************************************************
    * @ngdoc method
    * @name editing
    * @description
    * Editing profile data
    ********************************************************************************/
    function editProfile() 
    {
        var profile = {
            firstname: vm.firstname,
            lastname: vm.lastname,
            gender: vm.gender,
            birthday: vm.birthday,
            url: vm.url,
            phone: vm.phone,
            biography: vm.biography,
            email: vm.email,
            picture: vm.picture
        };

        //manca il servizio di storage delle modifiche ai dati del profilo
    }

    /********************************************************************************
    * @ngdoc method
    * @name editing
    * @description
    * Editing Credentials data
    ********************************************************************************/
    function editCredentials() 
    {

        var user = {
            username: vm.username,
            password: vm.password,
        };

        //manca il servizio di storage delle modifiche alle credenziali
    }

    /********************************************************************************
    * @ngdoc method
    * @name foo
    * @description
    * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    * eiusmod tempor incididunt ut labore et dolore magna aliqua.
    * @param {type} a Insert here param description.
    * @param {type} b Insert here param description.
    * @param {type} c Insert here param description.
    * @returns {type} Insert here return description.
    ********************************************************************************/
    function foo(a, b, c) {

    }

    /********************************************************************************
    * @ngdoc method
    * @name _foo
    * @description
    * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    * eiusmod tempor incididunt ut labore et dolore magna aliqua.
    * @param {type} a Insert here param description.
    * @param {type} b Insert here param description.
    * @param {type} c Insert here param description.
    * @return {type} Insert here return description.
    ********************************************************************************/
    function _foo(a, b, c) {

    }
}

})();
