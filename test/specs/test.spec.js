import HomePage from '../pageobjects/homepage.page';
import PollsPage from '../pageobjects/polls.page';
import { expect } from 'chai';


describe('Home page', () => {
    let articleCount;
    describe('Articles', () => {
        beforeAll(() => {
            HomePage.open();
        })

        it('total articles on the homepage', () => {
            console.log('the total number of articles are: ' + HomePage.countArticles(HomePage.articles));
            // assert title
        });

        it('list of unique icons on the article titles', () => {
            HomePage.getUniqueIcons(HomePage.icons);
            // assert for image visible
        });

    });

    describe('Daily poll', () => {
        it('can vote for daily poll randomely', () => {
            PollsPage.open();
            PollsPage.selectRandomAnswer();
            PollsPage.clickVoteNow();
            expect(browser.getUrl()).to.contain('/pollBooth.pl');
        });
        it('total number of people voted for this poll', () => {
            console.log("Total Number of Votes: " + PollsPage.getTotalVotes());
            expect(PollsPage.getTotalVotes()).to.not.null;
        });
        it('should not be able to vote on the same poll again', () => {
            PollsPage.open();
            PollsPage.selectRandomAnswer();
            PollsPage.clickVoteNow();
            expect(browser.getUrl()).to.contain('/pollBooth.pl');
            expect()
        });
    });
});
