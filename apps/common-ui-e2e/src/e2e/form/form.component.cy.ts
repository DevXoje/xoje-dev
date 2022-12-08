describe('common-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=formcomponent--primary'));
  it('should render the component', () => {
    cy.get('xoje-dev-form').should('exist');
  });
});