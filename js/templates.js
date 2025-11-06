export const templates = {
  home: `
    <section class="home">
      <h2>Bem-vindo à nossa Organização Social</h2>
      <p>Promovemos o desenvolvimento e a inclusão social através de projetos comunitários.</p>
    </section>
  `,

  sobre: `
    <section class="sobre">
      <h2>Sobre Nós</h2>
      <p>Somos uma organização sem fins lucrativos dedicada a impactar positivamente nossa comunidade.</p>
    </section>
  `,

  contato: `
    <section class="contato">
      <h2>Fale Conosco</h2>
      <form id="contatoForm">
        <label>Nome: <input type="text" name="nome" required></label>
        <label>Email: <input type="email" name="email" required></label>
        <label>Mensagem: <textarea name="mensagem" required></textarea></label>
        <button type="submit">Enviar</button>
        <p id="formFeedback" class="feedback"></p>
      </form>
    </section>
  `
};