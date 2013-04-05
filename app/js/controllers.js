'use strict';

/* Controllers */


function HostListCtrl($scope,Host) {
	$scope.hosts = Host.query(function() {
		for(var i = 0;i<$scope.hosts.length;i++) {
			for(var j=0; j<$scope.hosts[i]["homes"].length; j++) {
				if($scope.hosts[i]["homes"][j]["name"]=="eth0") {
					$scope.hosts[i]["primary_ip"]=$scope.hosts[i]["homes"][j]["ip"];
				}
			}
		}
	});

	$scope.delete = function(host) {
		Host.delete({'host_id':host["_id"]})
	}

}
HostListCtrl.$inject = ['$scope','Host'];


function HostDetailCtrl($scope,$routeParams,Host) {
	$scope.host = Host.get({"host_id":$routeParams.host_id});
}

function HostEditCtrl($scope,$routeParams,Host) {
	$scope.host = Host.get({"host_id":$routeParams.host_id});

	$scope.addHostname = function(home) {
		home.hostnames.push({"val":""});
	}
	$scope.addHome = function(homes) {
		homes.push({"name":"","ip":"","hostnames":[{"val":""}]});
	}
	$scope.addTag = function() {
		$scope.host.tags.push($scope.newTag);
	}
	$scope.update = function() {
		$scope.host.$save();
		console.log($scope.host)
	}

}
