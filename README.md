# OWL - BACKEND - AMBIENTE E INSTALAÇÃO

Para rodar o projeto, primeiro é necessário clonar este repositório. Após isso deverá instalar os pacotes com "npm install". Você também precisará de um banco de dados PostgreSQL. Com todos os pacotes instalados e o banco criado, você deve criar um arquivo ".env" baseado no ".env.example". Após isso poderá rodar as migrações com o comando "npm typeorm migration:run -d src/data-source.ts". Por fim, pode rodar o servidor com o comando "npm run dev", o servidor deve rodar na porta 3001 (caso deseje, pode alterar a const "port" no arquivo server.ts para alguma porta de sua escolha).

## Documentação:

### URL BASE: 'http://localhost:3001'

### POST /login:
    Body que deve ser enviado:
    {
        "email": "string",
        "password": "string"
    }

    Retorno esperado:
    ## Status 201.
    {
        "token": "string", (Contendo token (JSONWEBTOKEN))
        "userId" "string" (Contendo o ID do usuário (uuid_v4))
    }

### POST /users:
    Body que deve ser enviado:
    {
        "name": "string",
        "email": "string",
        "phone": "string",
        "password": "string"
    }

    Retorno esperado:
    ## Status 201.
    {
        "createdAt": "string" (DATE),
	    "id": "string" (uuid_v4),
	    "phone": "string",
	    "email": "string",
	    "name": "string"
    }
### PATCH /users/:id:
    Poderá ser enviado um body contendo um dos três itens do exemplo abaixo (caso não seja enviado um dos itens ele atualizará apenas o que foi enviado):
    {
        "name": "string",
        "email": "string",
        "phone": "string",
    }

    Retorno esperado:
    ## Status 200.
    {
	"contacts": [],
    "createdAt": "string" (DATE),
	"updatedAt": "string" (DATE),
    "id": "string" (uuid_v4),
	"phone": "string",
	"email": "string",
	"name": "string"
    }

### GET /users:
    Não é enviado nenhum body.

    Retorno esperado:
    ## Status 200.
    {
	"contacts": [],
    "createdAt": "string" (DATE),
	"updatedAt": "string" (DATE),
    "id": "string" (uuid_v4),
	"phone": "string",
	"email": "string",
	"name": "string"
    }

### DELETE /users/:id:
    Não é enviado nenhum body.

    Retorno esperado:
    ## Status 204.

### GET /contacts:
    Não é enviado nenhum body.

    Retorno esperado:
    ## Status 200.
    [
	{
		"id": "string" (uuid_v4),
		"name": "string",
		"email": "string",
		"phone": "string"",
		"createdAt": "string" (DATE),
		"updatedAt": "string" (DATE)
	}
    ]

### POST /contacts:
    Body que deve ser enviado:
    {
        "name": "string",
        "email": "string",
        "phone": "string",
    }

    Retorno esperado:
    ##Status 200.

    {
	"createdAt": "string" (DATE),
	"id": "string" (uuid_v4),
	"email": "string",
	"phone": "string",
	"name": "string"
}

### PATCH /contacts/:id:
    Poderá ser enviado um body contendo um dos três itens do exemplo abaixo (caso não seja enviado um dos itens ele atualizará apenas o que foi enviado):
    {
        "name": "string",
        "email": "string",
        "phone": "string"
    }

    Retorno esperado:
    ## Status 200.
    {
	    
    "id": "string" (uuid_v4),
	"phone": "string",
	"email": "string",
	"name": "string",
    "createdAt": "string" (DATE),
	"updatedAt": "string" (DATE)
    }

### DELETE /contacts/:id:
    Não é enviado nenhum body.

    Retorno esperado:
    ## Status 204.

