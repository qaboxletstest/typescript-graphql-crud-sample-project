# typescript-graphql-crud-sample-project

This project is created for QA to practice CRUD operations on GRAPHQL endpoints. Download this code and run *npm install* in the terminal to bring the server up. 

Kindly note this project is solely for performing CRUD; only basic Input validations are in place. That means you can use it for practicing writing tests for GraphQL and we know there are bugs in this project.Kindly do not raise any bugs.

# READ USERS
```
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

# UPDATE USER ({id:1})

```
mutation{
  updateUser(id:1
  input:{
    firstName:"Steven"
  })
}

```

# DELETE USER ({id:1})

```
mutation{
  deleteUser(id:1)
}

```
