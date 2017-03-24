(function() {
    this.isFormOpen = false; 
     
    function LandingCtrl(Room) {
        this.rooms = Room.all;
        this.addRoom = Room.addRoom;
    }

    angular
        .module('blocChat')
        .controller('LandingCtrl', ['Room', LandingCtrl]);
})();