#!/usr/bin/env python
# -*- coding: utf-8 -*-
# 必要なライブラリの読み込み
import RPi.GPIO as GPIO
import time

# GPIOを使うためのおまじない
GPIO.setmode(GPIO.BCM)		# PIN番号でなく、GPIOの番号で指定
pin=22				# GPIO 22 (15番品)を使う
GPIO.setup(pin, GPIO.OUT)	# 出力に使用する

while True:			# 以下の処理を繰り返し行う
	GPIO.output(pin,1)	# HIGH (1) = 3.3V
	time.sleep(0.2)		# 0.2秒待つ
	GPIO.output(pin,0)	# LOW (0) = 0V
	time.sleep(0.2)		# 0.2秒待つ
