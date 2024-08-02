const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
  // Typically it would be a connetion URL
  // - redis://localhost:6379
  // - redis://redis.example.com:6379
  // - redis://user1:mypassword@redis.example.com:6379
  // But since we are running docker we just specify
  //  the service name 'redis-server' in the docker-compose file
  host: 'redis-server',
  post: 6379
});
client.set('visits', 0);

app.get('/', (_, res) => {
  // process.exit(0); -> 'always' policy restarts container even on success code
  // process.exit(1); -> 'on-failure' policy restarts container on failure code

  client.get('visits', (_, visits) => {
    res.send('Number of visits is ' + visits);
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log('Listening on port 8081');
});
