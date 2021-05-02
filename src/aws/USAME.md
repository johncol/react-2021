# AWS actions and commands

`aws configure`

`aws lambda list-functions`

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
