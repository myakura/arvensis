(function () {
    var revision = document.querySelector('#log td:first-of-type').textContent.trim(),
        summary  = document.querySelector('#log td:nth-of-type(3)').textContent.trim();
    document.title += ' \x2014 ' + revision + '. ' + summary;
}());
