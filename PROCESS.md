### Password Generator Assignment ###

* 30/08
My first hurdle was finding where to begin. 

To start with I created a function of prompts to gather the users criteria. I'm not sure if the condition used is correct but it has the desired effect. (I will ask classmates, instructors and askBCS for direction if I cannot find a better way) 
[for example](./screens/user-conditions.png)

I started to write out the functions used to randomly generate password. I have tried to use and understand Math.floor and Math.random to get this. 

As I understand; 
* Math.random returns a random number between 0 and 1 (inclusive of 0 but exclusive of 1...) and; 
* Math.floor is used to round a number down to it's closest integer;
* String.fromCharCode is used to create a string to generate random numbers alphabets etc.
Then I added the special characters in much the same way by creating its own string
[example](./screens/random-functions.png)

### For some reason this generates mostly numbers and not many letters or special characters ###
[example](./screens/not-so-random.png) [](./screens/not-so-random2.png) [](./screens/not-so-random3.png) [](./screens/not-so-random4.png)

Not sure how to fix this issue as yet

Then I created some conditions relying on user selected criteria as booleans to determine the out come. 
* (I believe the above issue might be realted to this section so I will break it again and log my findings here)

I then added a loop (I had to do alot of reading about this and still don't quite understand. I will look into it further to se what it is all about)

