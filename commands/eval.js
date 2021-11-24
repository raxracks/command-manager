module.exports.onmessage = function(message, client) {
    try {
        message.channel.send("```" + eval(message.content.slice(5)) + "```");
    } catch(e) {
        message.channel.send("```" + e + "```");
    }
};