# README
[KeyWaves](https://tiffanyw-hu.github.io/KeyWaves/)

KeyWaves is an interactive audio visual sound board, where users are able to generate sound effects with a button. The technologies used are HTML Canvas for animations, JavaScript, and CSS.

## Key Features 

+ Mute BGM/Effects button
   + Users are able to choose to mute the background music and the sound effects on both the main page and the start menu
+ Animations 
   + Each button generates a different animation
   + Animations overlay when different buttons are clicked in quick succession

## Functionality 
KeyWaves was created with a minimalistic design where users are able generate their own sound effects to a 3x3 sound board for an interactive visual audio experience.

#### Animations/Sound
When multiple buttons are clicked in quick succession. The animation and audio overlay quickly, which is made possible by multi-layering different canvas elements.

![boardgif](http://res.cloudinary.com/dqj3kgpoj/image/upload/c_scale,w_682/v1524242557/one.gif)


#### Mute
Users are able to mute sound effects and the background music if they desire just experience the visual aspect of KeyWaves. They are found on both the sound board page and the main page.

### Challenges 
One of the challenges I encountered was the lack of canvas animation tutorials available. There are plenty of tutorials regarding animations for games and interactive shapes. The animations I had were similar to flash animations, which didn't have a lot of guidance when it came to Canvas. However, the tutorials that were available still helped as I was able to understand how Canvas worked from the many animation tutorials I used the knowledge to create animations that KeyWaves has now.

## Future Direction/Features 
Future updates will include:
+ Toggable BGMs and sound effects
+ Increase the grid size
+ Currently, the animations and sound for a button do not overlay when the same button in clicked in quick succession. Putting the animation objects in an array will be implemented in the future to rectify this problem
