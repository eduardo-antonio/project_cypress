describe('Cypress Example - Actions', () => {
  it('deve preencher o e-mail e marcar uma caixa de seleção corretamente', () => {
    cy.visit('https://example.cypress.io/commands/actions');

    const emailFicticio = 'teste.qa@exemplo.com';

    // Localiza o campo de e-mail pela classe .action-email
    cy.get('.action-email')
      .type(emailFicticio)
      .should('have.value', emailFicticio);

    // Localiza a seção de checkboxes e marca uma opção
    cy.get('.action-checkboxes')
      .find('input[type="checkbox"]')
      .first()
      .check()
      .should('be.checked');
  });
});