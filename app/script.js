const socket = io("ws://localhost:3000");

socket.on("message", (message) => {
    const li = document.createElement("li");
    li.innerHTML = message;
    document.getElementById("lists").appendChild(li);
});

document.getElementById("sendButton").onclick = () => {
    const text = document.getElementById("textBar").value;
    if(!text) return;
    socket.emit("message", text);
    document.getElementById("textBar").value = "";
}