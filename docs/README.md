## KeyWaves

#### Background and Overview 
KeyWaves is a generative music sound board combining animation visuals and music for an interactive user experience. Each button will be attached to an animation sequence, and a user will be able to create melodies by clicking around the screen.

#### Functionality and MVP
Users will be able to: 
+ Click on the screen to generate a variety of sounds 
+ See different animations attached to a button
+ See animations overlay when a subsequent button is pressed before the prior animation is finished
+ Menu will display during inactivity and disappear upon activity
+ Mute sound

#### Wireframes
This app will consist of a single screen with music and button controls. Animations will appear and overlay each time a user clicks on a button. 

The grid lines will be invisible but each section will contain a button that's attached to an animation and an audio sample.
![keywaves](http://res.cloudinary.com/dqj3kgpoj/image/upload/v1523826493/keywaves.jpg)

#### Architecture and Technologies 
This project will be implemented with the following technologies:
+ Vanilla JavaScript
+ `HTML5 Canvas`
+ `Web Audio API`

#### Implementation Timeline
**Over the weekend**
+ Complete Canvas and WebAudioAPI tutorial

**Day 1:** Setup necessary node modules
+ Have an object rendered on `Canvas` to create a sound

**Day 2:** Animations
+ Design animations for a third of the board
+ Clicking on a button will display the animation
+ Animations will overlay

**Day 3:** Animations
+ Finish the rest (2/3) of animations 

**Day 4:** Adding sound and menu
+ Build sound library
+ Buttons will play a note and an animation
+ Create a menu 
+ Create a mute button
