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

    //load picture
    vm.picture = 'assets/images/users/user2.jpg';

    //dati da pubblicare
    vm.userFullName = 'Maria Bianchi';
    vm.workRole = 'Metricator';

    vm.firstname = 'Maria';
    vm.lastname = 'Bianchi';
    vm.username = 'maria_bianchi';
    vm.password = 'password';
    vm.password_r = 'password';
    vm.email = 'mariabianchi@gmail.com';
    vm.phone = '+39 38376 6284';
    vm.role = 'Metricator';
    vm.birthday = '01/01/1990';
    vm.gender = 'Female';
    vm.url = 'www.mariabianchi.it';
    vm.biography = 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    vm.online = 'false';
    vm.gender = 'FEMALE';

    vm.num_tasks_completed = 20;
    vm.num_tasks_active = 10;
    vm.total_task_for_user = vm.num_tasks_completed + vm.num_tasks_completed;

    vm.num_total_tasks_active_on_system = 50;
    vm.percentage_tasks_completed = (vm.num_tasks_completed/vm.num_total_tasks_for_user);
    vm.percentage_tasks_active = (vm.num_tasks_active/vm.num_total_tasks_for_user);

    //list of projects for view user project
    vm.projects = [
        {name: "ISSR Project1", description:"Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. ",status: "active",progress: 30},
        {name: "ISSR Project2", description:"Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. ",status: "active",progress: 65}
    ];

    //User completed tasks Vs Total User Tasks
    vm.completed_tasks_vs_active_tasks = [
        {label: "% User's Completed Tasks", value: 10},
        {label: "% User's Active Tasks", value: 20}
    ];

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
