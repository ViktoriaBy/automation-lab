// Lines 2 through 6 are our boilerplate lines of code, we need them for our tests to work
const {Builder, Capabilities, By, Key} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

// First we're going to navigate to Google.com
beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

// And after our test has completed, we want to close our browser
afterAll(async () => {
    await driver.quit()
})


test('add a movie', async () => {
    const theInput = await driver.findElement(By.xpath('//input'))

    const searchTerm = 'Tenet'

    await theInput.sendKeys(searchTerm)

    const theButton = await driver.findElement(By.css('button'))

    await theButton.click();

    const theResult = await driver.findElement(By.xpath('//li/span')).getText()
   


//MY PART
// const deleteBtn = await driver.findElement(By.id('Tenet'))
 const crossOver = await driver.findElement(By.xpath('//*[text()="Tenet"]'))
await crossOver.click();

const deleteBtn = await driver.findElement(By.id("Tenet"))
await deleteBtn.click();



    
    expect(theResult).toBe(searchTerm)

    await driver.sleep(3000)

})