// the setup function runs once when you press reset or power the board

int sensor = A2;
void setup() {
  // initialize digital pin LED_BUILTIN as an output.

  Serial.begin(9600); // Begen listening on port 9600 for serial
  
  pinMode(LED_BUILTIN, OUTPUT);

  digitalWrite(LED_BUILTIN, LOW);
}

// the loop function runs over and over again forever
void loop() {
  int val = analogRead(sensor);
  Serial.write(val);
   if(Serial.available() > 0) // Read from serial port
    {
      char ReaderFromNode; // Store current character
      ReaderFromNode = (char) Serial.read();
      convertToState(ReaderFromNode); // Convert character to state  
    }
  delay(1000); 
}

void convertToState(char chr) {
  
  if(chr=='o'){
    digitalWrite(LED_BUILTIN, HIGH);
    delay(100); 
  }
  if(chr=='f'){
    digitalWrite(LED_BUILTIN, LOW);
    delay(100); 
  }
}
