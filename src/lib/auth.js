module.exports = {
    isLoggedIn(req, res, next) {
        if(req.isAuthenticated()){
            return next();
        }
        return res.json({isLoggedIn: false});
    },
    isNotLoggedIn(req, res, next){
        if(!req.isAuthenticated()){
            return next();
        }
        return res.json({isLoggedIn: true});
    }
}