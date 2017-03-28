(function() {
    this.isFormOpen = false; 
     
    function LandingCtrl(Room) {
        this.rooms = Room.all;
        this.addRoom = Room.addRoom;
        this.currentRoom = null;
    
        this.selectRoom = function(room) {
            this.currentRoom = room;
            console.log(room.name);
        }
    }

    angular
        .module('blocChat')
        .controller('LandingCtrl', ['Room', LandingCtrl]);
})();