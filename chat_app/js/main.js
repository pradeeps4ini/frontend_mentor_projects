const domElements = (() => {
  const messageInputBox = document.getElementById("input-message");
  const messageSubmit = document.getElementById("send-chat");
  const chatMessages = document.getElementById("chat-box__messages");

  return { messageInputBox, messageSubmit, chatMessages };
})();


const randomNumber = function() {

  const rand = Math.floor(Math.random() * 6);
  return rand;
};


const publishUserChat = function(message, chatMessages) {
  const userChatDiv = document.createElement("div");
  const p = document.createElement("p");
  p.textContent = message;

  userChatDiv.append(p);
  userChatDiv.classList.add("chat__user");

  chatMessages.appendChild(userChatDiv);
};


const freelancerChat = function(chats, chatMessages) {
  const randIndex = randomNumber();
  const chat = chats[randIndex];
 
  const div = document.createElement("div");
  const p = document.createElement("p");
  p.textContent = chat;
  div.classList.add("chat__walker");
  div.appendChild(p);
  chatMessages.appendChild(div);
  div.scrollIntoView({top: div.scrollHeight,
                      behavior: "smooth",
                     });
};


const domInteraction = (() => {

  const { messageInputBox, messageSubmit, chatMessages } = { ...domElements };
  
  const autoChat = ["Your dogs are cute.", 
                    "Lets do this.",
                    "I am ready to walk them.",
                    "I'll pick up in evening.",
                    "I am good.",
                    "They are great."];

  messageSubmit.addEventListener("click", (e) => {
    e.preventDefault;
    const message = messageInputBox.value;
    messageInputBox.value = "";
    
    publishUserChat(message, chatMessages);
   
    setTimeout(() => {
      freelancerChat(autoChat, chatMessages);
    }, 1000)
  });
})();
