# User Management API (NodeJS  Backend Assignment)

Welcome to the User Management API. This API allows you to manage user data, including creating, retrieving, updating, and deleting user information.


## Prerequisites

- Node.js (v14.x or later)
- MongoDB (local or cloud instance)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Anilkokkul/nodejs-backend-assessment.git
cd nodejs-backend-assessment
```
### 2. Install Dependencies
```
npm install
```
### 3.Environment Variables
##### Create a .env file in the root directory and add the following environment variables:

```
PORT=5000
MONGO_URL=mongodb://localhost:27017/userdb
```
### 4. Run the application
```
npm run dev
```
## API Documentation

[Postman API Documentation](https://documenter.getpostman.com/view/28958585/2sA3kUHNAi)

## Questions

### 1.How long did it take you to complete this assignment?
 - Approximately 5 hours.

### 2.What about this assignment did you find most challenging?
 - The most challenging aspect was handling data validation and ensuring that the queries were efficient, especially with pagination and sorting.

 ### 3. What about this assignment did you find unclear?
 - The assignment was generally clear. However, there were some uncertainties about the specific requirements for sorting and pagination.

 ### 4. What challenges did you face that you did not expect?
 - Unexpected challenges included dealing with MongoDB's schema flexibility and ensuring compatibility with various query parameters.

 ### 5.Do you feel like this assignment has an appropriate level of difficulty?
 - Yes, the assignment provided a good balance of complexity, covering key aspects of API development, including data handling, query processing, and endpoint management.

### 6.Briefly explain your decisions to use tools, frameworks, and libraries.
- Node.js was chosen for its performance and ease of use in building REST APIs. MongoDB was selected for its flexibility in handling diverse data structures. Mongoose was used for schema management and data validation.

### 7.Did you make certain assumptions and decisions around the application? Please elaborate on your reasonings.
- Assumed that the id field would be handled as a unique identifier and decided to use MongoDB’s default _id field for this purpose. Assumed the pagination would start from page 1 and the default limit would be 5, to align with common practices.