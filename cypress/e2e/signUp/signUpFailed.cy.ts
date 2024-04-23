describe("Feat: Registro de usuário sem sucesso", () => {
  beforeEach(() => {
    cy.fixture("errorMessages").then((messages) => {
      this.messages = messages;
    });
    cy.fixture("loginSuccess").then((success) => {
      this.success = success;
    });
    cy.fixture("signUpFail").then((failed) => {
      this.failed = failed;
    });
    cy.visit("");
    cy.get(".icon-user-unfollow").click();
  });

  it("Deve falhar ao registrar usuário com email já existente.", () => {
    cy.registerUserData("email", this.success.email);
    cy.registerUserData("password", this.success.password, true);

    cy.findByRole("alert");
    cy.contains(this.messages.duplicateEmail);
  });

  it.only("Deve falhar ao registrar usuário com email inválido.", () => {
    cy.registerUserData("email", " ");
    cy.registerUserData("password", this.success.password, true);

    cy.findByRole("alert");
    cy.contains(this.messages.registerEmail);
  });

  it("Deve falhar ao registrar usuário com senha inválida.", () => {
    cy.registerUserData("email", this.failed.email);
    cy.registerUserData("password", this.failed.password, true);

    cy.findByRole("alert");
    cy.contains(this.messages.registerPassword);
  });
});
