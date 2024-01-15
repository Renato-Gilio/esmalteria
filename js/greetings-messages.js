const whatsAppLink = document.getElementById("greeting-message");

const whatsAppAPI = "https://api.whatsapp.com/send/?phone=5511952477013";

function message() {
	const hora = new Date().getHours();
	let periodMessage = '';

	if(hora >= 0 && hora <= 11)
		periodMessage = 'Bom dia!';
	else if(hora >= 12 && hora <= 17)
		periodMessage = 'Boa tarde!';
	else if(hora >= 18 && hora <= 23)
		periodMessage = 'Boa noite!';

	return periodMessage;
}

function toSendMessage(event) {
	event.preventDefault();

	const greeting = message();
	const makeLinkToSendMessage 
		= `${whatsAppAPI}&text=${greeting}&type=phone_number&app_absent=0`;

	window.open(makeLinkToSendMessage, "_blank");
}

whatsAppLink.addEventListener("click", toSendMessage);
