# Intercom Messenger Sheets App

Use this code as a starting point for allowing you to create custom, interactive experiences within the Intercom Messenger. You can use the [Build an App using Sheets](https://developers.intercom.com/docs/build-an-integration/getting-started/build-an-app-for-your-messenger/sheets-app) tutorial and can also find the code on Replit.

## Overview

The app utilizes Intercom's Canvas Kit and Sheets to present users with a scheduling interface directly within the Messenger. When a user interacts with the app, it opens a sheet (an embedded iframe) where they can select a date for a meeting. Upon submission, the app processes the input and confirms the booking.

## Prerequisites

* An Intercom workspace (paid or development)
* Node.js installed on your machine
* A tool like [ngrok](https://ngrok.com/) for exposing your local server

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Eclairemoy/messenger-sheets.git
cd messenger-sheets
```



### 2. Install Dependencies

```bash
npm install
```



### 3. Configure Environment Variables

Create a `.env` file in the root directory and add your Intercom app's client secret:

```env
CLIENT_SECRET=your_intercom_client_secret
```



Replace `your_intercom_client_secret` with the actual client secret from your Intercom app's settings.

### 4. Run the Application

```bash
node index.js
```



The server will start on the port specified in your environment variables or default to port 3000.

### 5. Expose Your Local Server

Use ngrok to expose your local server to the internet:

```bash
ngrok http 3000
```



Note the HTTPS URL provided by ngrok; you'll use this in the next step.

### 6. Configure Your Intercom App

* Navigate to the [Intercom Developer Hub](https://developers.intercom.com/).
* Create a new app or select your existing app.
* Under "Canvas Kit," set the following endpoints:

  * **Initialize URL**: `https://your-ngrok-url/initialize`
  * **Submit Sheet URL**: `https://your-ngrok-url/submit-sheet`
* Replace `your-ngrok-url` with the HTTPS URL provided by ngrok.

## Usage

Once set up, your Messenger app will display a "Book a Meeting" button. When clicked, it opens a sheet where users can select a date. Upon submission, the app confirms the booking and displays a confirmation message.
