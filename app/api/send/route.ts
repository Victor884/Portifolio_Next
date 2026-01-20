import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Campos obrigatórios ausentes.' }, { status: 400 })
    }

    // Validação básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Email inválido.' }, { status: 400 })
    }

    // Configuração do Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true', // true para 465, false para outras portas
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email para você
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `📬 Nova mensagem do portfólio - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 20px; }
              .field-label { font-weight: bold; color: #555; margin-bottom: 5px; }
              .field-value { padding: 10px; background: white; border-radius: 4px; border: 1px solid #e0e0e0; }
              .footer { margin-top: 20px; text-align: center; color: #888; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">Nova Mensagem do Portfólio</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="field-label">👤 Nome:</div>
                  <div class="field-value">${name}</div>
                </div>
                <div class="field">
                  <div class="field-label">✉️ Email:</div>
                  <div class="field-value"><a href="mailto:${email}">${email}</a></div>
                </div>
                <div class="field">
                  <div class="field-label">💬 Mensagem:</div>
                  <div class="field-value">${message.replace(/\n/g, '<br>')}</div>
                </div>
                <div class="footer">
                  Recebido em ${new Date().toLocaleString('pt-BR')}
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
Nova mensagem do portfólio

Nome: ${name}
Email: ${email}
Mensagem: ${message}

Recebido em ${new Date().toLocaleString('pt-BR')}
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ ok: true, message: 'Mensagem enviada com sucesso!' }, { status: 200 })
  } catch (err: any) {
    console.error('Erro ao enviar email:', err)
    return NextResponse.json(
      { error: 'Erro ao enviar mensagem. Tente novamente mais tarde.' },
      { status: 500 }
    )
  }
}