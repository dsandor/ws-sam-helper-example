# Example using aws-websocket-sam-helper.

This example project shows how to use the sam helper.

## Steps to use

1. Install: `yarn install`
2. Generate sam template for this project: `yarn generate-sam-template`
3. Deploy to your AWS: `S3_BUCKET=-your-s3-bucket STACK_NAME=your-stack-name yarn deploy`

*Note that your AWS credentials need to be set prior to running the deploy command.

## What did it do?

The `aws-websocket-sam-helper` module scanned your project for `function.json` files and used them and your package.json `api` property to generate out a SAM Template named `template.yaml`.

Then the deploy command packaged up your API and Lambdas and installed it into your AWS account.
