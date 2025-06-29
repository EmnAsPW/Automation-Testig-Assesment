# Automation Testing Execution Guide

This project contains WebdriverIO automation tests for the SauceDemo application, including checkout flow tests for different users .

---

## Prerequisites

- Node.js installed (v14 or higher recommended)
- NPM (comes with Node.js)
- Chrome browser installed (used by ChromeDriver)
- Stable internet connection (for downloading packages and running tests)

---

## Important Note

All three test scenarios should be run **separately**.

To do this, use the `specs` option in the `wdio.conf.js` file to include only one test spec at a time.

### Example:

To run only the Q3 performance glitch user test, update `wdio.conf.js` like this:

````js
specs: [
  //'./test/specs/cperformance.specs.js',
   // "./test/specs/bPurchase.specs.js",
    "./test/specs/cperformance.specs.js",

]

## Setup Instructions

1. Clone the repository:

```bash
# Your commands here
git clone https://github.com/EmnAsPW/Automation-Testig-Assesment.git

----
cd Automation-Testig-Assesment
---
npm install
---
npx wdio run wdio.conf.js
---

Run npm run wdio
````
