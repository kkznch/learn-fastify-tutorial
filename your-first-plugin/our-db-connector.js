import fastifyPlugin from 'fastify-plugin';
import fastifyMongo from '@fastify/mongodb';

const dbConnector = async (fastify, option) => {
  fastify.register(fastifyMongo, {
    url: 'mongodb://root:example@localhost:27017',
  });
};

export default fastifyPlugin(dbConnector);
