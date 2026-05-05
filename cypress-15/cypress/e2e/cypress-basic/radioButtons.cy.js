describe("test different clicks on buttons", () => {
  beforeEach(() => {
    cy.visit("https://commitquality.com/practice-general-components");
  });

  it("click on the first radio button", () => {
    //click
    cy.get(".radio-button-container").click();
    //comprobamos que aparezca el texto que aparece al accionar el botón
    cy.get(".radio-button-container").should("contain.text", "option1 clicked");
  });

  it("click on the second radio button", () => {
    //click
    cy.get('[data-testid="basic-click"]').click();
    //comprobamos que aparezca el texto que aparece al accionar el botón
    cy.get(".button-container").should("contain.text", "Button clicked");
  });
});
