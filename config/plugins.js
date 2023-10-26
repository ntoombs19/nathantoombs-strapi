module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        s3Options: {
          accessKeyId: env('AWS_ACCESS_KEY_ID'),
          secretAccessKey: env('AWS_ACCESS_SECRET'),
          region: env('AWS_REGION'),
          params: {
            Bucket: env('AWS_BUCKET_NAME'),
          },
        }
      },
      // These parameters could solve issues with ACL public-read access — see [this issue](https://github.com/strapi/strapi/issues/5868) for details
      actionOptions: {
        upload: {
          ACL: null
        },
        uploadStream: {
          ACL: null
        },
      }
    },
  },
  sentry: {
    enabled: true,
    config: {
      enabled: env('NODE_ENV') === 'production',
      dsn: env('NODE_ENV') === 'production' ? env('SENTRY_DSN') : null,
      sendMetadata: true,
    },
  },
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        article: {
          field: 'slug',
          references: 'title',
        },
      },
    },
  },
  ckeditor: {
    enabled: true,
  },
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
  seo: {
    enabled: true,
  },
});
