const express = require('express');
const router = express.Router();
const passport = require('passport');

const Note = require('../models/Note');


router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/signup', (req, res, next) => {
  res.render('signup');
});

router.post('/signup', passport.authenticate('local-signup' ,{

  successRedirect : '/profile',
  failureRedirect : '/signup',
  passReqToCallback : true

}));


router.get('/signin', (req, res, next) => {
  res.render('signin');
});

router.post('/signin', passport.authenticate('local-signin', {

  successRedirect: '/profile',
  failureRedirect: '/signin',
  passReqToCallback: true

}));


router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/');
});


router.get('/profile', isAuthenticated, (req, res, next) =>{
  res.render('profile');
});

router.get('/questions.ejs', (req, res, next) => {
  res.render('questions.ejs');
});

router.get('/questionadd', (req, res, next) => {
  res.render('questionadd');
});

router.post('/questionadd', async (req, res, next) => {
  const { question, answera, answerb, answerc, answerd }= req.body;
  console.log(req.body);
  const newNote = new Note({ question, answera, answerb, answerc, answerd});
  await newNote.save();
  res.redirect('/questions.ejs');
  console.log(req.body);
});

router.get('/questions.ejs', async (req, res, next) => {
  const notes = await Note.find();
  res.render('/questions.ejs', { notes });
});

function isAuthenticated(req, res, next) {
  if(req.isAuthenticated()) {
    return next ();
  }
  res.redirect('/signin');
};

module.exports = router;

