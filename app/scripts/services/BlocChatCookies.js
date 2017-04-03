(function() {
    function BlocChatCookies($cookies) {        
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            //do something to allow users to set their username
            this.showUserForm = true;
        }
    }
    
    angular
        .module('blocChat')
        .run(['$cookies', BlocChatCookies]);
})();