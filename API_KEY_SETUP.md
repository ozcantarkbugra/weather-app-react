# API Anahtarı Kurulum Rehberi

## 🚨 ÖNEMLİ: API Anahtarı Gerekli

Uygulamanın çalışması için geçerli bir OpenWeatherMap API anahtarı gereklidir.

## 📋 Adım Adım Kurulum:

### 1. OpenWeatherMap Hesabı Oluşturun

- [OpenWeatherMap](https://openweathermap.org/) sitesine gidin
- Sağ üst köşedeki "Sign Up" butonuna tıklayın
- E-posta adresiniz, kullanıcı adınız ve şifrenizi girin
- "Create Account" butonuna tıklayın

### 2. E-posta Doğrulaması

- E-posta kutunuzu kontrol edin
- OpenWeatherMap'ten gelen doğrulama e-postasını açın
- "Confirm Email" linkine tıklayın

### 3. API Anahtarınızı Alın

- [OpenWeatherMap](https://openweathermap.org/) sitesine giriş yapın
- Sağ üst köşedeki kullanıcı adınıza tıklayın
- "My API keys" seçeneğini seçin
- Varsayılan API anahtarınızı kopyalayın

### 4. API Anahtarını Uygulamaya Ekleyin

- `.env.example` dosyasını `.env` olarak kopyalayın:
  ```bash
  cp .env.example .env
  ```
- `.env` dosyasını açın ve `your_api_key_here` kısmını kendi API anahtarınızla değiştirin:
  ```
  REACT_APP_WEATHER_API_KEY=sizin_api_anahtariniz_buraya
  ```

### 5. Uygulamayı Test Edin

- `npm start` komutu ile uygulamayı başlatın
- Tarayıcıda bir şehir adı girin ve test edin

## ⚠️ Önemli Notlar:

- API anahtarı ücretsizdir ve günlük 1000 istek hakkı verir
- API anahtarınızı kimseyle paylaşmayın
- API anahtarı 2 saat içinde aktif hale gelir

## 🔧 Sorun Giderme:

### "API anahtarı geçersiz" hatası alıyorsanız:

- API anahtarınızın doğru kopyalandığından emin olun
- E-posta doğrulamasının tamamlandığından emin olun
- 2 saat bekleyin (API anahtarı aktifleşmesi için)

### "Şehir bulunamadı" hatası alıyorsanız:

- Şehir adını doğru yazdığınızdan emin olun
- Türkçe karakterler kullanabilirsiniz
- Büyük/küçük harf duyarlılığı yoktur
