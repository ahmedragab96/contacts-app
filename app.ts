import 'dotenv/config';
import webServer from './server';

webServer.run().then(() => console.log('Server started successfully')).catch((err) => console.log(err))

