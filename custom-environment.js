const PlaywrightEnvironment = require('jest-playwright-preset/lib/PlaywrightEnvironment').default;

class CustomEnvironment extends PlaywrightEnvironment {
  async setup() {
    await super.setup();
  }

  async teardown() {
    await super.teardown();
  }

  getVmContext() {
    return super.getVmContext();
  }
}

module.exports = CustomEnvironment;