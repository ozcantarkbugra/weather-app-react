# 🌤️ Weather Forecast App

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Version](https://img.shields.io/badge/Version-2.0.0-orange.svg)](CHANGELOG.md)
[![API](https://img.shields.io/badge/API-OpenWeatherMap-yellow.svg)](https://openweathermap.org/)
[![Background](https://img.shields.io/badge/Background-Unsplash-purple.svg)](https://unsplash.com/)

Modern, responsive ve kullanıcı dostu hava durumu uygulaması. OpenWeatherMap API ile gerçek zamanlı hava durumu verileri ve Unsplash API ile dinamik şehir arka planları sunar.

![Weather App Screenshot](https://via.placeholder.com/800x400/4A90E2/FFFFFF?text=Weather+Forecast+App)

## 🌟 Özellikler

### 🌍 Temel Özellikler

- **Gerçek Zamanlı Hava Durumu**: OpenWeatherMap API ile güncel veriler
- **7 Günlük Tahmin**: Detaylı hava durumu öngörüleri
- **Sıcaklık Dönüşümü**: Celsius/Fahrenheit otomatik dönüşüm
- **Nem ve Basınç**: Detaylı atmosferik bilgiler
- **Rüzgar Hızı**: Anlık rüzgar bilgileri
- **Hissedilen Sıcaklık**: Gerçek hissiyat hesaplaması

### 🎨 UI/UX Özellikleri

- **🌙 Dark/Light Theme**: Otomatik tema değiştirme
- **🌡️ Unit Toggle**: Celsius/Fahrenheit dönüşümü
- **🌐 Çoklu Dil Desteği**: Türkçe/İngilizce
- **📍 Konum Servisi**: GPS ile otomatik konum tespiti
- **❤️ Favori Şehirler**: Şehirleri favorilere ekleme/çıkarma
- **📈 Haftalık Tahmin**: 7 günlük detaylı hava durumu
- **📊 Görsel Grafikler**: Sıcaklık ve nem oranları için interaktif grafikler
- **⚠️ Hava Uyarıları**: Sıcaklık ve hava durumu uyarıları
- **🗺️ Harita Entegrasyonu**: Şehir konumunu haritada görüntüleme
- **🖼️ Dinamik Arka Plan**: Şehir fotoğrafları ile otomatik arka plan değişimi

### 📱 Responsive Tasarım

- **📱 Mobil Optimizasyon**: iPhone 14 Pro Max ve diğer mobil cihazlar için optimize
- **💻 Tablet Uyumluluğu**: iPad ve tablet cihazlar için özel düzenlemeler
- **🖥️ Desktop Deneyimi**: Büyük ekranlar için optimize edilmiş layout
- **🎯 Touch-Friendly**: Mobil cihazlarda kolay kullanım

### 🎭 Animasyonlar ve Efektler

- **Hava Durumu Animasyonları**: Güneş, bulut, yağmur, kar animasyonları
- **Smooth Transitions**: Tüm geçişlerde yumuşak animasyonlar
- **Hover Effects**: Modern hover efektleri
- **Loading States**: Yükleme durumları için animasyonlar

## 🚀 Hızlı Başlangıç

### Ön Gereksinimler

- Node.js (v14 veya üzeri)
- npm veya yarn
- OpenWeatherMap API anahtarı
- Unsplash API anahtarı (opsiyonel)

### Kurulum

1. **Projeyi klonlayın:**

   ```bash
   git clone https://github.com/username/weather-app.git
   cd weather-app
   ```

2. **Bağımlılıkları yükleyin:**

   ```bash
   npm install
   ```

3. **Environment variables oluşturun:**

   ```bash
   cp .env.example .env
   ```

4. **API anahtarlarınızı ekleyin:**

   ```env
   REACT_APP_WEATHER_API_KEY=your_weather_api_key_here
   REACT_APP_UNSPLASH_ACCESS_KEY=your_unsplash_access_key_here
   ```

5. **Uygulamayı başlatın:**

   ```bash
   npm start
   ```

6. **Tarayıcınızda açın:**
   ```
   http://localhost:3000
   ```

## 🔑 API Anahtarları

### 🌤️ OpenWeatherMap API (Zorunlu)

1. [OpenWeatherMap](https://openweathermap.org/) sitesine gidin
2. "Sign Up" butonuna tıklayın
3. Ücretsiz hesap oluşturun
4. E-posta adresinizi doğrulayın
5. "API keys" bölümünden anahtarınızı kopyalayın

### 📸 Unsplash API (Opsiyonel - Şehir Fotoğrafları)

1. [Unsplash Developers](https://unsplash.com/developers) sitesine gidin
2. "Register as a developer" butonuna tıklayın
3. Ücretsiz hesap oluşturun
4. "New Application" oluşturun
5. Application name ve description girin
6. "What are you building?" sorusuna "Weather app with city backgrounds" yazın
7. "Access Key"inizi kopyalayın

**Not**: Unsplash API key olmadan da uygulama çalışır, sadece default background kullanılır.

## 📖 Kullanım Kılavuzu

### 🔍 Temel Kullanım

1. **Şehir Arama:**

   - Arama kutusuna şehir adını yazın
   - "Verileri Getir" butonuna tıklayın veya Enter tuşuna basın
   - Hava durumu bilgileri görüntülenecektir

2. **Konum Kullanma:**
   - "Konumumu Kullan" butonuna tıklayın
   - Tarayıcı konum izni isteyecektir
   - İzin verdiğinizde otomatik olarak bulunduğunuz yerin hava durumu yüklenecektir

### 🎛️ Gelişmiş Özellikler

#### **Tema Değiştirme:**

- Sağ üst köşedeki ay ikonuna tıklayın
- Dark/Light tema arasında geçiş yapın

#### **Birim Değiştirme:**

- °C/°F butonlarına tıklayın
- Sıcaklık birimini değiştirin

#### **Dil Değiştirme:**

- Dil seçeneklerinden istediğinizi seçin
- Türkçe/İngilizce arasında geçiş yapın

#### **Favori Şehirler:**

- Kalp ikonuna tıklayarak şehri favorilere ekleyin
- Favori şehirlerinize hızlı erişim sağlayın
- Çöp kutusu ikonu ile favorilerden çıkarın

#### **Grafikleri Görüntüleme:**

- "Grafikleri Göster" butonuna tıklayın
- Sıcaklık ve nem grafiklerini inceleyin

## 🛠️ Teknolojiler

### Frontend

- **React 18**: Modern React hooks ve functional components
- **CSS3**: Responsive tasarım ve modern animasyonlar
- **React Icons**: Zengin ikon kütüphanesi
- **Axios**: HTTP istekleri için

### API ve Veri

- **OpenWeatherMap API**: Hava durumu verileri
- **Unsplash API**: Şehir fotoğrafları
- **Geolocation API**: Kullanıcı konumu tespiti

### Harita ve Görselleştirme

- **Leaflet**: İnteraktif haritalar
- **React Leaflet**: React için Leaflet wrapper
- **CSS Grid & Flexbox**: Modern layout sistemi

### Responsive Design

- **Media Queries**: Responsive breakpoint'ler
- **Mobile-First**: Mobil öncelikli tasarım
- **Touch-Friendly**: Mobil cihazlar için optimize

## 📱 Responsive Breakpoint'ler

| Cihaz            | Genişlik     | Özellikler                                      |
| ---------------- | ------------ | ----------------------------------------------- |
| **Desktop**      | 1200px+      | Tam genişlik layout, büyük butonlar             |
| **Tablet**       | 768px-1199px | Orta genişlik container'lar, dikey buton düzeni |
| **Mobile**       | 480px-767px  | Kompakt layout, küçük butonlar                  |
| **Small Mobile** | 320px-479px  | Ultra kompakt tasarım, touch-optimized          |

## 🎨 UI/UX İyileştirmeleri

### 📱 Responsive Düzenlemeler

- **iPhone 14 Pro Max**: Özel optimizasyonlar
- **Tablet Layout**: 768px altı için özel düzenlemeler
- **Mobile Layout**: 480px altı için kompakt tasarım
- **Desktop Layout**: 1200px üstü için geniş ekran optimizasyonu

### 🎯 Buton ve Kontrol İyileştirmeleri

- **Container Mantığı**: Butonlar için maksimum genişlik sınırları
- **Merkezleme**: Otomatik merkezleme sistemi
- **Touch-Friendly**: Mobil cihazlar için optimize edilmiş boyutlar
- **Hover Effects**: Modern hover animasyonları

### 📊 Grafik ve Chart İyileştirmeleri

- **Nem Oranları**: Üst üste binme sorunu çözüldü
- **Sıcaklık Grafikleri**: Responsive'de düzgün görünüm
- **Label Positioning**: Gün isimleri ve değerler için optimize spacing
- **Chart Heights**: Responsive'de uygun yükseklikler

### 🎨 Tema ve Görsel İyileştirmeler

- **Background Removal**: Navbar ve kontrollerden gereksiz arka planlar kaldırıldı
- **Unit Toggle**: Fahrenheit ikonu text ile değiştirildi
- **Active States**: Aktif butonlar için belirgin görsel feedback
- **Color Consistency**: Tutarlı renk paleti

### 🔧 Teknik İyileştirmeler

- **Temperature Alerts**: Birim farkındalığı (Celsius/Fahrenheit)
- **Overflow Control**: Text clipping sorunları çözüldü
- **Spacing Optimization**: Tüm elementler için optimize edilmiş boşluklar
- **Performance**: CSS optimizasyonları

## 📁 Proje Yapısı

```
Weather-App-main/
├── public/
│   ├── index.html              # Ana HTML dosyası
│   ├── manifest.json           # PWA manifest
│   └── robots.txt              # SEO robots
├── src/
│   ├── components/
│   │   ├── weather.jsx         # Ana weather component
│   │   ├── WeatherCharts.jsx   # Grafik component'i
│   │   ├── WeatherAlerts.jsx   # Uyarı component'i
│   │   ├── WeatherAnimation.jsx # Hava durumu animasyonları
│   │   ├── WeeklyForecast.jsx  # Haftalık tahmin
│   │   ├── Favorites.jsx       # Favori şehirler
│   │   ├── Map.jsx             # Harita component'i
│   │   ├── LocationButton.jsx  # Konum butonu
│   │   ├── ThemeToggle.jsx     # Tema değiştirme
│   │   ├── UnitToggle.jsx      # Birim değiştirme
│   │   ├── LanguageToggle.jsx  # Dil değiştirme
│   │   └── style.css           # Ana stil dosyası
│   ├── utils/
│   │   └── translations.js     # Çoklu dil desteği
│   ├── assets/
│   │   └── img.jpg             # Default arka plan resmi
│   ├── app.js                  # Ana uygulama
│   └── index.js                # Giriş noktası
├── package.json                # Proje bağımlılıkları
├── .env.example                # Environment variables örneği
├── LICENSE                     # MIT lisans
├── CHANGELOG.md                # Değişiklik geçmişi
├── CONTRIBUTING.md             # Katkıda bulunma rehberi
└── README.md                   # Bu dosya
```

## 🐛 Hata Giderme

### API Sorunları

- **"API anahtarı geçersiz" hatası**: API anahtarınızın doğru olduğundan emin olun
- **"Şehir bulunamadı" hatası**: Şehir adını doğru yazdığınızdan emin olun
- **Veri gelmiyor**: İnternet bağlantınızı ve API anahtarınızı kontrol edin

### Responsive Sorunları

- **Grafikler üst üste biniyor**: Ekran boyutunu kontrol edin
- **Butonlar sağa yapışıyor**: Container genişliklerini kontrol edin
- **Text kırpılıyor**: Font boyutlarını ve container yüksekliklerini kontrol edin

### Performans Sorunları

- **Yavaş yükleme**: API isteklerini kontrol edin
- **Animasyon sorunları**: CSS transition'ları kontrol edin

### Konum Servisi Sorunları

- **Konum alınamıyor**: Tarayıcı izinlerini kontrol edin
- **HTTPS gerekli**: Konum servisi için HTTPS gerekebilir

## 🔄 Son Güncellemeler

### v2.0.0 - UI/UX Major Update (2024-12-19)

- ✅ Responsive tasarım tamamen yenilendi
- ✅ iPhone 14 Pro Max optimizasyonu
- ✅ Container mantığı eklendi
- ✅ Grafik üst üste binme sorunları çözüldü
- ✅ Tema sistemi iyileştirildi
- ✅ Buton ve kontrol optimizasyonları
- ✅ Touch-friendly tasarım
- ✅ Performance iyileştirmeleri
- ✅ Dinamik şehir arka planları eklendi (Unsplash API)

### v1.5.0 - Chart Improvements (2024-12-18)

- ✅ Humidity chart düzenlemeleri
- ✅ Temperature chart optimizasyonları
- ✅ Label positioning iyileştirmeleri
- ✅ Responsive chart heights

### v1.0.0 - Initial Release (2024-12-17)

- ✅ Temel hava durumu özellikleri
- ✅ API entegrasyonu
- ✅ Responsive tasarım
- ✅ Tema sistemi

## 🤝 Katkıda Bulunma

Katkıda bulunmak için lütfen [CONTRIBUTING.md](CONTRIBUTING.md) dosyasını okuyun.

### Katkıda Bulunma Adımları

1. **Fork yapın**
2. **Feature branch oluşturun** (`git checkout -b feature/AmazingFeature`)
3. **Commit yapın** (`git commit -m 'Add some AmazingFeature'`)
4. **Push yapın** (`git push origin feature/AmazingFeature`)
5. **Pull Request oluşturun**

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 📞 İletişim

Proje hakkında sorularınız için:

- **GitHub Issues**: [Proje Issues](https://github.com/username/weather-app/issues)
- **Email**: [your-email@example.com]

## 🙏 Teşekkürler

- [OpenWeatherMap](https://openweathermap.org/) - Hava durumu verileri için
- [Unsplash](https://unsplash.com/) - Şehir fotoğrafları için
- [React](https://reactjs.org/) - Frontend framework için
- [React Icons](https://react-icons.github.io/react-icons/) - İkonlar için
- [Leaflet](https://leafletjs.com/) - Haritalar için

## ⭐ Yıldız Verin

Bu projeyi beğendiyseniz yıldız vermeyi unutmayın! ⭐

---

**Weather Forecast App** - Modern, responsive ve kullanıcı dostu hava durumu uygulaması 🌤️
