'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('sysfest.services', ['ngResource']).
	factory('Host',function($resource) {
		return $resource('/api/host/:host_id',{}, {});
	});
