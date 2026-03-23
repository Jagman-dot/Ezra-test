# Ezra-test
Take home Assessment

# Trade offs and Assumptions
I decided to automate an E2E test of the booking flow of an MRI Scan. I like to prioritize "Happy Path" E2Es for this assessment to test the full user journey, while assuming individuals field validations can be handled in insolation/ seperate spec file, and in unit testing. Trade off for this is E2E these can catch integration issues but can be harder to debug at times as they are longer. But when written well and following best pratices we can maintain them pretty easliy.


# Scalalbility and Future Imporvements

- I would like to implement toHaveScreenshot() to catch breks and functional misses, and also will be easier to include as test artifacts for Jira bug tickets.

- I will use API seeding where I can, to get rid of some the manual clicking, to jump straight into certian pages to save test executions.

- At my current company we are using BDD framwork with cucumber and there is some value to this, as feature files are written in plan english and Test cases and feature match directly.(comes with trade offs)

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
```
Create a .env file in the root directory (if required by your implementation) to store sensitive data like your test credentials.
```
