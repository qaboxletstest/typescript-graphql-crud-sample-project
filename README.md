# typescript-graphql-crud-sample-project

This project is created for QA to practice CRUD operations on GRAPHQL endpoints. Download this code and run *npm install* in the terminal to bring the server up. 

Kindly note this project is solely for performing CRUD; no validations are in place.

# READ USERS
```
Query
{
  users{
    id
    firstName
    lastName
    age
  }
}

```

# CREATE USER

```
mutation{
  createUser(
    options:{
    firstName:"Kapil",
    lastName:"Dev",
    age:60
  }
  ){
    id
    firstName
    lastName
    age
  }
}

```

# UPDATE USER

```
mutation{
  updateUser(id:1
  input:{
    firstName:"Steven"
  })
}

```

# DELETE USER

```
mutation{
  deleteUser(id:1)
}

```
