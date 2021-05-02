#!/bin/bash

echo "Starting update.sh.."

# variables
js_file=index.js

# Use folder name as lambda function name unless given as first argument
if [[ $# -eq 0 ]]; then
  folder_name=${PWD##*/}
  lambda_name=$folder_name
else
  lambda_name=$1
fi
echo " - lambda function '${lambda_name}' will be updated"

zip_file=${lambda_name}.zip
ignored_result=$(zip $zip_file $js_file)
echo " - ${zip_file} created"

aws_response=$(aws lambda update-function-code \
  --function-name $lambda_name \
  --zip-file fileb://${zip_file})

echo " - aws response:"
echo "${aws_response}"
echo " - lambda function '${lambda_name}' updated"

rm $zip_file
echo " - ${zip_file} removed"
