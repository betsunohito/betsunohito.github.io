Yerel Socket.IO örneğini çalıştırma (Windows):

1. Node.js kurulu olduğundan emin olun (v16+ önerilir).
2. Proje klasöründe terminal açın (örnek: `c:\Users\kaya_\Desktop\cloneportfolio\tarkankaya.github.io`).
3. Paketleri yükleyin:

   npm install

4. Sunucuyu başlatın:

   npm start

5. Tarayıcıda açın: http://localhost:3000

Kullanım:
- Sağ alt köşedeki "Socket.IO örneği" butonuna tıklayın. Açılan sohbet penceresinden isim girin ve mesaj gönderin.
- Penceredeki "+" butonuna basarak aynı sayfada yeni bir sohbet penceresi açabilirsiniz; pencereler birbirleriyle Socket.IO üzerinden mesajlaşır.

Notlar:
- Sunucu, proje klasörünü statik dosya olarak servis eder ve Socket.IO mesajlarını tüm bağlı istemcilere yayınlar.
- Geliştirme sırasında farklı makinelerden test etmek isterseniz, uygun ağ/port ayarlarına dikkat edin.
