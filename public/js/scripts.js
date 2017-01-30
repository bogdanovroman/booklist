document.getElementById('loginBtn').addEventListener('click', function() {
    //do the login
    FB.login(function(response) {
        if (response.authResponse) {
            //user just authorized your app
            top.location.href = 'success';
        }
    }, {scope: 'email,public_profile', return_scopes: true});
}, false);
