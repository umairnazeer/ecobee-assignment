import Page from './page'
// super.logMessage(AmtOfArticles);

class PollsPage extends Page {

    get yesMendatoryAnswer () { return $('#pollBooth>:nth-child(4)') }
    get voteNowBtn () { return $('.poll-controls>.btn-polls') }
    get totalVotes () { return $('.totalVotes') }

    open() {
        browser.url('polls')
    }

    selectRandomAnswer() {
        this.yesMendatoryAnswer.click();
    }

    clickVoteNow(){
        this.voteNowBtn.click();
    }

    getTotalVotes(){
        return this.totalVotes.getText();
    }
}

export default new PollsPage()
