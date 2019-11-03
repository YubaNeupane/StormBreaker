import RPi.GPIO as GPIO
import time
import http.client


import json
myurl="35.222.157.224"
getapi = http.client.HTTPSConnection("telize-v1.p.rapidapi.com")
headers = {
    'x-rapidapi-host': "telize-v1.p.rapidapi.com",
    'x-rapidapi-key': "SIGN-UP-FOR-KEY"
    }
apitolocation = http.client.HTTPSConnection(myurl)

GPIO.setmode(GPIO.BCM)

TRIG = 23
ECHO = 24

print("Distance Measurement In Progress")

GPIO.setup(TRIG,GPIO.OUT)
GPIO.setup(ECHO,GPIO.IN)

GPIO.output(TRIG, False)
print("Waiting For Sensor To Settle")
time.sleep(2)

GPIO.output(TRIG, True)
time.sleep(0.0001)
GPIO.output(TRIG, False)
doof="true"

while(doof=="true"):
    while GPIO.input (ECHO)==0:
        pulse_start = time.time()
    while GPIO.input (ECHO)==1:
        pulse_end = time.time()
    pulse_duration = pulse_end - pulse_start
    distance = pulse_duration * 17150
    distance = round(distance, 2)
    getapi.request("GET", "/jsonip?callback=getip", headers=headers)
    res = getapi.getresponse()
    data = res.read()
    getapi.request("GET", "/?ip="+data+"&distance="+distance)

    GPIO.cleanup()
    time.sleep(5000)
