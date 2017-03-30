(function() {
    function LandingCtrl(Room, Message) {
        this.isFormOpen = false; 
        this.isRoomOpen = false;
        this.rooms = Room.all;
        this.addRoom = Room.addRoom;
        this.currentRoom = null;
        this.roomMessages = null;
        
        this.openRoom = function(room) {
            this.currentRoom = room.name;
            this.isRoomOpen = true;
            this.isFormOpen = false;
            console.log(room);
            
            this.roomMessages = Message.getByRoomId(room.$id);
        }
        
        
        this.createRoom = function() {
            this.isRoomOpen = false;
            this.isFormOpen = !this.isFormOpen
        }
    }

    angular
        .module('blocChat')
        .controller('LandingCtrl', ['Room', 'Message', LandingCtrl]);
})();