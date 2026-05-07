describe("Práctica de componente Checkboxes en CommitQuality", () => {
  beforeEach(() => {
    cy.visit("https://commitquality.com/practice-general-components");
    cy.get(".container-text").should("be.visible").and("contain", "Checkboxes");
  });

  it("debe interactuar con los 3 checkboxes, marcarlos y luego desmarcarlos", () => {
    // --- 0. ESTADO INICIAL: Validación previa ---
    [1, 2, 3].forEach((numero) => {
      cy.get(`[data-testid="checkbox${numero}"]`)
        .siblings()
        .should("not.contain", `Checkbox ${numero} checked`);
    });

    // --- 1. HACER CHECK EN LOS 3 CHECKBOXES A LA VEZ ---
    cy.get('input[type="checkbox"]').check();

    // Comprobamos usando el data-testid que el texto aparece JUSTO AL LADO de cada checkbox
    [1, 2, 3].forEach((numero) => {
      cy.get(`[data-testid="checkbox${numero}"]`)
        .siblings()
        .should("contain", `Checkbox ${numero} checked`);
    });

    // --- 2. PUNTOS EXTRA: HACER UNCHECK DE TODOS A LA VEZ ---
    cy.get('input[type="checkbox"]').uncheck();

    // Comprobamos usando el data-testid que el texto desaparece de los hermanos
    [1, 2, 3].forEach((numero) => {
      cy.get(`[data-testid="checkbox${numero}"]`)
        .siblings()
        .should("not.contain", `Checkbox ${numero} checked`);
    });
  });
});
