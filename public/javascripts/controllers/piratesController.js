var app = angular.module('pirates')

app.controller('PiratesController', function ($scope, PiratesService) {
  PiratesService.all().then(function (res) {
    console.log(res.data);
  });
})
