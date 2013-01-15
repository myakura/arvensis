(function () {
    var url = location.href;
    // HTML5 Tracker
    if (/http:\/\/html5\.org\/tools\/web-apps-tracker/.test(url)) {
        var revision = document.querySelector('#log td:first-of-type').textContent.trim(),
            summary  = document.querySelector('#log td:nth-of-type(3)').textContent.trim();
        document.title += ' \u2014 ' + revision + '. ' + summary;
    }
    // Mozilla changeset
    if (/http:\/\/hg\.mozilla\.org\//.test(url)) {
        var summary = document.querySelector('.title').textContent.trim();
        document.title += ' \u2014 ' + summary;
    }
}());
