(function() {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child('messages');
        var messages = $firebaseArray(ref);
        
        return {
            getByRoomId: function (roomId) {
                // filter messages by room ID
                ref.child('messages').orderByChild('roomId').equalTo('-Kg0sWDJuX-EcqOSShZ-').on('content', function(snapshot) {
                    console.log(snapshot.val());
                });
            }
        };
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();