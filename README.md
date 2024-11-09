# MySite

MySite é uma aplicação web construída com React e Vite, desenvolvida como parte da **aula 50** do curso da **Turma Full Stack 2 (+praTi e Codifica) - 2024/2**. A aplicação possui quatro páginas principais: Home, About, Services e Contact. O objetivo deste projeto é demonstrar como criar uma aplicação de múltiplas páginas utilizando React Router para navegação.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Vite**: Bundler de módulos JavaScript ultrarrápido utilizado para criar e configurar o projeto.
- **React Router DOM**: Biblioteca utilizada para gerenciar a navegação entre as páginas da aplicação.
- **CSS**: Utilizado para estilização das páginas e componentes da aplicação.

-   ![image](https://github.com/user-attachments/assets/ddc20f9b-92a9-421b-910e-9a54d8b73a2f)

-   ![image](https://github.com/user-attachments/assets/03e4107b-1734-4a12-a884-7b9a09355bfb)

-   - ![image](https://github.com/user-attachments/assets/598634b6-fcf8-43db-ada8-e96487ce8b3f)

## Estrutura do Projeto

```sh

MySite/ ├── node_modules/ ├── public/ ├── src/ │ ├── components/ │ ├── pages/ │ │ ├── Home.jsx │ │ ├── About.jsx │ │ ├── Services.jsx │ │ ├── Contact.jsx │ ├── App.jsx │ ├── main.jsx │ ├── styles/ │ │ ├── app.css ├── index.html ├── package.json ├── vite.config.js 


```


## Configuração e Execução

### Pré-requisitos

- Node.js instalado
- npm (gerenciador de pacotes do Node.js)

### Instalação

1. Clone o repositório para a sua máquina local:
    ```sh
    git clone https://github.com/teofilonicolau/mysite_react.git
    ```

2. Navegue até o diretório do projeto:
    ```sh
    cd mysite_react
    ```

3. Instale as dependências do projeto:
    ```sh
    npm install
    ```

### Execução

Para iniciar o servidor de desenvolvimento, execute o seguinte comando:
```sh
npm run dev

```

Abra o seu navegador e acesse http://localhost:3000 para ver a aplicação em execução.

```sh
 http://localhost:5173/about

```

### Estrutura das Páginas
  #### Home
      - A página inicial que contém links para as outras páginas.

    
 #### About
     - A página com informações sobre o site.


 #### Services
   - A página com a lista de serviços oferecidos.(Ainda nao iplantei a lista)

     
  
 #### Contact
   - A página com informações de contato.

   - ![image](https://github.com/user-attachments/assets/2bb4cbd9-87b9-4a20-98a0-c591dc267c3a)


### Navegação
  - O usuário pode navegar entre as páginas usando links e botões programáticos. Utilizamos os componentes Link e useNavigate do React Router DOM para gerenciar a navegação.

### Contribuição
 - Sinta-se à vontade para enviar pull requests ou relatar problemas. Toda contribuição é bem-vinda      


