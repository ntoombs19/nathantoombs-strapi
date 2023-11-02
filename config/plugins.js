module.exports = ({ env }) => ({
  upload: {
    config: env('NODE_ENV') === 'production' ? {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    } : {
      providerOptions: {
        localServer: {
          maxage: 300000
        },
      },
    },
  },
  sentry: {
    enabled: env('NODE_ENV') === 'production',
    config: {
      enabled: env('NODE_ENV') === 'production',
      dsn: env('NODE_ENV') === 'production' ? env('SENTRY_DSN') : null,
      sendMetadata: true,
    },
  },
  ckeditor: {
    enabled: true,
  },
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: env('NODE_ENV') === 'development',
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        introspection: env('NODE_ENV') === 'development',
        tracing: false,
      },
    },
  },
  "apollo-sandbox": {
    enabled: env('NODE_ENV') === 'development',
  },
  seo: {
    enabled: true,
  },
});
