# ⚡ ESP IoT Smart Switch Control via Serverless Web

Control your home appliances (lights, fans, etc.) from anywhere using an **ESP32 + Serverless Web App**.
This project uses an ESP32 microcontroller connected to relays and a cloud-hosted web interface (Vercel/Render) to toggle switches remotely via a simple URL.

---

## 🚀 Features

* Control 3 electrical loads remotely
* Works from any browser (mobile/PC)
* No dedicated backend server (serverless)
* Fast, secure, and scalable
* Simple web-based controller UI

---

## 🧠 How It Works

1. ESP32 connects to WiFi and exposes control endpoints
2. Web app sends ON/OFF requests to ESP32
3. ESP32 switches relays using GPIO pins
4. Devices turn ON/OFF instantly

---

## 🧰 Hardware Requirements

* ESP32 Development Board
* 3-Channel Relay Module
* Jumper Wires
* 5V Power Supply
* Electrical Loads (Bulbs, Fan, etc.)

---

## 🔌 Pin Configuration

| Device  | ESP32 GPIO |
| ------- | ---------- |
| Light 1 | GPIO 12    |
| Light 2 | GPIO 13    |
| Light 3 | GPIO 15    |

```cpp
#define LIGHT1_PIN 12
#define LIGHT2_PIN 13
#define LIGHT3_PIN 15
```

---

## 📂 Project Structure

```
ESP-IOT-SMART-SWITCH/
│
├── esp32_code/
│   └── smart_switch.ino
│
├── web/
│   ├── controller.html
│   ├── script.js
│   └── style.css
│
└── README.md
```

---

## 🛠️ Setup & Installation

### Step 1: Download the Project Code

Clone or download this repository:

```
git clone https://github.com/yourusername/esp-iot-smart-switch.git
cd esp-iot-smart-switch
```

---

### Step 2: Setup Arduino IDE for ESP32

1. Open **Arduino IDE**
2. Go to **File → Preferences**
3. Add this URL in *Additional Board Manager URLs*:

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

4. Go to **Tools → Board → Boards Manager**
5. Search **ESP32** and install

---

### Step 3: Install Required Libraries

In Arduino IDE:

```
Sketch → Include Library → Manage Libraries
```

Install:

* WiFi
* WebServer (ESP32)

---

### Step 4: Configure ESP32 Code

Open:

```
esp32_code/smart_switch.ino
```

Update WiFi and Web URL:

```cpp
const char* ssid = "YOUR_WIFI_NAME";
const char* password = "YOUR_WIFI_PASSWORD";

const char* WEB_URL = "https://WebURL.com";
```

Make sure pin definitions are correct:

```cpp
#define LIGHT1_PIN 12
#define LIGHT2_PIN 13
#define LIGHT3_PIN 15
```

---

### Step 5: Upload Code to ESP32

1. Connect ESP32 via USB
2. Select board:

```
Tools → Board → ESP32 Dev Module
```

3. Select correct COM port
4. Click **Upload**

---

### Step 6: Connect Relay Module

| Relay IN | ESP32 GPIO |
| -------- | ---------- |
| IN1      | GPIO 12    |
| IN2      | GPIO 13    |
| IN3      | GPIO 15    |

Also connect:

* Relay VCC → 5V
* Relay GND → GND

⚠️ **Be careful with high-voltage AC connections!**

---

### Step 7: Power On ESP32

After uploading and wiring:

* Power ESP32
* Open Serial Monitor
* Note the ESP32 IP address

Example:

```
Connected! IP: 192.168.1.50
```

---

## 🌐 Deploy Web Controller (Serverless)

### Option 1: Deploy on Vercel

1. Go to [https://vercel.com](https://vercel.com)
2. Import this project
3. Select `/web` folder
4. Deploy

---

## 🎮 Access Controller

After deployment, open:

```
https://WebURL.com/c/controller.html
```

You will see 3 switches:

* Light 1 ON/OFF
* Light 2 ON/OFF
* Light 3 ON/OFF

Control your devices from anywhere 🌍

---

## 📱 Example API Endpoints

| Action      | URL           |
| ----------- | ------------- |
| Light 1 ON  | `/light1/on`  |
| Light 1 OFF | `/light1/off` |
| Light 2 ON  | `/light2/on`  |
| Light 2 OFF | `/light2/off` |
| Light 3 ON  | `/light3/on`  |
| Light 3 OFF | `/light3/off` |

---

## 🔐 Security Tips

* Use strong WiFi password
* Restrict ESP32 to local network
* Use token-based authentication (optional upgrade)

---

## 🧩 Future Improvements

* Add Google Assistant / Alexa
* Add mobile app
* Add device status feedback
* Add user login system

---

## 👨‍💻 Author

Developed by **Aditya-Roy-oops**
ESP32 | IoT | Web Automation

---


⭐ If you like this project, give it a star on GitHub!
