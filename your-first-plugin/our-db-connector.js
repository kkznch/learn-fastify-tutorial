import fastifyPlugin from 'fastify-plugin';
import fastifyMongo from '@fastify/mongodb';

const dbConnector = async (fastify, option) => {
  fastify.register(fastifyMongo, {
    url: 'mongodb://myuser:mypassword@localhost:27017/test_database',
  });
};

export default fastifyPlugin(dbConnector);
