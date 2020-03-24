import Page from './page'
// super.logMessage(AmtOfArticles);

class PollsPage extends Page {

    get getAnswerList () { return $$('input[name="aid"]')}
    get yesMendatoryAnswer () { return $('#pollBooth>:nth-child(4)') }
    get voteNowBtn () { return $('.poll-controls>.btn-polls') }
    get totalVotes () { return $('.totalVotes') }
    get alreadyVotesTxt () { return $('.pollBooth_view>div') }

    open() {
        browser.url('polls')
    }

    selectRandomAnswer() {
        let counter = this.getAnswerList.length;
        const list = Math.floor(Math.random() * counter) + 1;
        const elem = $(`#pollBooth>:nth-child(${list})`);
        elem.click();
    }

    clickVoteNow(){
        this.voteNowBtn.click();
    }

    getTotalVotes(){
        return this.totalVotes.getText();
    }

    getAlreadyVotedTxt() {
        return this.alreadyVotesTxt.getText();
    };
}

export default new PollsPage()
