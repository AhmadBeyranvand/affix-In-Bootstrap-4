# Affix In Bootstrap 4
This function adds **Affix Plugin** to Bootstrap 4.

In addition, you can use this plugin Stand-Alone in your project.

> Note: This PlugIn requires jQuery Library

## How to Use
Copy `affix.js` in your project. I recommend add it to `/js` folder. Now add it in your page with this code:

    <script src='js/affix.js'></script>
Then declare the variables to be used for affix Function:

**Example:**

    var affixVal=200;
    var tagIDName='menu-lg-nav';
    var classesToAdd=['fixed-top',  'bg-dark',  'navbar-dark'];
    var classesToRemove=['navbar-light',  'bg-light'];
Finally use affix function as described below:

    affixBs4(affixVal, tagIDName, classesToAdd, classesToRemove);
 
 ![Graphical Example](http://s8.picofile.com/file/8325470026/show.gif)
 
 Good Luck!
