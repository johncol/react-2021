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

Delete a lambda function:

```
aws lambda delete-function --function-name sample-function
```

Create a lambda function:

```
zip sample-function.zip index.js

aws lambda create-function \
    --function-name sample-function \
    --runtime nodejs14.x \
    --zip-file fileb://sample-function.zip \
    --handler index.handler \
    --role arn:aws:iam::295547799037:role/service-role/tech-items-crud-role

rm sample-function.zip
```

```
zip sample-function.zip index.js

aws lambda update-function-code \
    --function-name sample-function \
    --zip-file fileb://sample-function.zip \
    --dry-run

rm sample-function.zip

```
