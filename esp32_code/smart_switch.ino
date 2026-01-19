#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>

// Wi-Fi credentials
const char* ssid = "WIFI_SSID";
const char* password = "WIFI_PASSWORD";

// URL to fetch light status
const char* url = "https://WebURL.com/pin";

// GPIO pins for the lights
#define LIGHT1_PIN 12
#define LIGHT2_PIN 13
#define LIGHT3_PIN 15

void setup() {
  // Start Serial communication for debugging
  Serial.begin(115200);

  // Initialize GPIO pins as outputs
  pinMode(LIGHT1_PIN, OUTPUT);
  pinMode(LIGHT2_PIN, OUTPUT);
  pinMode(LIGHT3_PIN, OUTPUT);

  // Initially, turn off all lights
  digitalWrite(LIGHT1_PIN, LOW);
  digitalWrite(LIGHT2_PIN, LOW);
  digitalWrite(LIGHT3_PIN, LOW);

  // Connect to Wi-Fi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi");
}

void loop() {
  // Check if connected to Wi-Fi
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;

    // Make HTTP GET request to fetch the status
    http.begin(url);
    int httpResponseCode = http.GET();

    // If the HTTP request was successful
    if (httpResponseCode > 0) {
      String payload = http.getString();
      Serial.println(payload);

      // Parse the JSON response
      StaticJsonDocument<200> doc;
      deserializeJson(doc, payload);

      // Get the status of each light
      bool light1 = doc["light1"];
      bool light2 = doc["light2"];
      bool light3 = doc["light3"];

      // Control each light based on the status
      digitalWrite(LIGHT1_PIN, light1 ? HIGH : LOW);
      digitalWrite(LIGHT2_PIN, light2 ? HIGH : LOW);
      digitalWrite(LIGHT3_PIN, light3 ? HIGH : LOW);

    } else {
      Serial.println("Error on HTTP request");
    }

    // End the HTTP connection
    http.end();
  } else {
    Serial.println("WiFi Disconnected");
  }

  // Check every second
  delay(1000);
}
