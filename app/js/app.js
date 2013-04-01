'use strict';


// Declare app level module which depends on filters, and services
angular.module('sysfest', ['sysfest.filters', 'sysfest.services', 'sysfest.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/hosts', {templateUrl: 'partials/host_list.html', controller: HostListCtrl});
    $routeProvider.otherwise({redirectTo: '/hosts'});
  }]);
