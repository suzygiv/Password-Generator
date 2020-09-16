<h1 align="center">Password Generator</h1>

## Description

The Password Generator app is implemented by using dynamically updated HTML and CSS powered by my JavsScript code. 

## About the project

### How Does The Password Generator App Work?

Here is the Password Generator app: https://drive.google.com/drive/folders/1k9bun98EICcVnRI7dNose2bwm7V42zFO

- The user must click the "generate a password" button to begin the process. In order to generate the button, I had to create a variable called "generateBtn" that links back to the html button - var generateBtn = document.querySelector("#generate");
- Once the user clicks the button, they will be presented with a series of prompts for the password criteria. In order to create these prompts, I first had to create various arrays and variables for each of the criteria. 
 
   Arrays and Variables: https://drive.google.com/drive/folders/1k9bun98EICcVnRI7dNose2bwm7V42zFO

- The prompts presented to the user are as seen below. These prompts are created in order to determine the criteria that the user wants to include in their password. If the user does not input at least 8 to 128 characters, they cannot move forward and will receive an alert that says "Your password must contain at least 8 to 128 characters. Please try again." If they enter a password that is between 8 and 128 characters, the 'while loop' will run through the true statement of (confirmPasswordLength < 8 || confirmPasswordLength > 128) and it will run (x) amount of times. If they do not enter a number between 8 and 128, it will bring them back to the initial prompt of "How many characters would you like your password to contain?" Once the user inputs a number between 8 and 128 and the statement is true, they can move forward with the other prompts.

   Password Prompts: https://drive.google.com/drive/folders/1k9bun98EICcVnRI7dNose2bwm7V42zFO

- Once the user selects which criteria that they'd like to include within their password, the JavaScript code will go through many "if" statements to ensure the criteria is met within their password.

   Password 'If' Statements: https://drive.google.com/drive/folders/1k9bun98EICcVnRI7dNose2bwm7V42zFO

- After the 'If' statements, the code will go through a 'for loop' which will spit out the desired password chosen by the user based on the criteria above. 

   Password 'For Loop': https://drive.google.com/drive/folders/1k9bun98EICcVnRI7dNose2bwm7V42zFO

- Finally, the user should receive a password that meets their desired criteria, which is the desired password length (between 8 to 128 characters) and if they desire numeric characters and/or special characters and/or lowercase characters and/or uppercase characters.
   

Here is the link to my GoogleDrive for images above: https://drive.google.com/drive/folders/1k9bun98EICcVnRI7dNose2bwm7V42zFO?usp=sharing
