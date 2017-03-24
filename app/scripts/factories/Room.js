(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        
        function addRoom(roomName) {
            rooms.$add({ name: roomName });
        };
        
        
        return {
            all: rooms,
            addRoom: addRoom
        };
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();