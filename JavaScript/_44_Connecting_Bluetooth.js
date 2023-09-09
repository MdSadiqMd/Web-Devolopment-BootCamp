// ***Run this Code in Browser
// Blog https://developer.chrome.com/articles/bluetooth/
// Step 1: Check if the browser supports Web Bluetooth API
if ('bluetooth' in navigator) {
    // Step 2: Request Bluetooth device permission
    navigator.bluetooth.requestDevice({
      filters: [{ services: ['battery_service'] }]
    })
    .then(device => {
      // Step 3: Connect to the selected device
      return device.gatt.connect();
    })
    .then(server => {
      // Step 4: Get the Battery Service
      return server.getPrimaryService('battery_service');
    })
    .then(service => {
      // Step 5: Get the Battery Level Characteristic
      return service.getCharacteristic('battery_level');
    })
    .then(characteristic => {
      // Step 6: Read the battery level
      return characteristic.readValue();
    })
    .then(value => {
      // Step 7: Parse the battery level value
      const batteryLevel = value.getUint8(0);
      
      // Step 8: Display the battery level
      console.log(`Battery Level: ${batteryLevel}%`);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  } else {
    console.error('Web Bluetooth API is not supported in this browser.');
  }
  