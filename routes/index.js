const passport = require('passport');

const router = require('express').Router();
router.use('/', require('./swagger'));
// router.use('/', require('./home'));
router.use('/motos', require('./motos'));
router.use('/cats', require('./cats'));

router.get('/login', passport.authenticate('github'), (req, res) => {});

router.get('/logout', function (req, res, next) {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

module.exports = router;