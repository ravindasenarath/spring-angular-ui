angular.module('hello', [])
    .controller('home', function($http) {
        var self = this;
        $http.get('/resource/').then(function(response){
            self.greeting = response.data;
        });
        //this.greeting = {id: '186bec03-4f8f-40f9-948d-78a8140cd57a', content: 'Hello World!'}
    });