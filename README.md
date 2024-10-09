# Estudo de Caso: Multer com Node.js e TypeScript

Este projeto é um estudo de caso sobre como utilizar o Multer para upload de arquivos em uma aplicação Node.js com TypeScript.

## Pré-requisitos

- Node.js instalado
- npm (Node Package Manager) instalado

## Instalação

1. Clone o repositório para sua máquina local:
    ```bash
    git clone https://github.com/Miguel-Oliveiraa/multer-node.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd multer-node
    ```

3. Instale as dependências do projeto:
    ```bash
    npm install
    ```

## Executando o Projeto

Para iniciar o servidor, utilize o comando:
```bash
npm run dev
```

O servidor estará rodando na porta `3000`.

## Endpoints

- **Upload de Arquivo**
    - **URL:** `/upload`
    - **Método:** `POST`
    - **Parâmetro:** `file` (form-data)
    - **Descrição:** Envia um arquivo para o servidor. O arquivo será armazenado na pasta `uploads` com um nome único baseado no timestamp atual.

- **Acesso a Arquivos**
    - **URL:** `/files/[nome_do_arquivo]`
    - **Método:** `GET`
    - **Descrição:** Permite acessar os arquivos armazenados na pasta `uploads`.

## Conclusão

O Multer é uma biblioteca poderosa e flexível para lidar com uploads de arquivos em aplicações Node.js. Ele permite configurar facilmente o armazenamento, nomeação e manipulação de arquivos enviados pelos usuários. Neste estudo de caso, vimos como configurar o Multer para armazenar arquivos localmente com nomes únicos, garantindo que não haja conflitos de nomes de arquivos.
