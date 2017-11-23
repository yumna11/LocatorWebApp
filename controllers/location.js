/* GET 'Location info' page */
module.exports.locationInfo = function(req, res){
    res.render('index', { title: 'Location info' });
};
/* GET 'Add review' page */
module.exports.addReview = function(req, res){
    res.render('index', { title: 'Add review' });
};
module.exports.homeList = function (req, res) {
    res.redirect('index',{title: 'Home'});

};