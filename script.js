import { sendMessage } from './firebase/portfolio.js';

const txtName = document.getElementById('iname');
const txtEmail = document.getElementById('iemail');
const txtAssunto = document.getElementById('iassunto');
const txtMensagem = document.getElementById('imensagem');

const btnSubscribe = document.getElementById('botaoForm');

btnSubscribe.addEventListener('click', async () =>{
    const subscription = {
        name:iname.value,
        email:iemail.value,
        assunto:iassunto.value,
        mensagem:imensagem.value
    }


    
    const subscriptionId = await sendMessage(subscription);
    console.log(`Inscrito com sucesso: ${subscriptionId}`)

    iname.value = '';
    iemail.value = '';
    iassunto.value = '';
    imensagem.value = '';
})