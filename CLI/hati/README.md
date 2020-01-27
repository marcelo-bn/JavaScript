# CLI (Command Line Interface) utilizando NodeJs e Gluegun
> Marcelo Bittencourt do Nascimento Filho
>
> Janeiro de 2020

## Introdução

A proposta inicial deste projeto é estudar as principais ferramentas disponibilizadas pelo *framework* de construção de CLI [Gluegun](https://infinitered.github.io/gluegun/#/) assim como aperfeiçoar os conhecimentos na linguagem JavaScript.

## Inicializando o projeto

Para o desenvolvimento desse projeto, deve-se ter instalado em sua máquina o [NodeJs](https://nodejs.org/en/) assim como o [yarn](https://yarnpkg.com). Caso esteja utilizando o sistema operacional MacOs, é possível realizar o *download* do `yarn` utilizando o gerenciador de pacotes [Homebrew](https://brew.sh) com o seguinte comando: `brew install yarn`.

Após a instalação do `yarn`, já é possível instalar o *Framework* Gluegun com o seguinte comando:

`yarn global add gluegun`

Com o comando abaixo será criado um diretório (com o nome passado como parâmetro) com toda a estrutura para o desenvolvimento da CLI (neste caso o nome escolhido para a CLI foi `hati`).

 `gluegun new 'nomeDiretorio'`
 
Finalizando a criação do diretório, deve-se entrar nele realizar o seguinte comando que fará com o que os comandos criados na CLI sejam interpretados globalmente pela sua máquina.
 
 `yarn link`

Por fim, foi necessário instalar o módulo `fs-jetpack` para poder se trabalhar com arquivos através da CLI.

`npm install fs-jetpack`

## Funções utilizáveis da CLI desenvolvida

1. Caminho do diretório atual: `hati cwd`
2. Criar arquivo no diretório atual: `hati create 'nome.extensao'`
3. Transformar dados em formato [JSON](https://www.json.org/json-en.html): Com esse comando, o usuário fornecerá como parâmetro uma frase com a seguinte sintaxe: `atributo:valor`. Caso a frase tenha mais campos deve-se separá-los por vírgula como: `atributo:valor,atributo:valor`. 

