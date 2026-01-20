# 📧 Configuração do Sistema de Email do Portfólio

## 🎯 Visão Geral

O formulário de contato do seu portfólio agora envia emails diretamente para você usando Nodemailer. Quando um visitante preenche o formulário, você recebe um email formatado com as informações dele.

## 🔧 Configuração

### 1. Escolha seu provedor de email

Você pode usar qualquer serviço SMTP. Aqui estão as opções mais comuns:

#### **Gmail (Recomendado para uso pessoal)**

1. Ative a verificação em duas etapas na sua conta Google
2. Gere uma "Senha de app" em: https://myaccount.google.com/apppasswords
3. Configure no `.env.local`:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=seu-email@gmail.com
   SMTP_PASS=sua-senha-de-app-16-digitos
   SMTP_FROM=seu-email@gmail.com
   RECIPIENT_EMAIL=seu-email@gmail.com
   ```

#### **Outlook/Hotmail**

```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=seu-email@outlook.com
SMTP_PASS=sua-senha
SMTP_FROM=seu-email@outlook.com
RECIPIENT_EMAIL=seu-email@outlook.com
```

#### **SendGrid (Recomendado para produção)**

1. Crie uma conta em https://sendgrid.com
2. Gere uma API Key
3. Configure:
   ```env
   SMTP_HOST=smtp.sendgrid.net
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=apikey
   SMTP_PASS=sua-api-key-do-sendgrid
   SMTP_FROM=seu-email-verificado@dominio.com
   RECIPIENT_EMAIL=seu-email@dominio.com
   ```

#### **Mailtrap (Para testes)**

Perfeito para testar sem enviar emails reais:
1. Crie conta em https://mailtrap.io
2. Configure:
   ```env
   SMTP_HOST=smtp.mailtrap.io
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=seu-username-mailtrap
   SMTP_PASS=sua-senha-mailtrap
   SMTP_FROM=test@test.com
   RECIPIENT_EMAIL=test@test.com
   ```

### 2. Configure as variáveis de ambiente

Edite o arquivo `.env.local` na raiz do projeto com suas credenciais:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=seu-email@gmail.com
SMTP_PASS=sua-senha-de-app
SMTP_FROM=seu-email@gmail.com
RECIPIENT_EMAIL=seu-email@gmail.com
```

### 3. Reinicie o servidor de desenvolvimento

Após configurar as variáveis de ambiente:

```bash
npm run dev
```

## ✅ Testando

1. Acesse seu portfólio em `http://localhost:3000`
2. Navegue até a seção "Contato"
3. Preencha o formulário com dados de teste
4. Clique em "Enviar mensagem"
5. Verifique sua caixa de entrada!

## 🎨 O que foi implementado

### ✨ Recursos

- **Formulário completo** com nome, email e mensagem
- **Validação de campos** no frontend e backend
- **Proteção anti-spam** com honeypot
- **Email HTML formatado** com design profissional
- **Feedback visual** para o usuário (loading, sucesso, erro)
- **Tratamento de erros** robusto

### 📁 Arquivos modificados

- [`app/api/send/route.ts`](app/api/send/route.ts) - API que envia os emails
- [`app/components/pages/contact/contact-section/index.tsx`](app/components/pages/contact/contact-section/index.tsx) - Formulário de contato
- [`.env.local`](.env.local) - Variáveis de ambiente

## 🔒 Segurança

- **Nunca** commite o arquivo `.env.local` no Git
- Use senhas de aplicativo, não sua senha principal
- O `.env.local` já está no `.gitignore`
- Em produção (Vercel/Netlify), configure as variáveis de ambiente nas configurações da plataforma

## 🚀 Deploy (Vercel)

Ao fazer deploy no Vercel:

1. Vá em Settings → Environment Variables
2. Adicione cada variável:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_SECURE`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `SMTP_FROM`
   - `RECIPIENT_EMAIL`
3. Faça redeploy do projeto

## 🐛 Solução de Problemas

### "Erro ao enviar mensagem"

- Verifique se todas as variáveis de ambiente estão configuradas
- Confirme que as credenciais estão corretas
- Para Gmail, certifique-se de usar senha de app, não sua senha normal

### "Configuração ausente"

- Reinicie o servidor após modificar o `.env.local`
- Verifique se não há espaços extras nas variáveis

### Email não chega

- Verifique a pasta de spam
- Confirme que o `RECIPIENT_EMAIL` está correto
- Use Mailtrap para testar se o envio está funcionando

## 📚 Recursos Adicionais

- [Nodemailer Documentation](https://nodemailer.com/)
- [Gmail App Passwords](https://support.google.com/accounts/answer/185833)
- [SendGrid Documentation](https://docs.sendgrid.com/)

## 💡 Dicas

- Use **SendGrid** ou **AWS SES** para produção (maior confiabilidade)
- Use **Mailtrap** para desenvolvimento
- Configure notificações também por Discord (webhook) como backup
- Adicione rate limiting para evitar spam

---

✅ **Pronto!** Agora os visitantes do seu portfólio podem entrar em contato diretamente com você.
