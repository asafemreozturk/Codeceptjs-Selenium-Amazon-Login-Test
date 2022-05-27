Feature('login');

Scenario('Wrong E-mail Form @testcase1', ({ I }) => {
    I.amOnPage("http://www.amazon.com");
    I.waitForElement('#nav-logo-sprites');
    I.click('#nav-link-accountList');
    I.fillField('.a-input-text.a-span12.auth-autofocus.auth-required-field','try');
    I.click('.a-button-input');
    I.seeElement(".a-list-item,We cannot find an account with that email address");
});

Scenario('Correct E-mail Form, wrong password @testcase2', ({ I }) => {
    I.amOnPage("http://www.amazon.com");
    I.waitForElement('#nav-logo-sprites');
    I.click('#nav-link-accountList');
    I.fillField('.a-input-text.a-span12.auth-autofocus.auth-required-field','try@gmail.com');
    I.click('.a-button-input');
    I.fillField('#ap_password','asadsdsdsd2121');
    I.click('.a-button-input');
    I.seeElement(".a-list-item,Your password is incorrect");
});

