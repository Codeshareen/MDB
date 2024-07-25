const passport = require('passport'); 
const GoogleStrategy = require('passport-google-oauth2').Strategy; 

passport.serializeUser((user, done) => { 
    done(null, user); 
});

passport.deserializeUser((user, done) => { 
    done(null, user); 
});

passport.use(new GoogleStrategy({ 
    clientID: process.env.CLIENT_ID, // Your Client ID here 
    clientSecret: process.env.CLIENT_SECRET, // Your Client Secret here 
    callbackURL: "https://mdb-eqr8.onrender.com/auth/google/callback", 
    passReqToCallback: true,
    // Add the following option to restrict to your domain
    userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo' // Google API endpoint
}, 
function(request, accessToken, refreshToken, profile, done) { 
    // Check if user's email domain is from adityatekkali.edu
    const emailDomain = profile.emails[0].value.split('@')[1];
    if (emailDomain === 'adityatekkali.edu') {
        return done(null, profile);
    } else {
        // Return an error indicating unauthorized domain
        return done(new Error('Unauthorized domain'));
    }
}));
