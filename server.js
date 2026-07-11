# Iraq People Dashboard

## Render
1. ارفع الملفات إلى GitHub.
2. أنشئ Web Service على Render.
3. Build Command: `npm install`
4. Start Command: `npm start`
5. أضف Environment Variables من `.env.example`.
6. بعد إنشاء رابط Render، اجعل `CALLBACK_URL`:
   `https://YOUR-SERVICE.onrender.com/auth/discord/callback`
7. أضف نفس الرابط بالضبط في Discord Developer Portal > OAuth2 > Redirects.

لا ترفع `CLIENT_SECRET` أو أي Token إلى GitHub.
