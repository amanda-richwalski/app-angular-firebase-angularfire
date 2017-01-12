angular.module('app').constant('FirebaseUrl', 'http://je-expense-tracker.firebaseio.com')
  .service('rootRef', ['FirebaseUrl', Firebase]);
  
  
