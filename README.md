# Plant Manager

<center>

<img src="https://github.com/EvelynGitHub/assets/blob/main/plant-manager/plant-manager.png" alt="Foto de Capa" />

</center>
<center>

![GitHub](https://img.shields.io/github/issues/EvelynGitHub/plant-manager)

</center>

# Sobre o Projeto:

<!-- [Demo do Projeto](https://link.para.demo.caso.houver) -->
Este projeto foi realizado durante uma NLW e tem como objetivo ser uma App que auxilia as pessoas a cuidarem de suas plantinhas.
Cada tipo de planta tem um cuidado diferente e o principal cuidado é relacionado a quantidade de água, por isso, o App a procura notificar apenas no dia e hora que a planta selecionada precisa ser regada.

As principais funções do projeto são:
- Cadastrar alerme para cada planta;
- Trabalhar com pacote de notificação do Expo
- API simulada usando Json server

## Layout mobile

<!-- ![Mobile 1](https://github.com/seu_user/pasta/mobile1.png) ![Mobile 2](https://github.com/seu_user/pasta/mobile2.png) 
![Mobile 1](https://github.com/EvelynGitHub/assets-readme/blob/main/img/home-mobile.png) ![Mobile 2](https://github.com/EvelynGitHub/assets-readme/blob/main/img/home-mobile.png)-->

# Tecnologias utilizadas:

## Back end

- Node

## Front end

- TypeScript
- React
- React Native
- Expo

## Implantação

Pode-se ser testado utilizando o proprio telefone celular.


# Por onde começar:

## Back end

Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/EvelynGitHub/plant-manager.git

# entrar na pasta do projeto 
cd plant-manager/

# instalar dependências
yarn install
# ou
npm i

# executar o projeto
yarn start
# ou
npm start
# ou
expo start
```

# Como começar a usar:

Agora que já instalou as dependencias vai precisar executar o json-server para simular uma API, será algo como o comando abaixo.

```hash
# Executa json-server
json-server ./src/services/server.json --host 192.168.0.111 --port 3333 --delay 700
```
Caso não funcione pode ser por causa do seu host ser diferente de <code> 192.168.0.111 </code>. Nesse caso você vai precisar descobri o seu host e, depois disso abir o arquivo <code> api.js </code> dentro de <code> /src/services/api.js </code>. Agora vai precisar executar o json-server de novo com o novo host.

Prontinho, agora é com você explorar o app!

# Autor(es)

**Evelyn Francisco Brandão**

https://www.linkedin.com/in/evelyn-brandão
github.com/EvelynGitHub/
