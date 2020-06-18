const express = require('express');
const path = require('path');
const { config } = require('dotenv');
const initDB = require('./config/initDB');

const app = express();
initDB();
config(); // Load .env Variables

const port = process.env.PORT || 5000;
app.use(express.json({extended: true}));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
/**** ROUTING  */
const groupRoutes = require('./routes/groupRoutes');
const memberRoutes = require('./routes/memberRoutes');
const profileRoutes = require('./routes/profileRoutes');
const reportRoutes = require('./routes/reportRoutes');
const accessTokenRoutes = require('./routes/accessTokenRoutes');

app.use('/api/groups', groupRoutes);
app.use('/api/access', accessTokenRoutes);
app.use('/api/members', memberRoutes);
app.use('/api/profiles', profileRoutes);
app.use('/api/reports', reportRoutes);


// app.get('/mail',(req, res) => {
  
// const msg = {
//   to: 'sechibueze@gmail.com',
//   from: 'test@example.com',
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
// sgMail.send(msg)
//   .then(response => console.log('email::', response))
//   .catch(err => console.log('err', err));
//   // return res.status(200).json({
//   //   status: true,
//   //   message: 'ft choir portal running'
//   // });
// });

if (process.env.NODE_ENV === 'production') {
    // set static folder 
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });

}
app.listen(port, () => console.log(`FT_CHOIR_PORTAL::running on ${port}`));
