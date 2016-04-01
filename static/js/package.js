/**
 * Created by irunika on 4/1/16.
 */

app = angular.module('packages', []);

app.controller('populate_data', function($http, $scope){

    var package = $('body').attr('package');
    var data_url = '../static/json/'+package+'.json';

    $http({
        method:'GET',
        url:data_url
    }).then(
        function successCallback(response){
            $scope.packages = response.data;
        },

        function errorCallback(response){

        }
    )
});