# FitCall

You can find application here: https://fitcall.netlify.app/

Welcome to FitCall!
FitCall is a React single-page application for anyone who wants to exercise. It gives users access to the comprehensive database of exercises and create their own personalized workouts. The app also offers the option to generate random workouts or create workouts based on user preferences. 

## What is FitCall?

FitCall is a React-based application designed to help users create personalized workout routines by leveraging a database of exercises. After logging in, users can browse through a range of exercises to find what they prefere. The app offers multiple features to enhance the user experience, including: 

Customizable Workouts: Users can create workouts based on their preferences. The app allows users to set parameters such as:

- Body Part: Focus on specific body areas (e.g., arms, legs).
- Time: Define the workout duration.
- Difficulty: Select the desired intensity of the workout (e.g., beginner, intermediate, advanced).

Random Workout Generation: For users who prefer a simpler experience, FitCall can generate a completely random workout without any specific parameters. This is ideal for those looking for variety.

## Technologies 

This project was built using:

- React
- React Routing

## Usage

This section contains a detailed description of how the application works, along with a graphical representation.

1. **Landing Page**

Upon the first opening of the browser window, landing page will appear offering the oportunity for user to log in or sign up.

![FitCall landingpage](https://github.com/AndreaZummer/FitCall/blob/585f43135dcbb4b914c9b5a38feae2e17de0424f/src/data/resources/readme/FitCall-landingpage.png)

![FitCall landingpage](https://github.com/AndreaZummer/FitCall/blob/585f43135dcbb4b914c9b5a38feae2e17de0424f/src/data/resources/readme/FitCall-landingpage2.png)

![FitCall sign up](https://github.com/AndreaZummer/FitCall/blob/585f43135dcbb4b914c9b5a38feae2e17de0424f/src/data/resources/readme/FitCall-signup.png)

![FitCall login](https://github.com/AndreaZummer/FitCall/blob/585f43135dcbb4b914c9b5a38feae2e17de0424f/src/data/resources/readme/FitCall-login.png)

2. **Home**

After the user logs in, the home page is displayed. It allows the user to choose from three options: create their own workout, filter workouts based on preferences, or generate a random surprise workout.

![FitCall home](https://github.com/AndreaZummer/FitCall/blob/585f43135dcbb4b914c9b5a38feae2e17de0424f/src/data/resources/readme/FitCall-offer.png)

3. **List of Exercises**

After choosing the first option, a list of exercises is displayed. At the top of the page is a section for the chosen exercises, and below it is a section displaying all available exercises, with twelve items per page. Each exercise includes a picture, a short description, the difficulty level, the targeted body part, and the required equipment. Most exercises also offer the option to choose between interval training or the number of repetitions. Once all exercises are selected, the workout can be displayed on the screen.

![FitCall list of exercises](https://github.com/AndreaZummer/FitCall/blob/585f43135dcbb4b914c9b5a38feae2e17de0424f/src/data/resources/readme/FitCall-list.png)

![FitCall list of exercises](https://github.com/AndreaZummer/FitCall/blob/585f43135dcbb4b914c9b5a38feae2e17de0424f/src/data/resources/readme/FitCall-list2.png)

4. **Filter**

After choosing the second option, a filter for exercises is displayed. It allows users to select target body parts, difficulty level, equipment, exercise duration, and whether they prefer interval training or repetitions. Users can choose any combination of these filters, or leave them all unselected.

![FitCall filter](https://github.com/AndreaZummer/FitCall/blob/585f43135dcbb4b914c9b5a38feae2e17de0424f/src/data/resources/readme/FitCall-filter.png)

![FitCall filter](https://github.com/AndreaZummer/FitCall/blob/585f43135dcbb4b914c9b5a38feae2e17de0424f/src/data/resources/readme/FitCall-filter2.png)

5. **Surprise**

The third option is to select a surprise workout. This workout can include any exercises and is generated randomly. The duration is set between 15 to 40 minutes.

![FitCall surprise](https://github.com/AndreaZummer/FitCall/blob/585f43135dcbb4b914c9b5a38feae2e17de0424f/src/data/resources/readme/FitCall-surprise.png)

## Future

In the future, many features can be added to this project. The first feature to add is the ability to view detailed descriptions for each exercise, including instructions on how to perform them correctly. Another addition would be a timer for every workout, with the current exercise being highlighted.

## Running Locally

1. Clone the repository:

   ```sh
   git clone https://github.com/AndreaZummer/FitCall.git
    cd fitcall
   ```

2. Install the required dependencies:

   ```sh
   npm install
   ```

3. Launch the development server:

   ```sh
   npm run start
   ```