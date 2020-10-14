const express = require('express');
const routes = require('./routes/pricing');
const PORT = process.env.PORT || 3000;

const app = express();
app.set('view engine', 'pug');
app.use(express.static('public'));
app.use('/', routes);

const server = app.listen(PORT, () => {
	console.log(`Server is running on port ${server.address().port}`);
})