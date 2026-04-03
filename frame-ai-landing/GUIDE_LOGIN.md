# 🎬 FRAME.AI - Guia de Login e Acesso às Ferramentas

## ✅ Status Atual

Site **ONLINE** em: https://frame-ai-director-frame-ai-landing.vercel.app/

### Componentes Funcionando:
- ✅ Frontend Vite (React + TypeScript)
- ✅ Sistema de Autenticação via Código de Acesso
- ✅ Todas as 6 ferramentas disponíveis
- ✅ API Groq integrada para geração de IA

---

## 📋 Fluxo de Uso Completo

###Step 1: Gerar Código de Acesso (Simulando PIX)
Abra o console do navegador (F12) na página inicial e execute:

```javascript
// Gera um usuário e código de acesso para teste
const accessCode = 'FRAME-' + Array(4).fill(0).map(() => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'[Math.floor(Math.random()*36)]).join('');

const newUser = {
  id: `USER-${Date.now()}`,
  email: 'teste@example.com',
  name: 'Usuário Teste',
  plan: '02', // Plano Profissional (acesso total)
  accessCode: accessCode,
  createdAt: new Date().toISOString(),
};

const users = JSON.parse(localStorage.getItem('frame_users') || '[]');
users.push(newUser);
localStorage.setItem('frame_users', JSON.stringify(users));

console.log('✅ Código gerado:', accessCode);
alert('Código gerado: ' + accessCode + '\n\nCopie e acesse /login');
```

### Step 2: Fazer Login
1. Navegue para: `/login`
2. Cole o código gerado (ex: `FRAME-A1B2C3D4`)
3. Clique em **"Acessar"**

### Step 3: Acessar as Ferramentas
Após login bem-sucedido, você será redirecionado para `/tools` com acesso a:

| # | Ferramenta | Descrição |
|---|-----------|-----------|
| **01** | Gerador de Roteiro | Cria roteiros em formato profissional |
| **02** | Callsheet Inteligente | Gera callsheets com cronograma |
| **03** | Decupagem Técnica | Cria plano de filmagem detalhado |
| **04** | Orçamento Automático | Estima orçamentos realistas |
| **05** | Proposta Comercial | Gera propostas para clientes |
| **06** | Relatório de Produção | Cria relatórios executivos |

### Step 4: Usar a IA
1. Clique em qualquer ferramenta e abra o **Studio**
2. Digite um prompt (ex: "Uma cena de ação em um deserto")
3. Clique em **"Gerar"**
4. A IA (Groq Llama 3) processará e retornará o resultado

---

## 🔧 Variáveis de Ambiente Necessárias

Para que a IA funcione 100%, é necessário configurar no Vercel:

```
GROQ_API_KEY = sua_chave_api_groq
```

Se já está configurado, a IA deve funcionar automaticamente.

---

## 🐛 Troubleshooting

### ❌ "Código inválido ou expirado"
**Solução**: Certifique-se de que:
- O código foi gerado no console SEM erros
- Você está digitando em **MAIÚSCULAS**
- Se possível, copie e cole em vez de digitar

### ❌ "Não consigo gerar conteúdo na IA"
**Verifique**:
1. Está logado? (deve aparecer seu nome no canto superior)
2. A IA está tentando chamar `/api/chat` (F12 → Network)
3. Se retorna erro 500: talvez `GROQ_API_KEY` não esteja configurada

### ❌ "Página em branco ou não carrega"
**Limpe o cache**:
```javascript
localStorage.clear();
sessionStorage.clear();
location.reload();
```

---

## 📊 Arquitetura de Autenticação

**Frontend (client-side)**:
- Armazena usuário no `localStorage['frame_user']`
- Valida código contra lista em `localStorage['frame_users']`
- Sem backend necessário para autenticação básica

**Backend (API Groq)**:
- Endpoint: `POST /api/chat`
- Requer: `GROQ_API_KEY` do ambiente
- Retorna: Conteúdo gerado pela IA

---

##🚀 Próximos Passos Recomendados

1. **Teste o fluxo completo**:
   - [ ] Gerar código no console
   - [ ] Fazer login
   - [ ] Acessar todas as ferramentas
   - [ ] Gerar conteúdo com a IA

2. **Se a IA não funcionar**:
   - [ ] Verificar se `GROQ_API_KEY` está em Vercel Settings
   - [ ] Testar a API diretamente: 
     ```bash
     curl -X POST https://frame-ai-director-frame-ai-landing.vercel.app/api/chat \
       -H "Content-Type: application/json" \
       -d '{"toolId":"01","input":"test"}'
     ```

3. **Melhorias Futuras**:
   - Integração com um banco de dados real (não localStorage)
   - Sistema de pagamento real (Stripe, PagSeguro, etc)
   - Email confirmation após compra
   - Prédefinição automática de código no email

---

## 📞 Links Úteis

- **Site**: https://frame-ai-director-frame-ai-landing.vercel.app/
- **Login**: https://frame-ai-director-frame-ai-landing.vercel.app/login
- **Ferramentas**: https://frame-ai-director-frame-ai-landing.vercel.app/tools
- **GitHub**: https://github.com/elytraprod-hue/Frame-AI---Director
