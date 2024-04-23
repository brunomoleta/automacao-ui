describe("Feat: Products", () => {

  beforeEach(() => {
    cy.fixture("errorMessages").then((messages) => {
      this.messages = messages;
    });

    cy.visit("");
  });

  it("Deve acessar o primeiro produto da list da página inicial.", () => {
    cy.get("div.product-block.grid").find("a").first().click();
    cy.findByRole("button", { name: /comprar/i });
  });
});
