describe("BMI Converter", () => {
  jest.setTimeout(30000);
  beforeAll(async () => {
    await page.goto("http://localhost:3000");
  });

  beforeEach(async () => {
    await page.reload();
  });

  describe("Metric method", async () => {
    beforeEach(async () => {
      await page.type('input[name="weight"]', "95");
      await page.type('input[name="height"]', "186");
      await page.click('button[id="calculate"]');
    });

    it("displays assessment", async () => {
      await expect(page).toMatch("You are Overweight");
    });

    it("displays BMI value", async () => {
      await expect(page).toMatch("BMI of 27.46");
    });
  });

  describe("Imperial method", async () => {
    beforeEach(async () => {
      await page.type('input[name="weight"]', "200");
      await page.type('input[name="height"]', "73");
      await page.click('button[id="methodchange"]');
      await page.click('button[id="calculate"]');
    });

    it("displays assessment", async () => {
      await expect(page).toMatch("You are Overweight");
    });

    it("displays BMI value", async () => {
      await expect(page).toMatch("BMI of 26.38");
    });
  });
});
