import { Resend } from 'resend';
import { emailConfig } from '../config/email.js';

const resend = new Resend(emailConfig.resendApiKey);

// Helper function to parse request body
function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(new Error('Invalid JSON'));
      }
    });
    req.on('error', reject);
  });
}

// Helper function to send JSON response
function sendJson(res, data, statusCode = 200) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
}

// Enrollment email handler
export async function handleEnrollment(req, res) {
  if (req.method !== 'POST') {
    return sendJson(res, { error: 'Method not allowed' }, 405);
  }

  try {
    const { userEmail, courseName, isWaitlist } = await parseBody(req);

    // Validate input
    if (!userEmail || !courseName) {
      return sendJson(res, { error: 'Missing required fields' }, 400);
    }

    if (!userEmail.includes('@')) {
      return sendJson(res, { error: 'Invalid email format' }, 400);
    }

    // Send notification to admin
    const adminEmailResult = await resend.emails.send({
      from: emailConfig.fromEmail,
      to: emailConfig.adminEmails,
      subject: isWaitlist ? `New Waitlist Registration: ${courseName}` : `New Course Registration: ${courseName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            ${isWaitlist ? 'Новая заявка в waitlist' : 'Новая заявка на курс'}
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #495057;">Детали заявки:</h3>
            <p><strong>Курс:</strong> ${courseName}</p>
            <p><strong>Email пользователя:</strong> ${userEmail}</p>
            <p><strong>Тип заявки:</strong> ${isWaitlist ? 'Waitlist' : 'Регистрация на курс'}</p>
            <p><strong>Дата:</strong> ${new Date().toLocaleString('ru-RU')}</p>
          </div>
          
          <div style="background: #e7f3ff; padding: 15px; border-radius: 8px; border-left: 4px solid #007bff;">
            <p style="margin: 0;"><strong>Следующие шаги:</strong></p>
            <ul style="margin: 10px 0 0 0;">
              <li>Создать аккаунт для пользователя</li>
              <li>Отправить данные для входа на ${userEmail}</li>
              <li>${isWaitlist ? 'Добавить в waitlist курса' : 'Предоставить доступ к курсу'}</li>
            </ul>
          </div>
        </div>
      `,
    });

    // Send confirmation to user
    const userEmailResult = await resend.emails.send({
      from: emailConfig.fromEmail,
      to: [userEmail],
      subject: isWaitlist ? `Вы добавлены в waitlist: ${courseName}` : `Заявка принята: ${courseName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; padding: 20px 0; border-bottom: 2px solid #007bff;">
            <h1 style="color: #007bff; margin: 0;">SysDesign.online</h1>
          </div>
          
          <div style="padding: 30px 0;">
            <h2 style="color: #333;">
              ${isWaitlist ? 'Спасибо за регистрацию в waitlist!' : 'Спасибо за заявку на курс!'}
            </h2>
            
            <p style="font-size: 16px; line-height: 1.6; color: #555;">
              ${isWaitlist 
                ? `Вы успешно добавлены в список ожидания курса <strong>${courseName}</strong>. Мы обязательно сообщим вам, как только курс станет доступен для записи.`
                : `Ваша заявка на курс <strong>${courseName}</strong> принята и обрабатывается.`
              }
            </p>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #495057;">Что дальше?</h3>
              <ul style="color: #666; line-height: 1.8;">
                <li>Мы создадим для вас персональный аккаунт</li>
                <li>В течение 24 часов вы получите данные для входа на этот email</li>
                <li>${isWaitlist ? 'Уведомим вас о старте записи на курс' : 'Получите доступ ко всем материалам курса'}</li>
              </ul>
            </div>
            
            <p style="color: #666;">
              Если у вас есть вопросы, не стесняйтесь обращаться к нам по адресу 
              <a href="mailto:info@sysdesign.online" style="color: #007bff;">info@sysdesign.online</a>
            </p>
          </div>
          
          <div style="text-align: center; padding: 20px 0; border-top: 1px solid #eee; color: #999; font-size: 14px;">
            <p>© 2025 SysDesign.online. Все права защищены.</p>
            <p>
              <a href="https://t.me/ship_happens_404" style="color: #007bff; text-decoration: none;">Telegram</a> | 
              <a href="https://youtube.com/@shiphappens-404" style="color: #007bff; text-decoration: none;">YouTube</a>
            </p>
          </div>
        </div>
      `,
    });

    console.log(`✅ Enrollment emails sent - Admin: ${adminEmailResult.id}, User: ${userEmailResult.id}`);
    
    sendJson(res, { 
      success: true, 
      message: 'Emails sent successfully',
      adminEmailId: adminEmailResult.id,
      userEmailId: userEmailResult.id 
    });

  } catch (error) {
    console.error('❌ Enrollment email error:', error);
    sendJson(res, { 
      error: 'Failed to send email', 
      details: error.message 
    }, 500);
  }
}

// Contact form email handler
export async function handleContact(req, res) {
  if (req.method !== 'POST') {
    return sendJson(res, { error: 'Method not allowed' }, 405);
  }

  try {
    const { email, name, message } = await parseBody(req);

    // Validate input
    if (!email || !message) {
      return sendJson(res, { error: 'Email and message are required' }, 400);
    }

    if (!email.includes('@')) {
      return sendJson(res, { error: 'Invalid email format' }, 400);
    }

    // Send message to admin
    const adminEmailResult = await resend.emails.send({
      from: emailConfig.fromEmail,
      to: emailConfig.adminEmails,
      subject: `Новое сообщение от ${name || 'пользователя'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            Новое сообщение через форму связи
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #495057;">Контактная информация:</h3>
            <p><strong>Имя:</strong> ${name || 'Не указано'}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Дата:</strong> ${new Date().toLocaleString('ru-RU')}</p>
          </div>
          
          <div style="background: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #495057;">Сообщение:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
        </div>
      `,
    });

    // Send confirmation to user
    const userEmailResult = await resend.emails.send({
      from: emailConfig.fromEmail,
      to: [email],
      subject: 'Спасибо за ваше сообщение!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; padding: 20px 0; border-bottom: 2px solid #007bff;">
            <h1 style="color: #007bff; margin: 0;">SysDesign.online</h1>
          </div>
          
          <div style="padding: 30px 0;">
            <h2 style="color: #333;">Спасибо за ваше сообщение!</h2>
            
            <p style="font-size: 16px; line-height: 1.6; color: #555;">
              ${name ? `Здравствуйте, ${name}!` : 'Здравствуйте!'} Мы получили ваше сообщение и обязательно ответим вам в ближайшее время.
            </p>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #495057;">Ваше сообщение:</h3>
              <p style="white-space: pre-wrap; line-height: 1.6; color: #666; font-style: italic;">
                "${message}"
              </p>
            </div>
            
            <p style="color: #666;">
              Обычно мы отвечаем в течение 24 часов. Если у вас срочный вопрос, вы можете написать нам напрямую в 
              <a href="https://t.me/ship_happens_404" style="color: #007bff;">Telegram</a>.
            </p>
          </div>
          
          <div style="text-align: center; padding: 20px 0; border-top: 1px solid #eee; color: #999; font-size: 14px;">
            <p>© 2025 SysDesign.online. Все права защищены.</p>
            <p>
              <a href="https://t.me/ship_happens_404" style="color: #007bff; text-decoration: none;">Telegram</a> | 
              <a href="https://youtube.com/@shiphappens-404" style="color: #007bff; text-decoration: none;">YouTube</a>
            </p>
          </div>
        </div>
      `,
    });

    console.log(`✅ Contact emails sent - Admin: ${adminEmailResult.id}, User: ${userEmailResult.id}`);

    sendJson(res, { 
      success: true, 
      message: 'Contact emails sent successfully',
      adminEmailId: adminEmailResult.id,
      userEmailId: userEmailResult.id 
    });

  } catch (error) {
    console.error('❌ Contact email error:', error);
    sendJson(res, { 
      error: 'Failed to send contact email', 
      details: error.message 
    }, 500);
  }
}