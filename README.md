Project Summary
1. Set Up Clerk Authentication
Implemented user authentication using Clerk.

Used Clerk's SignIn and SignOutButton components to manage user sessions.
Integrated Clerk's useUser hook to display the current user's profile details (name and email) in the application.

2. Firebase Realtime Database Integration
Configured Firebase Realtime Database and added environment variables for Firebase configuration.

Created a firebase-config.js file to initialize Firebase services (auth and database).
Added sample data to Firebase Realtime Database for testing.

Integrated Firebase with Clerk for secure user authentication and data access.

3. Fetching and Displaying Data

Built a OrderTable component to fetch and display orders from Firebase Realtime Database.

Ensured that the data fetched from Firebase is displayed in a responsive table using Tailwind CSS for styling.

4. Security Rules for Firebase

Set up Firebase Realtime Database rules to secure data, ensuring that only authenticated users can read/write data.

5. Sign-Out Handling

Used Clerk’s SignOutButton to securely handle user sign-out and redirect them to the sign-in page.

6. UI Components Integration

Utilized components from the Catalyst Tailwind UI kit to create a cohesive and modern interface.

Implemented user interface elements like tables, headings, and dropdowns to display data and manage user actions.
