describe('tienda', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcomecomponent--primary'));
  it('should render the component', () => {
    cy.get('xoje-dev-nx-welcome').should('exist');
  });
});