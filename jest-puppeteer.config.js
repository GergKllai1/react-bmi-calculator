module.export = {
    verbose: true,
    preset: "jest-puppeteer",
    testRegex: ".feature\\js$",
    launch: {
        headless: process.env.CI === 'true',
        slowMo: 50,
        devtools: true
    },
};