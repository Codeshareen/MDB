const express = require('express');
const router = express();
const passport = require('passport');
require('../passport');

router.use(passport.initialize());
router.use(passport.session());

const userController = require('../controllers/userController');

router.get('/g/c', userController.loadAuth);

// Auth 
router.get('/auth/google', passport.authenticate('google', {
    scope:
        ['email', 'profile']
}));

// Auth Callback 
router.get('/auth/google/callback',
    passport.authenticate('google', {
        successRedirect: '/success',
        failureRedirect: '/failure'
    }));


// Success 
router.get('/success', userController.successGoogleLogin);

// failure 
router.get('/failure', userController.failureGoogleLogin);

router.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            console.error('Error logging out:', err);
            return res.status(500).send('Error logging out');
        }
        req.session.destroy(err => {
            if (err) {
                console.error('Error destroying session:', err);
                return res.status(500).send('Error logging out');
            }
            res.redirect('/');
        });
    });
});

router.get('/notvalid', (req, res) => {
    const tempmail  =   req.session.verifiedemail;
    console.log( req.session.verifiedemail);

    req.logout((err) => {
        if (err) {
            console.error('Error logging out:', err);
            return res.status(500).send('Error logging out');
        }
       
        console.log(tempmail);
        req.session.destroy(err => {
            if (err) {
                console.error('Error destroying session:', err);
                return res.status(500).send('Error logging out');
            }
            res.write(`Unauthorized email ${tempmail} \n`);
            res.write('if you are facing any issue Please use private window');
            res.end();        });
    });
});



module.exports = router;