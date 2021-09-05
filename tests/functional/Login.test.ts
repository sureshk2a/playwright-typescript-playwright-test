import test from '../../lib/BasePages';

test(`Login to PHP travels.`, async ({ loginPage }) => {
    await loginPage.navigateToURL();
    await loginPage.loginToApplication();
});