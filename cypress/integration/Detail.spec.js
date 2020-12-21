/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("<Detail>", () => {
  before(() => {
    cy.visit("/")
  })

  it("Verificar que se navega al detalle del Phone", () => {
    cy.get("[data-cy=card-phone]").first().click()
    cy.get("[data-cy=detail-phone]").should("exist")
  })

  it("Verificar el nombre del Phone", () => {
    cy.get("[data-cy=detail-phone-name]")
      .invoke("text")
      .should("equal", "iPhone 8")
  })

  it("Verificar descripción del Phone", () => {
    cy.get("[data-cy=detail-phone-description]").should("exist")
  })

  it("Verificar que existe campo fabricante del Phone", () => {
    cy.get("[data-cy=manufacturer]").should("exist")
  })

  it("Verificar que existe campo procesador del Phone", () => {
    cy.get("[data-cy=processor]").should("exist")
  })

  it("Verificar que existe campo ram del Phone", () => {
    cy.get("[data-cy=ram]").should("exist")
  })

  it("Verificar que existe campo pantalla del Phone", () => {
    cy.get("[data-cy=screen]").should("exist")
  })

  it("Verificar que existe campo almacenamiento del Phone", () => {
    cy.get("[data-cy=storage]").should("exist")
  })

  it("Verificar que existe campo batería del Phone", () => {
    cy.get("[data-cy=batery]").should("exist")
  })

  it("Verificar que existe campo cámara trasera del Phone", () => {
    cy.get("[data-cy=cameraBack]").should("exist")
  })

  it("Verificar que existe campo cámara frontal del Phone", () => {
    cy.get("[data-cy=cameraFront]").should("exist")
  })

  it("Verificar que existe campo color del Phone", () => {
    cy.get("[data-cy=color]").should("exist")
  })

})
