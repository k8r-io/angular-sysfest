'use strict';


// Declare app level module which depends on filters, and services
angular.module('sysfest', ['sysfest.filters', 'sysfest.services', 'sysfest.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/hostlist', {templateUrl: 'partials/host_list.html', controller: HostListCtrl});
    $routeProvider.when('/host/:host_id', {templateUrl: 'partials/host_detail.html', controller: HostDetailCtrl});
    $routeProvider.when('/host/:host_id/edit', {templateUrl: 'partials/host_edit.html', controller: HostEditCtrl});
    $routeProvider.otherwise({redirectTo: '/hostlist'});
  }]);
