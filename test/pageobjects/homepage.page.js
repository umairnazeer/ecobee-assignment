import Page from './page'

class HomePage extends Page {

    get articles() { return $$('article[data-fhtype="story"]') }
    get allIcons() { return $$('//*[starts-with(@id, "topic")]') }
    get icons() { return $$('.topic>a>img')}

    open() {
        browser.url('')
    }

    countArticles(element) {
        return element.length; 
    }

    getIcons(iconElement){
        let title = 'title'; // hardcoded to get thet attribute text of the icons

        iconElement.forEach(element => {
            return console.log("the Attribute text is " + element.getAttribute(title));
        });
    }

    getUniqueIcons(iconElement){
        let title = 'title';
        let arr = [];

        // get all icon text
        iconElement.forEach(element => {
            arr.push(element.getAttribute(title));
        });
        const unique = [...new Set(arr)];       
        const matchingValues = arr.reduce((acum,cur) => Object.assign(acum,{[cur]: (acum[cur] | 0)+1}),{});
        console.log("ALL ICONS: ", arr);
        console.log('TOTAL ICONS ARE: ' + arr.length + '\n');
        console.log("THE UNIQUE ICONS ARE: ", unique);
        console.log("TOTAL UNIQUE ICONS ARE: " + unique.length + '\n');
        console.log("ICONS AND THERE COUNT: ", matchingValues);
    }  

}

export default new HomePage()
