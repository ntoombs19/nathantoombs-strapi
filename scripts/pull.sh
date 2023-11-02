source .env

YELLOW='\033[0;33m'
DEFAULT='\033[0m'

echo "\n${YELLOW}Transfering data from production to http://$APP_HOST:$HOST_PORT/admin\n${DEFAULT}"
yarn strapi transfer --from https://strapi.nathantoombs.com/admin --from-token $STRAPI_PULL_TRANSFER_TOKEN

echo "\n${YELLOW}Pulling uploads from S3\n${DEFAULT}"
aws s3 cp s3://$AWS_BUCKET_NAME/ ./public/uploads --recursive

echo "\n${YELLOW}Updating file urls to point to public/uploads\n${DEFAULT}"
psql -h $DATABASE_HOST -p $DATABASE_PORT -U postgres -d $DATABASE_NAME -w -c "UPDATE files SET url = replace(url, 'https://$AWS_BUCKET_NAME.s3.amazonaws.com', 'http://$APP_HOST:$HOST_PORT/uploads'); UPDATE files SET formats = replace(formats::TEXT, 'https://$AWS_BUCKET_NAME.s3.amazonaws.com', 'http://$APP_HOST:$HOST_PORT/uploads')::jsonb;"
