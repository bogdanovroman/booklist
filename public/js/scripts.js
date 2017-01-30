document.getElementById('loginBtn').addEventListener('click', function() {
    //do the login
    FB.login(function(response) {
        console.log(response);
        if (response.status === 'connected') {
            console.log('Logged into your app and Facebook.');
        } else if (response.status === 'not_authorized') {
          console.log('The person is logged into Facebook, but not your app.');
        } 
    }, {scope: 'public_profile,email'});
}, false);
