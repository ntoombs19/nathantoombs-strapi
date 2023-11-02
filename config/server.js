module.exports = ({ env }) => ({
  host: env('APP_HOST'),
  port: env('APP_PORT'),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
