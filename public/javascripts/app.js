'use strict';
angular.module('confusionApp', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: '/',
        views: {
          'header': {
            templateUrl: '../header.html'
          },
          'content': {
            templateUrl: '../home.html',
            controller: 'IndexController'
          },
          'footer': {
            templateUrl: '../footer.html'
          }
        }
      })
      .state('app.aboutus', {
        url: 'aboutus',
        views: {
          'content@': {
            templateUrl: '../aboutus.html',
            controller: 'AboutController'
          }
        }
      })
      .state('app.customers', {
        url: 'customers',
        views: {
          'content@': {
            templateUrl: '../customers.html',
            controller: 'AboutController'
          }
        }
      })
      .state('app.staff', {
        url: 'staff',
        views: {
          'content@': {
            templateUrl: '../staff.html',
            controller: 'AboutController'
          }
        }
      })
      .state('app.contactus', {
        url: 'contactus',
        views: {
          'content@': {
            templateUrl: '../contactus.html',
            controller: 'ContactController'
          }
        }
      })
      .state('app.menu', {
        url: 'menu',
        views: {
          'content@': {
            templateUrl: '../menu.html',
            controller: 'MenuController'
          }
        }
      })
      .state('app.dishdetails', {
        url: 'menu/:id',
        views: {
          'content@': {
            templateUrl: '../dishdetail.html',
            controller: 'DishDetailController'
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  });
