(function() {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child('messages');
        var messages = $firebaseArray(ref);
        
        function getByRoomId(roomId) {
                
            // filter messages by room ID                     
            return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
        };
        
        function send(newMessage) {
            messages.$add(newMessage);
        }
        
        return {
            getByRoomId: getByRoomId, 
            send: send
        };
        
        
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();