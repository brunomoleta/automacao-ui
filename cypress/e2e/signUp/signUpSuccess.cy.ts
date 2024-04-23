import { faker } from "@faker-js/faker";

describe("Feat: Register user succesfully", () => {
  beforeEach(() => {
    cy.visit("");
    cy.get(".icon-user-unfollow").click();
  });

  it("Should be able to create a user successfully.", () => {
    const password = faker.internet.password({ length: 20 });
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email({
      firstName: firstName,
      lastName: lastName,
    });

    cy.registerUserData("email", email);
    cy.registerUserData("password", password, true);

    cy.notExist("alert");
    cy.get("nav.woocommerce-MyAccount-navigation");
  });
});
