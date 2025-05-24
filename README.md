# 🚀 AI-Powered UI Theme Generator

## **Overview**
This project is an AI-powered **UI Theme Generator** that dynamically applies **Material Design styles** based on user input. It integrates **n8n workflows** to automate theme generation, ensuring **adaptive styling**.

## **Features**
- 💡 **AI-driven Theme Selection**: Generates UI themes based on user preferences.
- 🎨 **Material Design Styling**: Applies primary, secondary, and accent colors dynamically.
- 🤖 **Automated n8n Workflow**: Uses AI automation to refine theme selection.
- 🖥️ **Modular UI Components**: Includes **buttons, cards, typography**, following clean architecture.

## **Project Structure**
ai-theme-agent/ │── src/ │   ├── components/        # UI elements (Button, Card, Typography) │   ├── aiAgent/           # AI-powered logic for dynamic themes │   ├── utils/             # Helper functions for validation & styling │   ├── index.html         # Web interface │   ├── styles.scss        # Material Design styling │   ├── index.js           # Frontend logic │── server/                # Backend API │   ├── api.js             # Theme processing │── workflows/             # AI automation via n8n │   ├── ai-theme-workflow.json │── package.json           # Dependencies & scripts │── README.md             

 # Project documentation

## **Setup Instructions**
📌 Step 1: Install Dependencies
Run the following command to install all required packages:
```sh
npm install
📌 Step 2: Start the Server
Use the command below to start the backend:
npm start
📌 Step 3: Run the Frontend
Open index.html in a browser or use a local development server:
npm run dev
📌 Step 4: Automate with n8n
- Import workflows/ai-theme-workflow.json into n8n.
- Start n8n to automate theme generation.



