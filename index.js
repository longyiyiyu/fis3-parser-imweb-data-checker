var defend = require('data-member-defender');

module.exports = function(content, file, conf) {
    var ret;
    var ast;

    if (!content || !content.trim()) {
        return content;
    }

    return defend(content, {
        ignores: conf.ignores
    });
};
