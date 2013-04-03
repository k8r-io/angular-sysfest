'use strict';


// Declare app level module which depends on filters, and services
angular.module('sysfest', ['sysfest.filters', 'sysfest.services', 'sysfest.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/hostlist', {templateUrl: 'partials/host_list.html', controller: HostListCtrl});
    $routeProvider.when('/host/:hostname', {templateUrl: 'partials/host_detail.html', controller: HostDetailCtrl});
    $routeProvider.otherwise({redirectTo: '/hostlist'});
  }]);
