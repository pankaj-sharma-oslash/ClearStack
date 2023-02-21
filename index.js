const { execSync } = require("child_process");

const stage = process.env.STAGE;
console.log("======>", stage)
const stacks = [
  `${stage}-sst-emails-email-cron-stack`,
  `${stage}-activity-search-as-graphql-stack`,
  `${stage}-oslash-appsync-appsync-stack`,
  `${stage}-oslash-appsync-public-api-stack`,
  `${stage}-oslash-appsync-event-bus-consumers-stack`,
  `${stage}-oslash-appsync-proxy-api-stack`,
  `${stage}-oslash-appsync-internal-api-stack`,
  `${stage}-oslash-appsync-s3-bucket-stack`,
  `${stage}-analytics-home-events-stack`,
  `${stage}-oslash-invite-invite-from-google-stack`,
  `${stage}-oslash-invite-invite-event-bus-consumer-stack`,
  `${stage}-heimdall-api-stack`,
  `${stage}-oslash-oslack-slack-stack`,
  `${stage}-oslash-invite-invite-event-bus-stack`,
  `${stage}-webhooks-webhook-stack`,
  `${stage}-analytics-impressions-stack`,
  `${stage}-proxy-api-stack`,
  `${stage}-sst-emails-cronjob-stack`,
  `${stage}-sst-data-sst-data-stack`,
  `${stage}-images-images-stack`,
  `${stage}-analytics-analytics-stack`,
  `${stage}-analytics-events-stack`,
  `${stage}-activity-search-as-kinesis-stack`,
  `${stage}-analytics-search-analytics-stack`,
  `${stage}-activity-search-as-s3-bucket-stack`,
  `${stage}-integration-management-apis-graphql-stack`,
  `${stage}-integration-management-apis-cron-stack`,
  `${stage}-integration-management-apis-macie-stack`,
  `${stage}-snippets-graphql-stack`,
  `${stage}-admin-apis-graphql-stack`,
  `${stage}-admin-apis-api-stack`,
  `${stage}-distributed-lock-service-distributed-lock-service-api-stack`,
  `${stage}-integration-auth-service-integration-auth-service-api-stack`,
  `${stage}-integration-management-apis-events-stack-integration-management`,
  `${stage}-search-admin-api-integration-auth-service-api-stack`,
  `${stage}-oslash-sanity-sanity-stack`,
  `${stage}-oslash-appsync-event-bus-stack`,
  `${stage}-analytics-caliban-stack`,
  `${stage}-sst-sink-kinesis-stack`,
];

for (const stack of stacks) {
  execSync(`aws cloudformation delete-stack --stack-name ${stack} --region us-east-1`);
}