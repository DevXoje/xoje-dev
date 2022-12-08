describe('tienda', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('xoje-dev-root').should('exist');
  });
});