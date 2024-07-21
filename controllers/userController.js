
const loadAuth = (req, res) => {
    res.render('auth');
}

const successGoogleLogin = (req , res) => { 
	if(!req.user) 
		res.redirect('/failure'); 
    console.log(req.user);
    const userEmail = req.user.email;
    res.render('welcome', { userEmail }); 
}

const failureGoogleLogin = (req , res) => { 
	res.send("Error"); 
}

module.exports = {
    loadAuth,
    successGoogleLogin,
    failureGoogleLogin
}