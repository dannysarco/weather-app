const { chromium } = require('playwright');

describe('Weather App', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    console.log('Navigating to http://localhost:3000');
    await page.goto('http://localhost:3000'); // Adjust URL if necessary
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should display weather information for the entered zip code', async () => {
    console.log('Filling zip code input');
    await page.fill('input[placeholder="Enter your zip code"]', '90210');
    console.log('Clicking Get Weather button');
    await page.click('button:text("Get Weather")');

    console.log('Waiting for weather information to be displayed');
    await page.waitForSelector('h2'); // Wait for the weather information to be displayed

    const cityName = await page.textContent('h2');
    const temperature = await page.textContent('p:nth-of-type(1)');
    const weatherDescription = await page.textContent('p:nth-of-type(2)');

    console.log('Asserting weather information');
    expect(cityName).toBe('Beverly Hills'); // Adjust according to your expected output
    expect(temperature).toContain('°C');
    expect(weatherDescription).toBeTruthy();
  });
});