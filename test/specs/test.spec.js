import HomePage from '../pageobjects/homepage.page';
import PollsPage from '../pageobjects/polls.page';
import { expect } from 'chai';
// const TimelineReporter = require('wdio-timeline-reporter').default;

describe('Home page', () => {
    // let articleCount;
    describe('Articles', () => {
        before(() => {
            HomePage.open();
        })

        it('total articles on the homepage', () => {
            console.info('the total number of articles are: ' + HomePage.countArticles(HomePage.articles));     
        });

        it('list of unique icons on the article titles', () => {
            HomePage.getUniqueIcons(HomePage.icons);
        });
    });

    describe('Daily poll', () => {
        it('can vote for daily poll', () => {
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
            expect(PollsPage.getAlreadyVotedTxt()).to.contain('You\'ve already voted.');
        });
    });
});
