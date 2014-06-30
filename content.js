(function () {
    var url = location.href;
    // HTML5 Tracker
    if (/https?:\/\/html5\.org\/tools\/web-apps-tracker|https?:\/\/html5\.org\/r\/\d+/.test(url)) {
        var revision = document.querySelector('#log td:first-of-type').textContent.trim(),
            summary  = document.querySelector('#log td:nth-of-type(3)').textContent.trim();
        document.title += ' \u2014 ' + revision + '. ' + summary;
    }
    // Mercurial changeset
    if (/https?:\/\/hg\.mozilla\.org\/|https?:\/\/dvcs\.w3\.org\/hg\/.*\/rev/.test(url)) {
        var summary = document.querySelector('.title').textContent.trim();
        document.title += ' \u2014 ' + summary;
    }
    // googlesource.com (mainly targeting Blink)
    if (/https?:\/\/.*\.googlesource\.com\/.+\/\+\/[0-9a-f]{5,40}/.test(url)) {
        // title structure is [hash] - [repo/dir] - Git at Google
        // e.g. 4b7159b920caefd3bc8d48a35daddd9bbac862dc - chromium/blink - Git at Google
        // turning into [shorthash] (@[revision]) - [repo/dir] -- [summary]
        var message = document.querySelector('.commit-message').textContent,
            revision = /git-svn-id: svn:\/\/.*@(\d+)/.test(message) ? message.match(/git-svn-id: svn:\/\/.*@(\d+)/)[1] : null,
            summary = message.match(/(.*)\n/)[1];
        var title = document.title,
            titlereg = /([0-9a-f]+) - (.+?) /;
        document.title = titlereg.exec(title)[1].slice(0,10) + (!!revision ? ' (@' + revision + ') ' : '') + ' - ' + titlereg.exec(title)[2] + ' \u2014 ' + summary;
    }
}());
