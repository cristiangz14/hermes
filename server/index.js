const Hapi = require('hapi');
const inert = require('inert');
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
  register: inert,
}];

const server = new Hapi.Server();

server.connection({ port: 3000, host: 'localhost' });

server.register(plugins, (err) => {

    if (err) {
        throw err;
    }

    server.route({
      method: 'GET',
      path: '/public/{params*}',
      handler: {
        directory: {
          path: './public',
        },
      }
    });

    server.route({
        method: 'GET',
        path: '/{params*}',
        handler: function (request, reply) {
            reply.file('./public/index.html');
        }
    });

    server.start((err) => {
        if (err) {
            throw err;
        }
        console.log(`🌎 => Server running at: ${server.info.uri}`);
    });
});
