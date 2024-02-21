const categorias = [
    {
        "idCategoria": 1,
        "Descricao": "Gestão",
    },
    {
        "idCategoria": 2,
        "Descricao": "Cliente",
    },
    {
        "idCategoria": 3,
        "Descricao": "RP",
    },
]

const motivos = [
    {
        "idMotivo": 1,
        "Descricao": "Planejamento",
        "idCategoria": 1,
    },
    {
        "idMotivo": 2,
        "Descricao": "Financeiro",
        "idCategoria": 1,
    },
    {
        "idMotivo": 3,
        "Descricao": "Financeiro",
        "idCategoria": 2,
    },
]

const produtos = [
    {
        "idproduto": 1,
        "Descricao": "Impressora",
        "estoque": 5,
        "estoqueMinimo": 10,
        "unidade": "Un",
        "preco": 350,
    },
    {
        "idproduto": 2,
        "Descricao": "Grampeador",
        "estoque": 11,
        "estoqueMinimo": 10,
        "unidade": "Un",
        "preco": 7,
    },
    {
        "idproduto": 3,
        "Descricao": "Agenda",
        "estoque": 90,
        "estoqueMinimo": 10,
        "unidade": "Un",
        "preco": 15,
    },
    {
        "idproduto": 4,
        "Descricao": "Mesa escritório",
        "estoque": 40,
        "estoqueMinimo": 10,
        "unidade": "Un",
        "preco": 480,
    },
    {
        "idproduto": 5,
        "Descricao": "Canetas",
        "estoque": 70,
        "estoqueMinimo": 50,
        "unidade": "Un",
        "preco": 5,
    },
]

const departamentos = [
    {
        "idDep": 1,
        "Descricao": "Secretaria da Educação",
        "responsavel": "José",
    },
    {
        "idDep": 2,
        "Descricao": "Relações Públicas",
        "resposavel": "Ana",
    },
    {
        "idDep": 3,
        "Descricao": "Secretaria da Fazenda",
        "responsavel": "Renata",
    },
]

const funcionarios = [
    {
        "idFunc": 1,
        "nomeFunc": "Ana Luzia",
        "cargoFunc": "Coordenadora",
    },
    {
        "idFunc": 2,
        "nomeFunc": "Carlos Daniel",
        "cargoFunc": "Repositor",
    },
    {
        "idFunc": 3,
        "nomeFunc": "João Claudio",
        "cargoFunc": "Supervisor",
    },
]