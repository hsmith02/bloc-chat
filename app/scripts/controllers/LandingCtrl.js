(function() {
    this.isFormOpen = false; 
    this.isRoomOpen = false;
     
    function LandingCtrl(Room, Message) {
        this.rooms = Room.all;
        this.addRoom = Room.addRoom;
        this.currentRoom = null;
    
        this.selectRoom = function(room) {
            this.currentRoom = room;
        }
    }

    angular
        .module('blocChat')
        .controller('LandingCtrl', ['Room', 'Message', LandingCtrl]);
})();