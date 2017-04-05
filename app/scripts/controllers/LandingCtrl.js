(function() {
    function LandingCtrl(Room, Message) {        
        this.isFormOpen = false; 
        this.isRoomOpen = false;
        this.rooms = Room.all;
        this.currentRoom = null;
        this.roomMessages = null;
        this.showUserForm = true;
        this.showHome = false;
        
        this.userName = localStorage.getItem('chatUserName');
        if (this.userName) {
            this.showHome = true;
            this.showUserForm = false;
        }
        
        this.addRoom = function(roomName) {
            Room.addRoom(roomName);
            this.openRoom(roomName); //why doesn't this work?                
        }
            
        
        this.openRoom = function(room) {
            this.currentRoom = room.name;
            this.isRoomOpen = true;
            this.isFormOpen = false;
            this.showHome = false;
            this.roomMessages = Message.getByRoomId(room.$id);
        }
                
        this.createRoom = function() {
            this.showUserForm = false;
            this.showHome = false;
            this.isRoomOpen = false;
            this.isFormOpen = !this.isFormOpen
        }
        
        this.cancelNewRoom = function() {
            this.isFormOpen = !this.isFormOpen;
            this.showHome = true;
        }
        
        this.setUsername = function() {
            this.userName = document.getElementById("userName").value;
            if(!this.userName.trim()) {
                return;
            }
            
            localStorage.setItem('chatUserName', this.userName);
            this.showUserForm = false;
            this.showHome = true;
        }
        
        this.newMessage = function() {
            var messageContent = document.getElementById("newMessageBox").value;
                        
            var message = { 
                username: this.username,
                content: messageContent,
                sentAt: new Date().toLocaleTimeString(),
                roomId: room.$id
            };
            
        
            
            Message.send(message);
        }
    }

    angular
        .module('blocChat')
        .controller('LandingCtrl', ['Room', 'Message', LandingCtrl]);
})();