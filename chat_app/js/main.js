const domElements = (() => {
  const messageInputBox = document.getElementById("input-message");
  const messageSubmit = document.getElementById("send-chat");
  const chatMessages = document.getElementById("chat-box__messages");
  const chargesOption = document.querySelectorAll(".price");

  return { messageInputBox, messageSubmit, chatMessages, chargesOption };
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


const freelancerChat = function(chat, chatMessages) {
 
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

  const { messageInputBox, messageSubmit, chatMessages, chargesOption } = { ...domElements };
  
  const autoChat = ["Your dogs are cute.", 
                    "Lets do this.",
                    "I am ready to walk them.",
                    "I'll pick up in evening.",
                    "I am good.",
                    "They are great."];
  
  const randomMessage = function() {
    
    const randIndex = randomNumber();
    const chat = chats[randIndex];
    return chat;
  };

  const freelancerChatPublish = function(chat) {

    setTimeout(() => {
      freelancerChat(chat, chatMessages);
    }, 1000)
  };

  messageSubmit.addEventListener("click", (e) => {
    e.preventDefault;
    const message = messageInputBox.value;
    messageInputBox.value = "";
    
    publishUserChat(message, chatMessages);
     
    freelancerChatPublish(randomMessage());
  });
  
  chargesOption.forEach(radio => 
     radio.addEventListener("click", (e) => {
       const charges = e.target.value;
       const message = `Great! We have a deal for $${charges}.`;
       freelancerChatPublish(message, chatMessages);
    })
  );

})();
