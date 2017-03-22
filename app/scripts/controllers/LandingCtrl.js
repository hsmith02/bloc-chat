(function() {
    function LandingCtrl(Room) {
        console.log("hello");
    }
 
    angular
        .module('blocChat')
        .controller('LandingCtrl', ['Room', LandingCtrl]);
})();