import nodemailer from 'nodemailer';

function sendMail(email,password)
{ 
  if(!email) {
    console.log("No email provided");
    return;
  }
   var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tanwarkirtiraj24@gmail.com',
      pass: 'vvnf gtdj dsct wbnz'
    }
  });

var mailOptions = {
  from: 'tanwarkirtiraj24@gmail.com',
  to:email,
  subject: 'verification email',
  html:"<h1>Welcome to Hms</h1><p>You have successfully register to our site , your login credentials are attached below</p><h2>Email:"+email+"</h2><h2>Password:"+password+"</h2><h1>Click on the link below to verify your account</h1>http://localhost:3000/verify/"+email
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}

export default sendMail;