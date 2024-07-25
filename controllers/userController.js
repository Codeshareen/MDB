
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


// const successGoogleLogin = (req, res) => {
//     if (!req.user) {
//         return res.redirect("https://mdb-eqr8.onrender.com/");
//     }

//     console.log(req.user);
//     const userEmail = req.user.emails[0].value; // Assuming you want the primary email

//     // Check if email domain is authorized
//     if (!userEmail.endsWith('@adityatekkali.edu')) {
//         res.redirect('/notvalid');
//     }

//     // Store verified email in session or do further processing
//     req.session.verifiedemail = userEmail;

//     console.log("CHECK AUTH");
//     console.log(req.session.verifiedemail);

//     res.redirect('/');
// }



const failureGoogleLogin = (req , res) => { 
	res.send("Error"); 
}

module.exports = {
    loadAuth,
    successGoogleLogin,
    failureGoogleLogin
}