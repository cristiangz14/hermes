const Hapi = require('hapi');
const Good = require('good');

const plugins = [{
    register: Good,
    options: {
        reporters: {
            console: [{
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{
                    response: '*',
                    log: '*'
                }]
            }, {
                module: 'good-console'
            }, 'stdout']
        }
    }
}, {
  register: require('inert'),
}, {
  register: require('h2o2')
}];

const server = new Hapi.Server();

server.connection({ port: 3000, host: 'localhost' });

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
          host: 'localhost',
          port: 3001,
          protocol: 'http',
          passThrough: true,
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
