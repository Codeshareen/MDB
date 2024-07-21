
const loadAuth = (req, res) => {
    res.render('auth');
}

const successGoogleLogin = (req , res) => { 
	if(!req.user) 
		res.redirect("https://mdb-eqr8.onrender.com/"); 

    
    console.log(req.user);
    req.session.verifiedemail = req.user.email;
    // const userEmail =   req.session.verifiedemail;

    console.log("CHECK AUTH");
    console.log(req.session.verifiedemail);


    res.redirect('/');
}

const failureGoogleLogin = (req , res) => { 
	res.send("Error"); 
}

module.exports = {
    loadAuth,
    successGoogleLogin,
    failureGoogleLogin
}