const form = document.getElementById('formulario');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const mensagem = document.getElementById('mensagem');

function validarCampoA() {
if (parseInt(campoA.value) >= parseInt(campoB.value)) {
    campoA.setCustomValidity('Campo A deve ser menor que o campo B');
} else {
    campoA.setCustomValidity('');
	}
}

function validarFormulario(event) {
event.preventDefault();

validarCampoA();

if (form.checkValidity()) {
    mensagem.innerHTML = 'Formulário válido!';
    mensagem.className = 'valid';
    form.style.backgroundColor = '#d3ffd3';
    event.target.submit();
} else {
    mensagem.innerHTML = 'Formulário inválido!';
    mensagem.className = 'invalid';
    form.style.backgroundColor = '#ffd3d3';
	}
}

form.addEventListener('keyup', validarFormulario);

campoA.addEventListener('keyup', validarCampoA);

campoB.addEventListener('keyup', validarFormulario);