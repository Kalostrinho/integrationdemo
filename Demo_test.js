let assert =  require('assert');

Feature('===   Integration demo   ===');

// Should open the web page...
Scenario('Open url', (I) => {
    I.amOnPage('/');
    I.waitForElement({name: 'bank_id'}, 20);
    I.seeElement("img[src*='topbanner']");
    //I.saveScreenshot("OpenedURL.png");
    I.yell(`Opened webpage successfully`);
});

//  Should fail...
Scenario('Get application title', function*(I) {
    let title = yield I.grabTitle();
    assert.equal(title,"Pet", '[FAIL]: Web page title   ---   Expected text within title: [Pet]   ---   Actual title: ' + title);
});
