#Live Demo ==> https://brave-kirch-a43e2d.netlify.app/
# StormBreaker-HackPSUFall2019
# Inspiration
We were inspired by the catastrophes we have learned about like the Palm Sunday and Andover tornado disasters that wiped out large parts of communities in an instant. We care deeply about our families and making sure that they are always safe and have a home to go to. Our plan is to implement a product that will protect those we care about and provide families, residences, and emergency responders with enough time to detect dangerous conditions that has the potential to save lives.

#  What it does
Our product receives data from a sensor that can detect fluctuations in short-range distances that monitors a windbreaker. In the event of a tornado emergency, our sensor will respond to a high change in wind speed and report to our Google Cloud database and the Google Cloud computing to inform the emergency responders and those who need it the most.

# How we built it
Using a raspberry pi and ultrasonic-sensor we can detect the change in resistance of a rubber band to get the wind speed. We send the data to Google Cloud to analyze if there is a possibility for a tornado. Then we send that back to the user in a visual form so they can understand it better and be better aware. It can also call emergency responder if need be, by the user's request. It can detect the threshold we have set in the code to see if you are in danger of a tornado.

# Challenges we ran into
The challenge we ran into while programming is that our senor was not getting reliable data because it was broke. Additionally, right after that, we found that our raspberry pi is broken. We weren't able to send the data to our real-time database to the computing which set us back many hours of troubleshooting. Also connecting the database to work in the raspberry pi and retrieving that data using javascript was a difficult process.

# Accomplishments that we're proud of
Some of the accomplishments that we're proud of are that we are able to implement collected or given data to compute the threshold and visualize the data once collected. We are also proud of creating our own database using cloud computing platforms like Firebase.

# What we learned
We were able to learn the transition between both hardware and software.

# What's next for Storm Breaker
The future of Storme Breaker will be a fully mobile app that can know you location and warm for any natural disaster happening and if you are in danger of that. Additionally, we are going to implement AI and machine learning to warn the user ahead of time for potential threats and disasters.
