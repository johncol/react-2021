# AWS actions and commands

`aws configure`

`aws apigatewayv2 get-apis`

## Dynamo DB

Practical list of commands: https://dynobase.dev/dynamodb-cli-query-examples/

`aws dynamodb scan --table-name tech-items`

```
aws dynamodb scan \
    --table-name tech-items \
    --filter-expression "id = :id" \
    --expression-attribute-values '{":id": {"S": "1"}}'
```

```
aws dynamodb get-item \
    --table-name tech-items \
    --key '{"id": {"S": "1"}}' \
    --consistent-read
```

# Lambda Functions

`aws lambda list-functions`

Execute a lambda function:

```
aws lambda invoke \
    --function-name tech-items-list \
    lambda-response.json
```

Create a lambda function:

```
zip tech-items-get.zip index.js

aws lambda create-function \
    --function-name tech-items-get \
    --runtime nodejs14.x \
    --zip-file fileb://tech-items-get.zip \
    --handler index.handler \
    --role arn:aws:iam::295547799037:role/service-role/tech-items-crud-role

rm tech-items-get.zip
```

```
zip tech-items-get.zip index.js

aws lambda update-function-code \
    --function-name tech-items-get \
    --zip-file fileb://tech-items-get.zip \
    --dry-run

rm tech-items-get.zip

```
