const { Builder, By, Key, until } = require("selenium-webdriver");

async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("http://localhost:3000");
    driver
      .manage()
      .window()
      .maximize();

    driver.findElement(By.id("btnEnseignant")).click();

    ajoutEnseignant = await driver.wait(
      until.elementLocated(By.id("ajoutEnseignant"))
    );

    ajoutEnseignant.click();

    const firstname = await driver.wait(
      until.elementLocated(By.name("prenom"))
    );
    firstname.clear();
    await firstname.sendKeys("Houda");

    const lastname = await driver.wait(until.elementLocated(By.name("nom")));
    lastname.clear();
    await lastname.sendKeys("Oufaida");

    ajouter = await driver.wait(until.elementLocated(By.id("ajouter")));
    await ajouter.click();
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Success");
  }
}
example();
