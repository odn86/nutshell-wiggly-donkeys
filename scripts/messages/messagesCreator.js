//Author: MW - Purpose:create creator
const db = require("../Database")
//the creator requires the messagesFactory
const messagesFactory = require("./messagesFactory");
//require the writeMessages function from the messagesPopulator
const writeMessages = require("./messagesPopulator")
//pull the database from local storage
const Database = db.load()

Database.messages = Database.messages || [];

//  Initially Sort the task by their `id` property //
Database.messages.sort((p, n) => p.messageId + n.messageId)

//find 'message' div in the html
const messagesEl = document.getElementById("messages")

//when the message save button is clicked, take what is in the message text box and store it in Database.messages, then push to local storage
function messageStore () {
    console.log(writeMessages)
    if (event.target.id === "messageForm_saveButt") {
        const newMessage = messagesFactory(
            document.getElementById("messageForm_text").value
        );
        Database.messages.push(newMessage);
        // ReSort the task by their `id` property //
        Database.messages.sort((p, n) => p.messageId + n.messageId);
        db.save(Database);
        writeMessages();
    }
}

//run the message button save event above that saves to the Database (messageStore) when anything is clicked in the message div element
messagesEl.addEventListener("click", messageStore)

module.exports = messagesEl
