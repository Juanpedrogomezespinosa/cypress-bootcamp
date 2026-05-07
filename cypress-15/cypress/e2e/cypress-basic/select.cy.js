describe("test different select on dropdown", () => {
  beforeEach(() => {
    cy.visit("https://commitquality.com/practice-general-components/");
    cy.get('[data-testid="back-link"]').should("be.visible"); // Para hacer la aserción de que el elemento está visible y contiene el texto indicado
    cy.contains(".dropdown-container", "Select an option")
      .find('[data-testid="dropdown"]')
      .should("be.visible"); // Para hacer la aserción de que el elemento drop
  });

  it("selects options from the dropdown", () => {
    cy.get('[data-testid="dropdown"] >select').should(
      "contain",
      "Select an option",
    ); // Este es igual que el de abajo pero sin usar el find
    cy.get("select option:selected")
      .should("be.visible")
      .should("contain", "Select an option")
      .and("have.attr", "value", ""); // Para hacer la aserción de que el elemento tiene el atributo value con el valor vacío

    cy.get("select")
      .should("be.visible")
      .should("contain", "Option 1")
      .and("contain", "Option 2");
  });
});
