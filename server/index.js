const Hapi = require('hapi');
const env = require('./config/env');
const plugins = require('./config/plugins');

const server = new Hapi.Server();

server.connection({port: env.PORT});

server.register(plugins, (err) => {

    if (err) {
        throw err;
    }

    //Static files
    server.route({
      method: 'GET',
      path: '/public/{params*}',
      handler: {
        directory: {
          path: './public',
        },
      }
    });

    //API Proxy
    server.route({
      method: '*',
      path: '/api/{params*}',
      handler: {
        proxy: {
          host: env.API_HOST,
          port: env.API_PORT,
          protocol: env.API_PROTOCOL
        },
      }
    });

    //Entry point
    server.route({
        method: 'GET',
        path: '/{params*}',
        handler: function (request, reply) {
            reply.file('./index.html');
        }
    });

    server.start((err) => {
        if (err) {
            throw err;
        }
        console.log(`Server running at: ${server.info.uri}`);
    });
});
