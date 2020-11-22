# Teste de Front-end Pleno Santos Lab

Este repositório contém o teste para a vaga desenvolvedor front-end pleno para a Santos Lab. Primeiro clone este repositório (sem usar fork) em seu github. Para instalar e iniciar o servidor utilize os seguintes comandos dentro da pasta do repositório no seu terminal com o node (v14.3.0) instalado.

### `npm install`

Instala as dependências do node

### `npm start`

Cria o servidor de testes locais

## Arquitetura de Arquivos

 - `./src` -- Arquivos `.ts` de configuração de libs
 - `./src/assets` -- Arquivos que serão utilizados para simular sua API!
 - `./src/pages` -- Arquivos `.tsx` que descrevem componentes React que representam uma página acessável pelo Router, ou pastas contendo um componente React principal agregador e subcomponentes específicos
 - `./src/state` -- Arquivos `.ts` de slices do Redux Toolkit que abrigam o estado global da aplicação

# Como funciona o teste

Primeiramente o objetivo do teste é avaliar sua capacidade de lidar com todas as etapas comuns de desenvolvimento React que utilizará no seu dia a dia na empresa. O teste foi feito para ser uma prova de conceito simples, mas no front-end sempre há espaço para inovações, mesmo com os requisitos mais simples!

## Os requisitos Funcionais

 - **Página de Login**: Nesta página o usuário deverá acessar a plataforma, inserindo seu usuário e senha, sendo redirecionado para a página de propriedades se usuário e senha estiverem corretos, e exibindo um erro se houver algum dado incorreto. De preferência utilize o `react-hook-form`;
 - **Página de Propriedades**: Esta página deverá exibir as propriedades associadas com seu usuário, ou exibir todas caso seja do perfil `admin`. Cada fazenda deverá ser exibida em um mapa individual ou um mapa exibindo todas elas (usando leaflet, ou qualquer lib que preferir). A forma de exibir as outras informações e quais informações deve exbibir fica a gosto de você! 

## Os requisitos Técnicos

 - O conteúdo de dados da aplicação deverá ser gerenciado pelo Redux, de preferência utilizando o *redux-toolkit*, mas com liberdade para utilizar *redux* puro. Normalização dos dados usando `normalizr` é encorajada;
 - Os componentes visuais precisam ser desenvolvidos utilizando a *Material-UI* que já está instalada no template. Fique a vontade caso queira adicionar Styled Components ou similares;
 - Os dados da "API" que está na pasta assets podem ser acessadas diretamente como JSON, não há necessidade de simular um `fetch`. Mas ainda há a necessidade de obtê-las através de um redux-thunk.
 
## Sobre o template

Já existem algumas *libs* instaladas no template, e com elas você consegue cumprir maior parte do proposto. Só sendo necessária uma lib de mapas de sua escolha. No entanto se sentir necessidade de mais alguma ferramenta, você pode inclui-la sem problema nenhum. Na verdade você pode modificar qualquer parte do template, exceto os dados da pasta `assets`!

No momento que instalar e rodar o servidor local, você perceberá que haverá um erro no `App.tsx`, isto está acontecendo pois ainda não há um componente para as Propriedades e Login, e você que irá providênciá-lo.

## Forma de avaliação

-- O mais importante do teste é o cumprimento dos Requisitos Funcionais e Técnicos!

-- A clareza do seu código também será avaliada.

-- Assim como a organização dos arquivos.

-- A natureza dos dados das fazendas é um tanto quanto permissiva, isto pode ser explorado mais a fundo para se obter *bonus points*!

-- A identidade visual e UX do teste também será avaliada como *bonus points*!

 

 
