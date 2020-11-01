# Automation framework using Cucumber JS - Technical test GAP
This project was created in order to fulfill the technical test in GAP.  
This project has 3 features under test (Login, Create employee and Delete employee)

## Used Tools:
- Javascript
- Cucumber
- WebDriverIO selenium-standalone

## Configuration

### Prerequisites:
1. Java, check here to download it [download Java](https://www.oracle.com/downloads/)
2. Node JS
3. npm

### Steps:
1. Clone this project with:  
`git clone https://github.com/sa-martinezr/gap-cucumber.git`
2. Install all the dependencies with:  
`npm install`
3. Create a .env file in the root directory. Copy the .env.example file located at the root directory and rename it.
4. Set the env variables to run the tests as following:

   Variable Name | Value
   ------------ | -------------
   **BASE_URL** | The application base url under test. Don't put a slash ("/") at the end of the url
   **USER_EMAIL_PASSWORD** | the user email password to run the Login features
   **BROWSER_NAME** | the browser to run the automation. Check the WebDriverIO supported browsers to automate here [Automation Protocols](https://webdriver.io/docs/automationProtocols.html)  

## Run tests:

### Run all tests:

On the terminal at the root directory run the command  
`npm test` or `npm run test` 

### Run a specific feature:
This project has 3 features available to run, use the following command:  
`npm test:{FeatureName}`

Check this table to run the features:

   Command | Feature to Run
   ------------ | -------------
   `npm run test:Login` | Run the Login.feature
   `npm run test:NewEmployee` |  Run the NewEMployee.feature
   `npm run test:DeleteEmployee` | Run the DeleteEmployee.feature
