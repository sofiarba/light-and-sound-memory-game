# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Sofia Roz Anuar**

Time spent: **3.5** hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

* [ ] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [ ] "Start" button toggles between "Start" and "Stop" when clicked. 
* [ ] Game buttons each light up and play a sound when clicked. 
* [ ] Computer plays back sequence of clues including sound and visual cue for each button
* [ ] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [ ] User wins the game after guessing a complete pattern
* [ ] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [/] User can see number of strikes/mistakes they have made

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![]()![](https://i.imgur.com/qRJYSqg.gif)



## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
- https://coolors.co/
- https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_box-shadow
- https://stackoverflow.com/questions/31188384/css-opacity-for-a-button

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

The biggest challenge I encountered was creating the timer functionality of this game. One specific issue I was trying to solve was how to display the timer on the webpage. To combat this, I used online forums like stack overflow and then understood how to display constantly changing javascript variables like the number of seconds and the number of mistakes onto the webpage using DOM functions. I specifically used document.getElementById(...).innerHTML which changes the contents of the tag with a specific ID. Unfortunately, I was unable to complete this optional feature under the time I allotted to complete this project. I was able to implement a display of the number of mistakes made so far in the game, using the DOM function. I was also successful in implementing the timer itself, however I am still trying to figure out how to decrement the timer, where it starts from a maximum value for the number of seconds a user can take to input the given sequence of tones at each turn.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
I realised that there were not many built in functionality in javascript such as having to create a countdown timer from scratch. This has made me wonder how bootstrapping works and whether it is efficient and easy to use. I also wonder what is the most efficient way to design a website from scratch using css. Do web developers often bootstrap their code? I have been interested in web development for the past few months and I am excited to learn how web developers interact with UI/UX designers to create a beautiful website.


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
I would have wanted to add a feature where the user could choose the difficulty level: easy, medium, hard. I would have chosen each level to have a different speed up of the clue playback as the game goes on. Another important addition I would’ve liked to make is to refactor the pattern generator function (randomisePattern()) to ensure its output, the pattern, would not have the same button occurring several times in a row. It would also have been very fun to implement a feature that allows the user to choose how many buttons they want to display and to make the colour scheme look more attractive and more accessible, i.e. having a separate page that explains the rules of the game.




## License

    Copyright Sofia Anuar

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.