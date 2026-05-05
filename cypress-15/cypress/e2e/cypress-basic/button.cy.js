describe("test different clicks on buttons", () => {
  beforeEach(() => {
    cy.visit("https://commitquality.com/practice-general-components");
  });

  it("click on the first button", () => {
    //click
    cy.get('[data-testid="basic-click"]').click();
    //comprobamos que aparezca el texto que aparece al accionar el botón
    cy.get(".button-container").should("contain.text", "Button clicked");
  });

  it("double click on the second button", () => {
    //doble click
    cy.get('[data-testid="double-click"]').dblclick();
    //comprobamos que aparezca el texto que aparece al accionar el botón
    cy.get(".button-container").should("contain.text", "Button double clicked");
  });

  it("right click on the third button", () => {
    //click derecho
    cy.get('[data-testid="right-click"]').rightclick();
    //comprobamos que aparezca el texto que aparece al accionar el botón
    cy.get(".button-container").should(
      "contain.text",
      "Button right mouse clicked",
    );
  });
});
