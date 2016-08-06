module.exports = function(templateParams) {
    var _cssList = ['common'];
    var webAssetsHelp = require('../../../webAssetsHelp.js')(templateParams, _cssList);
    var _html = "{% extends '../../common/pages/layout.html' %} " +
        "{% block title %}{{data.title}}{% endblock %}" +
        "{% block styles %} " +
        webAssetsHelp.styles +
        "{% endblock %}" +
        '{% block content %}<div id="app"></div> {{data.content}}{% endblock %}' +
        '{% block script%}' +
        webAssetsHelp.scripts +
        '{% endblock%}';
    return _html;
};