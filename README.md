# StanceSkateboard

Documentação de uso e desenvolvimento do projeto `StanceSkateboard`, um site estático em HTML, CSS e JavaScript criado para apresentar equipamentos de proteção para skate.

---

## Visão Geral do Projeto

Este projeto é um site de marketing e catálogo para a marca `StanceSkateboard`. Ele é composto por páginas estáticas que apresentam:

- Página inicial com hero, valores e call to action.
- Página de catálogo com produtos de proteção.
- Página de contato com canais de atendimento e formulário.
- Página sobre com missão e valores da marca.

O projeto é leve, totalmente responsivo e utiliza apenas HTML, CSS e JavaScript vanilla.

---

## Estrutura de Arquivos

- `index.html` — página inicial do site.
- `catalogo.html` — página de catálogo com produtos e links para contato.
- `sobre.html` — página institucional explicando a missão, valores e cultura.
- `contato.html` — página com informações de contato e formulário.
- `styles.css` — estilo global do site e layout responsivo.
- `script.js` — scripts de interação, incluindo menu mobile, navegação ativa e formulário.
- `assets/` — pasta de imagens e recursos visuais usados no site.
- `README.md` — documentação de uso do projeto.

---

## Como Usar

### Abrir o site localmente

1. Abra a pasta do projeto em um navegador.
2. Abra o arquivo `index.html` diretamente.

> Para um resultado mais próximo de produção, use um servidor local estático, como `Live Server`, `http-server`, `serve` ou outra ferramenta.

### Navegação do site

O menu principal oferece acesso a:

- `Início` (`index.html`)
- `Catálogo` (`catalogo.html`)
- `Sobre` (`sobre.html`)
- `Contato` (`contato.html`)

No modo mobile, o botão de menu (`menu-btn`) abre e fecha o menu de navegação.

### Uso das páginas

#### `index.html`

- Mostra o `hero` com imagem de fundo e destaque da coleção.
- Exibe valores e benefícios da marca.
- Contém botões para ir ao catálogo e à página sobre.
- Inclui uma faixa animada (`marquee`) com termos do universo do skate.

#### `catalogo.html`

- Lista os produtos principais: Mãozinha, Joelheira, Cotoveleira e Capacete.
- Cada produto tem imagem, descrição e link para contato via WhatsApp.
- Ideal para ser usado como vitrine de vendas.

#### `sobre.html`

- Apresenta a proposta da marca.
- Exibe missão, valores e posicionamento de comunidade.
- Tem um CTA final para direcionar os visitantes ao catálogo ou contato.

#### `contato.html`

- Mostra canais de contato: WhatsApp e Instagram.
- Inclui um formulário com campos para nome, email, assunto e mensagem.
- O formulário atual funciona em modo de demonstração e previne envio real.

---

## Comportamento do JavaScript (`script.js`)

O arquivo `script.js` implementa as seguintes funcionalidades:

- Menu mobile: abre e fecha o menu quando o botão é clicado.
- Ícone do menu: troca entre ícone de hambúrguer e ícone de fechar.
- Navegação ativa: marca a página atual no menu com a classe `active`.
- Ano dinâmico no rodapé: atualiza o elemento `#year` para o ano atual.
- Formulário de contato: previne envio padrão e exibe alerta de demonstração.

### Detalhes do formulário

O formulário em `contato.html` não envia dados para servidor. Ele apenas:

- previne o comportamento padrão de `submit`
- mostra um `alert` com mensagem de confirmação
- reinicia os campos do formulário

Para enviar de verdade, é necessário integrar com um serviço de backend ou serviço de terceiros (email, Google Forms, Formspree, Netlify Forms, etc.).

---

## Personalização do Projeto

### Atualizar textos e links

- Altere os títulos, descrições e textos diretamente nos arquivos HTML.
- Atualize URLs do WhatsApp, Instagram ou email nos links de contato.
- Os elementos do menu usam o atributo `data-nav` para identificar a página ativa.

### Ajustar cores e tipografia

- Edite `styles.css` para alterar variáveis CSS em `:root`.
- As variáveis principais são:
  - `--background`
  - `--foreground`
  - `--primary`
  - `--accent`
  - `--card`
  - `--border`

### Modificar o catálogo de produtos

- Adicione ou remova `article.product-card` em `catalogo.html`.
- Atualize imagens em `assets/` e caminhos nas tags `<img>`.
- Ajuste os textos e o link do botão de contato para redirecionar onde desejar.

### Imagens e recursos

- Substitua imagens dentro de `assets/` mantendo os mesmos nomes ou atualize os atributos `src` nos HTMLs.
- Use `loading="lazy"` para imagens de catálogo e páginas para melhorar performance.

---

## Deploy e publicação

Você pode publicar este projeto em qualquer hospedagem de sites estáticos.

### Opções comuns

- GitHub Pages
- Netlify
- Vercel
- Surge
- Firebase Hosting

### Passo rápido com GitHub Pages

1. Faça commit dos arquivos no repositório.
2. Configure o branch `main` ou `gh-pages` como origem no GitHub Pages.
3. Acesse a URL gerada pela plataforma.

---

## Observações Técnicas

### SEO e metadados

Cada página contém tags `<meta>` importantes:

- `charset="UTF-8"`
- `viewport`
- `description`
- `og:title`
- `og:description`
- `og:type`

Isso garante melhor apresentação em redes sociais e busca.

### Responsividade

O site é projetado com CSS responsivo e usa consultas `@media` para suportar:

- telas móveis
- tablets
- desktops

### Acessibilidade

- O menu possui `aria-label` para o botão de navegação.
- Links externos usam `rel="noreferrer"` e `target="_blank"`.
- Botões e links têm foco visual definido pelo navegador padrão.

---

## Sugestões de melhoria

- Adicionar backend ou integração de envio de formulário.
- Incluir um carrinho de compras ou sistema de pedido.
- Criar animações mais avançadas com CSS e JS.
- Adicionar tradução para outros idiomas.
- Incluir tags `alt` mais descritivas e melhorias de acessibilidade.

---

## Como contribuir

1. Faça um fork do projeto.
2. Crie uma branch com a melhoria.
3. Atualize os arquivos e teste localmente.
4. Envie um pull request com descrição das mudanças.

---

## Resumo rápido de uso

1. Abra `index.html` no navegador.
2. Navegue pelas páginas usando o menu.
3. Em `catalogo.html`, clique em "Falar com vendedor" para contato.
4. Em `contato.html`, preencha o formulário para demonstrar envio.
5. Edite `styles.css` para ajustar o visual.
6. Implemente backend se precisar de envio real do formulário.
