describe("Práctica de componentes generales en CommitQuality", () => {
  beforeEach(() => {
    // Visitamos la página antes de cada test
    cy.visit("https://commitquality.com/practice-general-components");
  });

  // --- EJERCICIO 1: BOTONES ---
  it("debe interactuar con los 3 botones y mostrar el texto en el lugar correcto", () => {
    // 1. Click normal en el primer botón
    cy.get('[data-testid="basic-click"]').click();
    // Puntos Extra: Usamos .next() para asegurar que el texto es el elemento hermano adyacente
    cy.get('[data-testid="basic-click"]')
      .next("p")
      .should("have.text", "Button clicked");

    // 2. Doble click en el segundo botón
    cy.get('[data-testid="double-click"]').dblclick();
    // Comprobamos la posición exacta del resultado
    cy.get('[data-testid="double-click"]')
      .next("p")
      .should("have.text", "Button double clicked");

    // 3. Click derecho en el tercer botón
    cy.get('[data-testid="right-click"]').rightclick();
    // Comprobamos la posición exacta del resultado
    cy.get('[data-testid="right-click"]')
      .next("p")
      .should("have.text", "Button right mouse clicked");
  });

  // --- EJERCICIO 2: RADIO BUTTONS ---
  it("debe activar ambos radio buttons y comprobar sus labels y resultados", () => {
    // 1. Radio button 1
    // Usamos .check() sobre el input del radio
    cy.get('[data-testid="option1"]').check();
    // Comprobamos el texto esperado
    cy.contains("option1 clicked").should("be.visible");

    // Puntos Extra: Comprobamos el valor de la label asociada al radio button 1
    // Usamos .siblings() para buscar la etiqueta <label> que comparte padre con este input
    cy.get('[data-testid="option1"]')
      .siblings("label")
      .should("have.text", "Radio button");

    // 2. Radio button 2
    cy.get('[data-testid="option2"]').check();
    cy.contains("option2 clicked").should("be.visible");

    // Comprobamos el valor de la label asociada al radio button 2
    cy.get('[data-testid="option2"]')
      .siblings("label")
      .should("have.text", "Radio button 2");
  });
});
