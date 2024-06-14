const { chromium } = require('playwright');
const fetch = require('node-fetch');

jest.setTimeout(60000); // Increase timeout to 60 seconds

const waitForServer = async (url, timeout = 30000) => {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        console.log(`Server responded at ${url}`);
        return true;
      }
    } catch (error) {
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }
  throw new Error(`Server not responding at ${url}`);
};

beforeAll(async () => {
  await waitForServer('http://localhost:3000'); // Wait for the server to be ready
  browser = await chromium.launch();
  page = await browser.newPage();
  await page.goto('http://localhost:3000'); // Adjust URL if necessary
});

afterAll(async () => {
  await browser.close();
});