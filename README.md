# Server Base - Proyecto ONG


## Envinroment setup

1) Create database
2) Copy .env.example to .env and fill with database credentials.

To install dependencies, run
``` bash
npm install
```

3) Migrations:
``` bash
npx sequelize-cli db:migrate
```

4) Seeders:
``` bash
npx sequelize-cli db:seed:all
```

## Start local server

``` bash
npm start
```

```
Listado de usuarios
<!-- Usuarios administradores con ROLE = 1 -->
{email: testuseralkemy1@yopmail.com,
password: pass1234
},
{email: testuseralkemy2@yopmail.com,
password: pass1234
},
{email: testuseralkemy3@yopmail.com,
password: pass1234
},
{email: testuseralkemy4@yopmail.com,
password: pass1234
},
{email: testuseralkemy5@yopmail.com,
password: pass1234
},
{email: testuseralkemy6@yopmail.com,
password: pass1234
},
{email: testuseralkemy7@yopmail.com,
password: pass1234
},
{email: testuseralkemy8@yopmail.com,
password: pass1234
},
{email: testuseralkemy9@yopmail.com,
password: pass1234
},
{email: testuseralkemy10@yopmail.com,
password: pass1234
}
<!-- Usuarios estandar o regulares con ROLE = 2 -->
{email: testuseralkemy11@yopmail.com,
password: pass1234
},
{email: testuseralkemy12@yopmail.com,
password: pass1234
},
{email: testuseralkemy13@yopmail.com,
password: pass1234
},
{email: testuseralkemy14@yopmail.com,
password: pass1234
},
{email: testuseralkemy15@yopmail.com,
password: pass1234
},
{email: testuseralkemy16@yopmail.com,
password: pass1234
},
{email: testuseralkemy17@yopmail.com,
password: pass1234
},
{email: testuseralkemy18@yopmail.com,
password: pass1234
},
{email: testuseralkemy19@yopmail.com,
password: pass1234
},
{email: testuseralkemy20@yopmail.com,
password: pass1234
}
```