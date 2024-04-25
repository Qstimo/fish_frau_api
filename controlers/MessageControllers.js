import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export const registerMessage = async (req, res) => {
    const { name, email, phone, date, time } = req.body;
    const telegramAPI = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;
    const message = `Предварительная бронь стола:\nИмя: ${name}\nEmail: ${email}\nТелефон: ${phone}\nДата: ${date}\nВремя: ${time}`;

    await axios.post(telegramAPI, {
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: message
    })
        .then(response => {
            console.log('Message sent successfully to Telegram');
            res.status(200).json({ message: 'Сообщение отправлено в Телеграм' });
        })
        .catch(error => {
            console.error('Error sending message to Telegram:', error);
            res.status(400).json({ message: 'Ошибка при отправке сообщения' });
        });
};
export const registerReview = async (req, res) => {
    const { name, email, phone, messageUser } = req.body;
    const telegramAPI = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;
    const message = `Отзыв посетителя:\nИмя: ${name}\nEmail: ${email}\nТелефон: ${phone}\nОтзыв: ${messageUser}}`;

    await axios.post(telegramAPI, {
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: message
    })
        .then(response => {
            console.log('Message sent successfully to Telegram');
            res.status(200).json({ message: 'Отзыв отправлен в Телеграм' });
        })
        .catch(error => {
            console.error('Error sending message to Telegram:', error);
            res.status(400).json({ message: 'Ошибка при отправке сообщения' });
        });
};