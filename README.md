# Channel Configuration Application

## Description

This project is an implementation of a Channel Configuration Application that matches the provided high-fidelity wireframe on Figma. It allows users to create and configure channels based on a JSON schema and provides a preview of the configured channels.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Assumptions](#assumptions)
4. [Usage](#usage)
5. [Features](#features)
6. [Technologies Used](#technologies-used)
7. [Contact Information](#contact-information)

## Prerequisites

Before you begin, ensure that you have the following installed on your machine:

- [Node.js](https://nodejs.org): The JavaScript runtime environment.
- Package Manager (npm or yarn): npm is typically installed with Node.js.

## Installation

To install and run the Channel Configuration Application, follow these steps:


1. Install dependencies: `npm install`
2. Start the application: `npm run start`
3. Open the app in a browser: After the development server starts successfully, open your web browser and navigate to http://localhost:3000. You should see the React app running.

## Assumptions
- Channel name is combination of Primary Channel and Reference Channel.
- Select option for Primary Channel is disabled to maintain the amount of channels given in schema.json.
- If value of Backup Reference Channel is NULL, then that channel is not considered as a backup channel.
- Names of Channels and Additional settings in schema.json are random strings.

## Usage

### File Upload Page

The File Upload page is the first step of the configuration process. It provides a user interface (UI) for uploading files and a "Next" button for navigation to the next step.

### Channel Configuration Page

The Channel Configuration page is the second step. It requires fetching the "Schema.json" file.

Using the "channels" key-value pairs in the schema.json file, the application generates a form for mapping channels. Additional settings can be configured using data from the "optionals" key-value pairs.

The "Add backup channels" button opens a collapsible dropdown with the same Primary and Ref channel select elements. 


The application utilizes Context to manage data/state globally and saves channel configurations to local storage in real-time. This ensures that if a user closes the browser and returns later, their settings are automatically loaded.

### Preview Page

The Preview page is the third and final step of the configuration process. It displays a preview of the configured channels. If the user clicks on "Edit Channels," they are taken back to the Channel Configuration page (step two).

After completing the preview and the third step, the Save page is displayed. The edit buttons are disabled, and notifications are shown.


## Features

- File Upload Page: User interface (UI) for file uploading and navigation to the next step.
- Channel Configuration Page: Dynamically generated form for mapping channels based on the schema.json file. Additional settings configuration using data from the schema.json file. Collapsible dropdown for adding backup channels.
- Preview Page: Displaying a preview of the configured channels. Ability to edit channels and navigate back to the Channel Configuration page.
- Context Integration: Managing data/state globally and saving channel configurations to local storage in real-time.
- Save Page: Disabling edit buttons and displaying notifications according to the Figma design.

## Technologies Used

- React: JavaScript library for building user interfaces
- Context API: State management library for React applications
- HTML5: Markup language for structuring web pages
- CSS3: Styling language for designing web pages
- JavaScript: Programming language for implementing application logic

## Contact Information

For any inquiries, please contact Shubham More at shubhamore02@gmail.com.
