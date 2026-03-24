# Ezra-test
Take home Assessment

# Trade offs and Assumptions
I decided to automate an E2E test of the booking flow of an MRI Scan. I like to prioritize "Happy Path" E2Es for this assessment to test the full user journey, while assuming individuals field validations can be handled in insolation/ seperate spec file, and in unit testing. Trade off for this is E2E these can catch integration issues but can be harder to debug at times as they are longer. But when written well and following best pratices we can maintain them pretty easliy.


# Scalalbility and Future Imporvements

- I would like to implement toHaveScreenshot() to catch breks and functional misses, and also will be easier to include as test artifacts for Jira bug tickets.

- I will use API seeding where I can, to get rid of some the manual clicking, to jump straight into certian pages to save test executions.

- At my current company we are using BDD framwork with cucumber and there is some value to this, as feature files are written in plan english and Test cases and feature match directly.(comes with trade offs)

- With keeping **scalalbility** in mind, I would create tests that are not depended on one another. With this mindset we can aim for Parallelization and speed up test execution, and not be a bottle neck for CI / CD.   

- While playwright is great for UI validations and automating E2E, in the future I would also focus on performance testing as well. I can us k6 to simulate 500 users hitting up APIs, while that is happening we can also trigger playwright UI test to make sure the load from those users is not making any impact on the E2E test.

# Set up 

### Clone this repo
```
git clone <your-repo-link>
cd ezra-test-assessment
```

### Install dependencies
```
npm install
```
### Environment Configuration:

I haved changed my password, and added it to the testData.js file, the botttom can ignored now.

I have added my user name and password to the .evn file, this can be stored in testData.js file as well, but I signed up with my email and a password that I use often, and didn't want to add it in there.

There is .env examples file that I added to the repo user that as a baseline for the .env file.
```
Create a .env file in the root directory (if required by your implementation) to store sensitive data like your test credentials.
```

### Running Test
Use this command for running headed mode and to watch test execution
```
npx playwright test bookingE2E.spec.js --project"chromium" --headed
```
# Walk Through

There are three folders, its a pretty simple Page-Object Model framework in the pages I have added all of the locator and methods to perform actions we export those into the spec file and create a new object, and call the methods there. Which increases the readability and use DRY principle. Don't Repeat Yourself, if any of the locators change we just need to update them once in the constructor and all of the references in the specs will be resolved.
```
- pages
  - LoginPage.js
  - DashboardPage.js
  - BookingFlowPage.js
  - medicalQuestionairePage.js
- support
  - testData.js
- tests
  - BookingE2E.spec.js
```

View the CI/CD reports here
```
https://github.com/Jagman-dot/Ezra-test/actions/workflows/playwright.yml
````
Previous run results in CI / CD 
<img width="1622" height="999" alt="image" src="https://github.com/user-attachments/assets/27932f96-7330-44d6-ac78-c3efae85e08c" />
