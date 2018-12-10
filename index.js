const internet = require('./internet.json');
const internet2 = require('./internet2.json');

let validLinks = [];
let invalidLinks = [];
let skippedLinks = [];

const recursion = (data, address) => {
  let page = data.pages.find( page => {
    return page.address === address
  })

  if (page){
    if (!validLinks.includes(page.address)){
      validLinks.push(page.address)
      page.links.map(link => recursion(data, link))
    } else {
      if (!skippedLinks.includes(page.address)){
      skippedLinks.push(page.address)
  }
  }
} else {
      invalidLinks.push(address)
    }
}

recursion (internet, internet.pages[0].address)

console.log('Valid Links: ', validLinks, 'Skipped Links: ', skippedLinks, 'Invalid Links: ', invalidLinks)
