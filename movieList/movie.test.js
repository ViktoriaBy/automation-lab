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

//ADD MOVIE
// test('add a movie', async () => {
//     const theInput = await driver.findElement(By.xpath('//input'))

//     const searchTerm = 'Tenet'

//     await theInput.sendKeys(searchTerm)

//     const theButton = await driver.findElement(By.css('button'))

//     await theButton.click();

//     const theResult = await driver.findElement(By.xpath('//li/span')).getText()
//     expect(theResult).toBe(searchTerm)
//     await driver.sleep(3000)

// })

//ADD MOVIE + CROSS OFF A MOVIE
test('We can add & cross off a movie', async() => {
    const movieInput = await driver.findElement(By.xpath('//form/input'))

    await movieInput.sendKeys('ET\n') //SENDING ET INTO THE INPUT

    const movieLi = await driver.findElement(By.css('span'));
    await movieLi.click();

    await driver.sleep(6000)  
})

//after adding movie and crossing it off new site google opens

test('this is a test', async() => {
    await driver.navigate().refresh()  //tell the browser to refresh
    
    await driver.sleep(2000)
    await driver.navigate().to('https://ww.google.com') //tell the browser to open a new site after refresh
   
})

//MY PART
// // const deleteBtn = await driver.findElement(By.id('Tenet'))
//  const crossOver = await driver.findElement(By.xpath('//*[text()="Tenet"]'))
// await crossOver.click();


// const addedBack = await driver.findElement(By.id('message'))
// await addedBack.click();



// const deleteBtn = await driver.findElement(By.id("Tenet"))
// await deleteBtn.click();



    
 
