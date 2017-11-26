'use strict'
module.exports=function(app,passport){
    console.log('i am called');
    app.route('/server/register').post(passport.authenticate('local-signup',{
        successRedirect : '/successjson', 
        failureRedirect : '/failurejson'
    }));
    app.get('/successjson', function(req, res) {
        console.log(req.body);
        res.json({message: 'Success! you can now login...!!'});
    });
    app.get('/failurejson', function(req, res) {
        console.log(req.body);
        res.json({message: 'failed...:(' });
    });
}