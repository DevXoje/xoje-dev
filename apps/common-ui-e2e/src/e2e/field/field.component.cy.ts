describe('common-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=fieldcomponent--primary'));
  it('should render the component', () => {
    cy.get('xoje-dev-field').should('exist');
  });
});