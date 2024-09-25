# Currency Exchange Rate App

This is a currency exchange rate app built using **Vite**, **React**, and **Tailwind CSS**. The app fetches real-time currency exchange rates from the [Currency Freaks API](https://currencyfreaks.com) and displays them in a dynamic table. Additionally, it includes functionality to compute buy and sell rates for different currencies.

## Features

-   **Display Exchange Rates**: Displays real-time currency exchange rates for selected currencies in a table format.
-   **Buy Rate Function**: Calculates the buy rate for each currency based on a specific conversion logic.
-   **Sell Rate Function**: Computes the sell rate for each currency based on pre-defined logic.

## Tech Stack

-   **Vite**: For fast and modern development environment.
-   **React**: JavaScript library for building user interfaces.
-   **Tailwind CSS**: Utility-first CSS framework for responsive and customizable styling.
-   **Currency Freaks API**: For fetching real-time exchange rates.

## Installation

1.  **Clone the repository**:
    
    ```bash
    git clone https://github.com/your-username/currency-exchange-		rate-app.git` 
    ```
    
2.  **Navigate to the project directory**:
    ```bash
    cd currency-exchange-rate-app
    ```
   
3.  **Install dependencies**:
    ```bash
    npm install
    ```
    
4.  **Set up your API Key**:
    
    -   Create a `.env` file in the root directory.
    -   Add your API key from [Currency Freaks](https://currencyfreaks.com) in the `.env` file as follows:
        
    ```bash
    VITE_API_KEY=your_api_key_here`
    ```    
        
5.  **Run the development server**:
    ```bash
    npm run dev 
    ```   