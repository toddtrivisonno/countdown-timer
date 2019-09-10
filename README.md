Countdown Timer
Description
Create a webpage that displays a countdown, in digital clock format

For this project we will be using the Date object and setInterval / setTimeout

MVP
By default, the app should display a countdown timer.

Wireframe
countdown timer

Tech Stack
HTML
CSS
JS
Process
Setup:
Create repo, for example: my-app
Locally, navigate to your sites folder in the terminal
git clone + your-repo-name into your Sites folder
Create necessary files for application and view in VS Code
Run shell script to expedite process unless you are using a framework
If you are using a framework, disregard the "Application File Structure" section
Import and route necessary css/js files (E.g. Bootstrap)
Save all and create your first commit to master
Application File Structure
Minimally:

web/
    index.html - main page
    css/ - folder to contain CSS files
        style.css - main stylesheet
    img/ - folder to contain any images
    js/ - folder to contain JavaScript files
        main.js - main JavaScript file
README.md - any important information
.gitignore - file that omits any directory/file from being tracked
Additional pages will be relative to the index.html file.

It is okay if your project has more files and directories, but you at least need the ones listed above.

Develop:
Create a dev branch to commit your code to
Add content and elements to your website
View changes and test locally
Save often, and commit to your development branch on GitHub when important changes happen
Push your commits to GitHub remote
For bug fixes, refactored code, and feature branches, you must create a branch off of dev onto a new-feature branch and create a PR into dev when complete
Deploy:
Create a Pull Request from dev into master
Confirm code is up to date and works correctly
Post links to your GitHub repo to the Projects Slack channel
Requirements
To complete the assignment, you must complete the following:

Display the time
Make sure it updates every second without refreshing the page
Stop the timer when countdown reaches 0
Additional Requirements
Website must be responsive
Style your app as you wish
Use the tools and technologies covered in class to complete your website. To see what we have covered, check the Class Resources Repo.
Your repo should be public so that others can see your code and comment on it.
Remember to push to GitHub!
Potential employers will view your GitHub profile, so activity is crucial!
Stretch Goals
Change the font for the display; a mono-spaced font would look more like a digital clock, and it wouldn't jar your eyes as the variable-width string is re-centered every second.
Accept user input for length of timer.
Play an audible alert when countdown reaches 0
Play the song!
Make it look like an analog countdown timer