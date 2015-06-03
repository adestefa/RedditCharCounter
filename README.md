
![alt tag](https://github.com/adestefa/RedditCharCounter/blob/master/reddit.png)

# RedditCharCounter
Show the number of characters left when creating a new post on Reddit


A few subreddits (/politics, /worldnews, etc) it is common to have very long titles. A post will be rejected if the title is over 300 characters. I find it annoying there is no way to know if you have gone over until after submitting and it is too late. Had to fix that. See how many characters are left as you type in real-time.


## Installation
Drag the link below to your Browser's link toolbar or right-click to add to your favorites

[Reddit Char Counter](javascript:jQuery.getScript('//adestefa.com/reddit/tools/char.js',%20function()%20{void(0);});void(0);)

Actual bookmarklet code: `javascript:jQuery.getScript('//adestefa.com/reddit/tools/char.js',%20function()%20{void(0);});void(0);`

*Having problems using github to installing? Open the included char.html file in your browser, which will give you access to install the link from a real HTML page instead of Github markdown.*


## Usage
When you are filling out your post, click the new 'Reddit char counter' bookmark and enjoy!

![alt tag](https://github.com/adestefa/RedditCharCounter/blob/master/bookmark.jpeg)


## How it works
The bookmark is actually a tiny bit of JavaScript which downloads a small char.js file that does the work. It adds the new label and shows the actual characters left as you type.

![alt tag](https://github.com/adestefa/RedditCharCounter/blob/master/demo.jpeg)


## Known issues
- The counter stops working if you click the bookmark more than once on the same page.
- Does not work with Reddit Enhancement Suite running.

