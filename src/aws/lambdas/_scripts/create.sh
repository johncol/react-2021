#!/bin/bash

echo "Starting create.sh.."

# variables
js_file=index.js
role=arn:aws:iam::295547799037:role/service-role/tech-items-crud-role

# Use folder name as lambda function name unless given as first argument
if [[ $# -eq 0 ]]; then
  folder_name=${PWD##*/}
  lambda_name=$folder_name
else
  lambda_name=$1
fi
echo " - lambda function '${lambda_name}' will be created"

zip_file=${lambda_name}.zip
ignored_result=$(zip $zip_file $js_file)
echo " - ${zip_file} created"

aws_response=$(aws lambda create-function \
  --function-name $lambda_name \
  --runtime nodejs14.x \
  --zip-file fileb://${zip_file} \
  --handler index.handler \
  --role $role)
echo " - aws response:"
echo "${aws_response}"
echo " - lambda function '${lambda_name}' created"

rm $zip_file
echo " - ${zip_file} removed"
