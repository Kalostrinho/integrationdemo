let assert =  require('assert');

Feature('===   Integration demo   ===');

// Should open the web page...
Before((I) => {
    I.amOnPage('/petclinic');

    // Validate that the image of the pets is loaded and the page is ready

    I.waitForElement("img[src*='pets.png']", 30);
    I.seeElement("img[src*='pets.png']");
    //I.saveScreenshot("OpenedURL.png", true);
    I.logStep("PASS", "Opened web page successfully");
    I.yell(`Up to this point, it was background scenario execution`);
});

//  Should assert title for PetClinic...
Scenario('Verify landing page', function*(I) {

    // Validate whether the page title is what's expected

    let h2Title = yield I.grabTextFrom("h2");
    assert.equal(h2Title,"Welcome", '[FAIL]: Home title   ---   Expected home title: [Welcome]   ---   Actual title: ' + h2Title);
    I.logStep(`PASS`, `Landing page title is as expected: ${h2Title}`);
});

Scenario('Look for veterinarians', function*(I) {

    //  Click on the "Veterinarians" link

    let vet = "Linda Douglas";
    I.click("Veterinarians","div.navbar");
    I.logStep(`Clicked on [Veterinarians] link`);

    // Wait for the "Veterinarians" section to load properly

    I.waitForElement("input[type='search']", 10);
    let h2Title = yield I.grabTextFrom("h2");
    assert.equal(h2Title.trim(), "Veterinarians", '[FAIL]: Web section title   ---   Expected text within title: [Veterinarians]   ---   Actual title: ' + h2Title);
    //I.saveScreenshot("OpenedVeterinariansSection.png", true);
    I.logStep(`PASS`, `[Veterinarians] section opened successfully`);

    // Run a veterinarian search...

    I.fillField("input[type='search']", vet);
    //I.wait(2);
    //I.saveScreenshot("SearchedVeterinarian.png", true);
    I.logStep(`Searched veterinarian ${vet}`);
    I.wait(2);

    // Return home

    I.click("Home","div.navbar");
    I.logStep(`PASS`, `Returned home`);

});
