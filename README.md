# Timezone API with Express.js

API sederhana yang dibangun menggunakan Express.js untuk mendapatkan waktu saat ini berdasarkan zona waktu yang ditentukan.

## Fitur

- Mendapatkan waktu saat ini untuk zona waktu tertentu: `Asia/Jakarta`, `Asia/Makassar`, dan `Asia/Jayapura`.
- Validasi parameter `timezone`.
- Mengembalikan respons JSON dengan kode status HTTP yang sesuai.

## Persyaratan

- Node.js (versi 14 atau lebih tinggi)
- npm (Node Package Manager)

## Cara Menjalankan

1. **Clone repository**:
   ```bash
   git clone https://github.com/lieur-euy/time-zone-indonesia
   cd nama-repo bash

2. **Install dependencies:**:
   ```bash
   npm install


3. **Run:**:
   ```bash
   node index.js
   
## Endpoint API

### Mendapatkan Waktu Saat Ini

- **URL**: `/time`
- **Method**: `GET`
- **Parameter Query**:
  - `timezone`: Zona waktu yang ingin digunakan. Harus salah satu dari: `Asia/Jakarta`, `Asia/Makassar`, `Asia/Jayapura`.

#### Contoh Permintaan

```bash
GET http://localhost:3005/time?timezone=Asia/Jakarta
```

```bash
 Contoh Respome
{
    "statusCode": 200,
    "message": "Success",
    "data": {
        "timezone": "Asia/Jakarta",
        "currentTime": "2023-10-05 16:30:45"
    }
}
```
