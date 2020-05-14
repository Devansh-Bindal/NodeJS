const GoogleStrategy=require('passport-google-oauth').OAuth2Strategy;
const GoogleUser=require('../../models/googleuser');

module.exports = function (passport) {
    passport.use(new GoogleStrategy({
        clientID: '615518390593-gjsbc3oq18vomecfptdf67o2e7bnog8d.apps.googleusercontent.com',
        clientSecret: 'eGq96WTXU5z5bIQzSM4Oswee',
        callbackURL: "http://localhost:1465/auth/google/callback"
    }, (accessToken, refreshToken, profile, done)=> {
            // console.log("Access-"+accessToken);
            // console.log("refresh-"+refreshToken);
            // console.log("profile-"+profile);

            GoogleUser.findOneAndUpdate({ googleId: profile.id }, {
                name: profile.displayName,
                googleId: profile.id,
                token:accessToken
            })
              .then(user=> done(null,user))
              .catch(err=> done(err,null))
        }
    ));
}




    

   