var fs = require('fs');

var isOn = false;   // 点灯しているかどうか
var count = 0;      // 点灯した回数
var maxCount = 10;  // 点滅させる回数

// 22番のGPIOピンを出力として登録
fs.writeFileSync('/sys/class/gpio/export', '22');
fs.writeFileSync('/sys/class/gpio/gpio22/direction', 'out');

// 1秒毎にオンとオフを切り替える
var blink = setInterval(function() {

  if(count == maxCount) {
    // GPIOピンを開放
    fs.writeFileSync('/sys/class/gpio/unexport', '22');
    // インターバルを終了
    clearInterval(blink);
    return;
  }

  if(isOn) {
    // LEDをオフ
    fs.writeFileSync('/sys/class/gpio/gpio8/value', '0');
    isOn = false;
  } else {
    // LEDをオン
    fs.writeFileSync('/sys/class/gpio/gpio8/value', '1');
    isOn = true;
    count++;
  }

}, 1000);
