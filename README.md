# Registro de Ocorrências - AEP 7º Semestre

Projeto desenvolvido com NestJS + Mongoose para gerenciar registros de ocorrências.

---

## ✅ Tecnologias Utilizadas

- [NestJS](https://nestjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [TypeScript](https://www.typescriptlang.org/)

---

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/EmersonTanno/aep_7_registro_de_ocorrencia.git

# Acesse a pasta do projeto
cd aep_7_registro_de_ocorrencia

# Instale as dependências
npm install
```

## ▶️ Execução

```bash
# Executar em modo de desenvolvimento
npm run start:dev

# Executar em produção
npm run start
```

## ⚙️ .env (Exemplo)

Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:

``` .env
MONGO_URL="mongodb://localhost:27017/aep7"
PORT=8080
```

## 📚 Rotas da API

### ➕ Criar ocorrência
POST `/ocorrencia` </br>
Body:
``` json
{
  "nameOccurrence": "Árvore caindo",
  "namePerson": "João da Silva",
  "descricaoOccurrence": "Árvore velha com risco de cair na rua A",
  "dateOccurrence": "2024-05-01T10:00:00.000Z",
  "localOccurrence": "Rua A"
}
```
Resposta:
`201 Created`

### 📄 Listar todas as ocorrências
GET `/ocorrencia` </br>
Resposta:
`200 OK`
``` json
[
  {
    "nameOccurrence": "Árvore caindo",
    "namePerson": "João da Silva",
    "descricaoOccurrence": "Árvore velha com risco de cair na rua A",
    "dateOccurrence": "2024-05-01T10:00:00.000Z",
    "localOccurrence": "Rua A"
  },
  ...
]
```

### 🔍 Buscar ocorrência por ID
GET `/ocorrencia/:id` </br>
Resposta:
`200 OK`
``` json
[
  {
  "nameOccurrence": "Árvore caindo",
  "namePerson": "João da Silva",
  "descricaoOccurrence": "Árvore velha com risco de cair na rua A",
  "dateOccurrence": "2024-05-01T10:00:00.000Z",
  "localOccurrence": "Rua A"
  }
]
```

### 🗑️ Deletar ocorrência
DELETE  `/ocorrencia/:id` </br>
Resposta:
`204 No Content`


### ✏️ Atualizar ocorrência
PATCH `/ocorrencia/:id` </br>
Body:
``` json
{
  "nameOccurrence": "Árvore caindo",
  "namePerson": "João da Silva",
  "descricaoOccurrence": "Árvore velha com risco de cair na rua A",
  "dateOccurrence": "2024-05-01T10:00:00.000Z",
  "localOccurrence": "Rua A"
}
```
Resposta:
`204 No Content`
