# FRAME.AI — Guia de Testes

## 🧪 Como Testar Todas as Funcionalidades

### 1. **Teste de Navegação**

#### 1.1 Navegação por Links
- [ ] Clique em "Ferramentas" na navegação → Deve ir para /tools
- [ ] Clique em "Preços" na navegação → Deve ir para /pricing
- [ ] Clique em "Contato" na navegação → Deve ir para /contact
- [ ] Clique em "Sobre" na navegação → Deve fazer scroll para seção
- [ ] Clique em "Blog" na navegação → Deve fazer scroll para seção

#### 1.2 Navegação por Botões
- [ ] Clique em "Voltar" em qualquer página → Deve voltar
- [ ] Clique em logo "FRAME.AI" → Deve ir para home

#### 1.3 Navegação por URL
- [ ] Digite `/tools` na URL → Deve mostrar lista de ferramentas
- [ ] Digite `/pricing` na URL → Deve mostrar página de preços
- [ ] Digite `/contact` na URL → Deve mostrar página de contato
- [ ] Digite `/success` na URL → Deve mostrar página de sucesso
- [ ] Digite `/tools/01` na URL → Deve mostrar detalhes da ferramenta 1
- [ ] Digite `/inexistente` na URL → Deve mostrar página 404

---

### 2. **Teste de Modais**

#### 2.1 Modal de Checkout
- [ ] Clique em "Começar Agora" no Hero → Modal abre
- [ ] Clique em "Começar Agora" em um plano → Modal abre
- [ ] Clique em "Começar Teste Grátis" em detalhes da ferramenta → Modal abre
- [ ] Clique em X ou fora do modal → Modal fecha
- [ ] Pressione ESC → Modal fecha

#### 2.2 Modal de Demo
- [ ] Clique em "Ver Demo" no Hero → Modal abre
- [ ] Clique em "Agendar Demo" em detalhes da ferramenta → Modal abre
- [ ] Clique em X ou fora do modal → Modal fecha
- [ ] Pressione ESC → Modal fecha

#### 2.3 Modal de Contato
- [ ] Clique em "Contato" na navegação → Vai para página de contato
- [ ] Preencha formulário e envie → Deve funcionar

---

### 3. **Teste de Formulários**

#### 3.1 Formulário de Contato
- [ ] Deixe campos vazios e clique "Enviar" → Deve mostrar erros
- [ ] Preencha email inválido → Deve mostrar erro
- [ ] Preencha todos os campos corretamente → Deve enviar
- [ ] Após envio → Deve mostrar toast de sucesso
- [ ] Após envio → Modal deve fechar
- [ ] Verifique localStorage `frame_contacts` → Deve ter novo contato

#### 3.2 Formulário de Checkout
- [ ] Deixe campos vazios → Deve mostrar erros
- [ ] Preencha email inválido → Deve mostrar erro
- [ ] Preencha cartão com menos de 16 dígitos → Deve mostrar erro
- [ ] Preencha validade em formato errado → Deve mostrar erro
- [ ] Preencha todos os campos corretamente → Deve enviar
- [ ] Após envio → Deve mostrar toast de sucesso
- [ ] Após envio → Deve redirecionar para /success
- [ ] Verifique localStorage `frame_orders` → Deve ter novo pedido
- [ ] Verifique localStorage `frame_user` → Deve ter usuário criado

#### 3.3 Formulário de Demo
- [ ] Deixe campos vazios → Deve mostrar erros
- [ ] Preencha email inválido → Deve mostrar erro
- [ ] Preencha todos os campos corretamente → Deve enviar
- [ ] Após envio → Deve mostrar toast de sucesso
- [ ] Modal deve fechar
- [ ] Verifique localStorage `frame_demos` → Deve ter novo demo

---

### 4. **Teste de Feedback Visual**

#### 4.1 Loading States
- [ ] Clique em "Enviar" em qualquer formulário → Botão deve mostrar spinner
- [ ] Botão deve ficar desabilitado durante envio
- [ ] Texto deve mudar para "Enviando..." / "Processando..."
- [ ] Após conclusão → Botão volta ao normal

#### 4.2 Toasts
- [ ] Após envio bem-sucedido → Toast verde aparece
- [ ] Toast desaparece automaticamente após 5 segundos
- [ ] Clique em X do toast → Desaparece imediatamente
- [ ] Múltiplos toasts → Devem aparecer em fila

#### 4.3 Mensagens de Erro
- [ ] Deixe campo obrigatório vazio → Mensagem de erro aparece
- [ ] Mensagem deve estar em vermelho
- [ ] Mensagem deve desaparecer ao corrigir o campo

#### 4.4 Animações
- [ ] Página deve fazer fade-in ao carregar
- [ ] Cards devem fazer stagger animation
- [ ] Botões devem fazer hover animation
- [ ] Modais devem fazer slide-in animation

---

### 5. **Teste de Fluxos Completos**

#### 5.1 Fluxo: Explorar Ferramenta → Checkout
```
1. Home
2. Clique em "Ferramentas" na nav
3. Veja lista de 6 ferramentas
4. Clique em uma ferramenta
5. Veja detalhes completos
6. Clique em "Começar Teste Grátis"
7. Modal de checkout abre
8. Preencha formulário
9. Clique em "Confirmar Pagamento"
10. Veja página de sucesso
11. Verifique localStorage para dados salvos
```

#### 5.2 Fluxo: Hero → Demo
```
1. Home
2. Clique em "Ver Demo" no Hero
3. Modal de demo abre
4. Preencha email e nome
5. Clique em "Agendar Demo"
6. Veja toast de sucesso
7. Modal fecha
8. Verifique localStorage para demo salvo
```

#### 5.3 Fluxo: Contato
```
1. Home
2. Clique em "Contato" na nav
3. Veja página de contato
4. Preencha formulário
5. Clique em "Enviar Mensagem"
6. Veja toast de sucesso
7. Verifique localStorage para contato salvo
```

#### 5.4 Fluxo: Preços → Checkout
```
1. Home
2. Clique em "Preços" na nav
3. Veja 3 planos
4. Clique em "Começar Agora" de um plano
5. Modal de checkout abre
6. Plano selecionado deve estar pré-preenchido
7. Preencha formulário
8. Clique em "Confirmar Pagamento"
9. Veja página de sucesso
```

---

### 6. **Teste de Responsividade**

#### 6.1 Desktop (1920px)
- [ ] Todos os elementos visíveis
- [ ] Layout em 3 colunas para cards
- [ ] Navegação horizontal

#### 6.2 Tablet (768px)
- [ ] Layout em 2 colunas para cards
- [ ] Navegação horizontal
- [ ] Modais redimensionam corretamente

#### 6.3 Mobile (375px)
- [ ] Layout em 1 coluna para cards
- [ ] Navegação responsiva
- [ ] Modais ocupam tela inteira
- [ ] Botões são clicáveis (mínimo 44px)
- [ ] Texto legível sem zoom

---

### 7. **Teste de Acessibilidade**

#### 7.1 Navegação por Teclado
- [ ] Tab → Navega entre elementos
- [ ] Shift+Tab → Navega para trás
- [ ] Enter → Clica em botões
- [ ] ESC → Fecha modais

#### 7.2 Leitura por Screen Reader
- [ ] Todos os botões têm labels
- [ ] Todos os inputs têm labels
- [ ] Imagens têm alt text
- [ ] Headings têm hierarquia correta

#### 7.3 Contraste
- [ ] Texto é legível contra fundo
- [ ] Cores não são o único indicador
- [ ] Focus ring é visível

---

### 8. **Teste de Persistência**

#### 8.1 localStorage
- [ ] Abra DevTools → Application → localStorage
- [ ] Procure por `frame_user`, `frame_contacts`, `frame_orders`, `frame_demos`
- [ ] Dados devem estar salvos em JSON
- [ ] Dados devem persistir após refresh

#### 8.2 Refresh de Página
- [ ] Após checkout → Refresh → Usuário ainda logado
- [ ] Após contato → Refresh → Dados ainda salvos
- [ ] Feche aba → Abra nova aba → Dados ainda lá

---

### 9. **Teste de Erros**

#### 9.1 Erro de Validação
- [ ] Deixe email vazio → Mensagem de erro
- [ ] Preencha email inválido → Mensagem de erro
- [ ] Deixe nome vazio → Mensagem de erro

#### 9.2 Erro de Rede (Simulado)
- [ ] Mock API tem 5-10% de chance de erro
- [ ] Se erro ocorrer → Toast vermelho aparece
- [ ] Mensagem de erro é clara
- [ ] Usuário pode tentar novamente

#### 9.3 Erro 404
- [ ] Digite URL inválida → Página 404 aparece
- [ ] Clique em "Go Home" → Volta para home

---

### 10. **Teste de Performance**

#### 10.1 Carregamento
- [ ] Página home carrega em < 3 segundos
- [ ] Navegação entre páginas é rápida
- [ ] Modais abrem instantaneamente

#### 10.2 Animações
- [ ] Animações são suaves (60fps)
- [ ] Sem travamentos
- [ ] Sem lag ao interagir

---

## 📊 Checklist de Testes

### Navegação
- [ ] Links funcionam
- [ ] URLs funcionam
- [ ] Scroll suave
- [ ] Back button funciona

### Modais
- [ ] Abrem corretamente
- [ ] Fecham corretamente
- [ ] ESC fecha
- [ ] Clique fora fecha

### Formulários
- [ ] Validação funciona
- [ ] Envio funciona
- [ ] Erros aparecem
- [ ] Sucesso redireciona

### Feedback
- [ ] Toasts aparecem
- [ ] Loading states funcionam
- [ ] Mensagens de erro claras
- [ ] Animações suaves

### Fluxos
- [ ] Explorar ferramenta funciona
- [ ] Checkout funciona
- [ ] Demo funciona
- [ ] Contato funciona

### Responsividade
- [ ] Desktop funciona
- [ ] Tablet funciona
- [ ] Mobile funciona

### Acessibilidade
- [ ] Teclado funciona
- [ ] Screen reader funciona
- [ ] Contraste adequado

### Persistência
- [ ] localStorage funciona
- [ ] Dados persistem
- [ ] Refresh funciona

### Erros
- [ ] Validação funciona
- [ ] Erros tratados
- [ ] 404 funciona

### Performance
- [ ] Carregamento rápido
- [ ] Animações suaves
- [ ] Sem lag

---

## 🚀 Resultado Esperado

Após passar em todos os testes:

✅ Aplicação funcional completa
✅ Todos os fluxos funcionam
✅ Feedback visual adequado
✅ Responsivo em todos os tamanhos
✅ Acessível
✅ Rápido
✅ Sem erros no console
✅ Pronto para produção

---

## 💡 Dicas

1. **Abra DevTools** (F12) para ver console
2. **Use Application tab** para verificar localStorage
3. **Use Network tab** para ver requisições (mock delay)
4. **Use Responsive Design Mode** (Ctrl+Shift+M) para testar mobile
5. **Use Lighthouse** (DevTools → Lighthouse) para auditoria

---

## 📝 Relatório de Testes

Após completar todos os testes, preencha:

```
Data: __/__/____
Testador: ________________
Navegador: ________________
Versão: ________________

Testes Passados: ___/___
Testes Falhados: ___/___
Bugs Encontrados: ___

Observações:
_________________________________
_________________________________
_________________________________

Pronto para Produção: [ ] Sim [ ] Não
```

---

## 🐛 Bugs Encontrados

Se encontrar bugs, documente:

```
Bug #1:
- Descrição: ________________
- Como reproduzir: ________________
- Resultado esperado: ________________
- Resultado atual: ________________
- Severidade: [ ] Crítica [ ] Alta [ ] Média [ ] Baixa
```

---

**Boa sorte nos testes! 🚀**
