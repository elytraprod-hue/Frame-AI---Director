# 🎬 FRAME.AI - Guia de Teste de Login e Acesso

## Fluxo de Teste Rápido

### 1️⃣ **Acesse o site**
```
https://frame-ai-director-frame-ai-landing.vercel.app/
```

### 2️⃣ **Simular Compra (Gerar Código de Acesso)**
Abra o **Console do Navegador** (F12) e execute:

```javascript
// Simula um pagamento PIX e gera um código de acesso
const accessCode = 'FRAME-' + Array(4).fill(0).map(() => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'[Math.floor(Math.random()*36)]).join('');
const newUser = {
  id: `USER-${Date.now()}`,
  email: 'teste@example.com',
  name: 'Usuário Teste',
  plan: '02', // Profissional (acesso a todas ferramentas)
  accessCode: accessCode,
  createdAt: new Date().toISOString(),
};
const users = JSON.parse(localStorage.getItem('frame_users') || '[]');
users.push(newUser);
localStorage.setItem('frame_users', JSON.stringify(users));
console.log('✅ Código gerado:', accessCode);
```

### 3️⃣ **Fazer Login**
Copie o código gerado (ex: `FRAME-A1B2`) e:
1. Vá para `/login`
2. Cole o código no campo
3. Clique em "Acessar"

### 4️⃣ **Usar as Ferramentas**
Após login bem-sucedido:
1. Você será redirecionado para `/tools`
2. Verá todas as 6 ferramentas disponíveis
3. Clique em qualquer uma para abrir o Studio
4. Escreva um prompt e clique "Gerar"

## 📊 Ferramentas Disponíveis

| # | Nome | ID | Status |
|---|------|----|----|
| 01 | Gerador de Roteiro | `01` | ✅ |
| 02 | Callsheet | `02` | ✅ |
| 03 | Decupagem Técnica | `03` | ✅ |
| 04 | Orçamento | `04` | ✅ |
| 05 | Proposta Comercial | `05` | ✅ |
| 06 | Relatório de Produção | `06` | ✅ |

## 🔴 Possíveis Problemas e Soluções

### ❌ Código não funciona no login?
**Solução**: Certifique-se de que:
1. O código foi gerado corretamente
2. Está em MAIÚSCULAS no console
3. Não há espaços extras

### ❌ Não consegue gerar conteúdo na IA?
**Verificar**:
1. A variável de ambiente `GROQ_API_KEY` está configurada no Vercel
2. A API está respondendo em: `/api/chat`
3. Verificar os logs: F12 → Console → tab "Network"

### ❌ Layout estranho ou página não carrega?
**Limpar cache**:
```javascript
// No console do navegador:
localStorage.clear();
sessionStorage.clear();
location.reload();
```

## 🚀 API de Autenticação

### Função de Login (client-side)
```typescript
// src/contexts/AppContext.tsx
const login = useCallback(async (accessCode: string) => {
  const user = await loginWithAccessCode(accessCode);
  setUser(user);
  return true;
}, []);
```

### Armazenamento
- Usuários: `localStorage['frame_users']`
- Sessão atual: `localStorage['frame_user']`
- Dados de teste existem em `localStorage`

## 📞 Próximos Passos

Se tudo estiver funcionando:
1. ✅ Teste o login com diferentes códigos
2. ✅ Teste todas as ferramentas
3. ✅ Gere conteúdo na IA
4. ✅ Verifique se a IA está usando a API Groq real (não mock)

Se houver erro:
1. Compartilhe a mensagem de erro exata
2. Abra F12 → Console e capture o output
3. Verifique a aba "Network" para padrões de resposta
