const fetch = require('node-fetch'); // Użyj `node-fetch` w Node.js, zainstaluj przez `npm install node-fetch`

const telegramBotToken = '7593117759:AAEmsTHcRspLdFZcTAt0HO4x6Sa5THH6OLo'; // Twój token bota
const telegramChatId = '-1008156767357'; // ID czatu (z prefiksem -100 w przypadku kanału)
const message = 'Wiadomość testowa wysłana przez bota'; // Wiadomość do wysłania

const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

// Funkcja do wysyłania wiadomości
async function sendToTelegram() {
    const payload = {
        chat_id: telegramChatId,
        text: message,
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        const result = await response.json();
        if (result.ok) {
            console.log('Wiadomość wysłana pomyślnie:', result);
        } else {
            console.error('Błąd wysyłania wiadomości:', result);
        }
    } catch (error) {
        console.error('Błąd połączenia z API Telegrama:', error);
    }
}

// Wywołanie funkcji
sendToTelegram();
