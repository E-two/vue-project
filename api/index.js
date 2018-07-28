import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import routes from './routes';

const app = express();

app.use(cors());
app.set('port', process.env.PORT || 3001);

// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
app.use(cookieParser());
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
app.use(bodyParser.json({ limit: '5mb' }));

app.use(express.static('api/public'));
// routes
app.use('/api', routes);

app.listen(app.get('port'), () => {
  console.log(`
  Find the server at: http://localhost:${app.get('port')}/`);
});
