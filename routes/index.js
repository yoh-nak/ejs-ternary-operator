
/*
 * GET home page.
 */

exports.index = function(req, res){
	//セッション
	req.session.login = true;

	res.render('index', {
		title: 'Express',
		login: req.session.login
	});
};