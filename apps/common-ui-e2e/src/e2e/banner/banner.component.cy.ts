describe('common-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=bannercomponent--primary&args=text;'));
  it('should render the component', () => {
    cy.get('xoje-dev-banner').should('exist');
  });
});