'use strict';

/* Controllers */


function HostListCtrl($scope,Host) {
	var payload = Host.query(function() {
		console.log(payload);
		for(var i = 0;i<payload.hosts.length;i++) {
			for(var j=0; j<payload.hosts[i]["homes"].length; j++) {
				console.log(payload.hosts[i]["homes"][j]);
				if(payload.hosts[i]["homes"][j]["name"]=="eth0") {
					payload.hosts[i]["primary_ip"]=payload.hosts[i]["homes"][j]["ip"];
				}
			}
		}
		$scope.hosts = payload.hosts;
		$scope.status = payload.ok
	});
}
HostListCtrl.$inject = ['$scope','Host'];


function HostDetailCtrl($scope,$routeParams,Host) {
	var payload = Host.get({"hostname":$routeParams.hostname},function() {
		$scope.host = payload.host;
		$scope.status = payload.ok;
	});
}
