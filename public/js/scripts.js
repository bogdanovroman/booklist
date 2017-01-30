document.getElementById('loginBtn').addEventListener('click', function() {
    FB.login(function(response) {
        var user = {};
        if (response.status === 'connected') {
            FB.api("/" + response.authResponse.userID, function(response) {
                if (response && !response.error) {
                    user.id   = response.id;
                    user.name = response.name;
                }
            });
            FB.api("/" + response.authResponse.userID + "/picture", function(response) {
                if (response && !response.error) {
                    user.url = response.data.url;
                }
            });
        } else if (response.status === 'not_authorized') {
            console.log('The person is logged into Facebook, but not your app.');
        }
    }, {scope: 'public_profile,email'});
}, false);
