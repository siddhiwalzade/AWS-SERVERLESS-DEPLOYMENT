# AWS-SERVERLESS-DEPLOYMENT


**IAM Role for Lambda – API-Dynamodb
✅ IAM role assigned to Lambda
✅ Permissions:

AmazonDynamoDBFullAccess

AmazonAPIGatewayInvokeFullAccess
![IAM rol](https://github.com/user-attachments/assets/3b108115-67ca-4f62-a709-43c0a1e2b3ac)

**Lambda Function Code – insertStudentData
✅ Python code that inserts student data into DynamoDB
✅ Triggered by API Gateway POST request



![Lambdafunction](https://github.com/user-attachments/assets/87d76bb1-7645-4a23-ac6c-864957c66b9a)

![get-code](https://github.com/user-attachments/assets/72a80768-70a2-444f-81d5-d761d85b986c)
![post-code](https://github.com/user-attachments/assets/a457be61-04a3-4087-8457-fc7f42357d29)

**DynamoDB Table – studentData
✅ Table structure with Partition Key: studentid (String)
✅ Sample entries

![dbstudentdata](https://github.com/user-attachments/assets/9149834e-8492-497a-866d-c02db9a6fc5e)


**Create API Gateway – POST & GET Integration
✅ POST to save data → triggers insertStudentData Lambda
✅ GET to fetch data → triggers getStudent Lambda

![create API](https://github.com/user-attachments/assets/e858638a-b677-4447-b156-0b1df4db6789)

**S3 Bucket Objects – HTML & JS files uploaded
✅ index.html and scripts.js uploaded
✅ Static website hosting enabled

![s3bucket-object](https://github.com/user-attachments/assets/6268500e-6d22-4424-8efe-7f0df271100c)

**S3 Bucket Permissions
✅ Public access granted
✅ Correct CORS configuration and bucket policy

![permisons-s3](https://github.com/user-attachments/assets/bce655fe-81d4-4b1b-89fb-91c917955116)

**Student Data in Table on Web Page
✅ After clicking “View all Students”

✅ Dynamically populates HTML table with DynamoDB records

![Screenshot 2025-06-11 234509](https://github.com/user-attachments/assets/268973fb-bfe6-44b5-a5fa-2151c2b11cd1)

![Screenshot 2025-06-11 224018](https://github.com/user-attachments/assets/06699d26-a672-4241-9caa-1697d6d51b2b)













