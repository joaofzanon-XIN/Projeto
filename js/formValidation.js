export function validateForm(event) {
  event.preventDefault();
  const form = event.target;
  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  const mensagem = form.mensagem.value.trim();
  const feedback = document.getElementById('formFeedback');

  if (nome === '' || email === '' || mensagem === '') {
    feedback.textContent = 'Por favor, preencha todos os campos.';
    feedback.style.color = 'red';
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    feedback.textContent = 'Por favor, insira um email válido.';
    feedback.style.color = 'red';
    return;
  }

  feedback.textContent = 'Mensagem enviada com sucesso!';
  feedback.style.color = 'green';
  localStorage.setItem('ultimoContato', JSON.stringify({ nome, email, mensagem }));
  form.reset();
}