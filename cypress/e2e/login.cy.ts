describe("Feat: Login", () => {
  beforeEach(() => {
    cy.fixture("errorMessages").then((messages) => {
      this.messages = messages;
    });
    cy.fixture("loginSuccess").then((success) => {
      this.success = success;
    });
    cy.visit("");
    cy.get(".icon-user-unfollow").click();
  });

  it("Deve efetuar o login com sucesso.", () => {
    cy.typeInputData("username", this.success.email);
    cy.typeInputData("password", this.success.password, true);

    cy.notExist("alert");
    cy.get("nav.woocommerce-MyAccount-navigation");
  });
  it("Deve falhar o login, senha incorreta.", () => {
    cy.typeInputData("username", this.success.email);
    cy.typeInputData("password", `${this.success.password}oi`, true);

    cy.findByRole("alert");
    cy.contains(this.messages.password);
  });
  it("Deve falhar o login, email não existe no Banco de dados.", () => {
    cy.typeInputData("username", `aaa${this.success.email}`);
    cy.typeInputData("password", `${this.success.password}`, true);

    cy.findByRole("alert");
    cy.contains(this.messages.email);
  });
});
