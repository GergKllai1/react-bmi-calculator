describe("BMI Converter", () => {
  beforeAll(async () => {
    await page.goto("http://localhost:3000");
    await jest.setTimeout(10000);
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
});
