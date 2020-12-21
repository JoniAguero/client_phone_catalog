/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("<Home>", () => {
  before(() => {
    cy.visit("/")
  })

  it("Verificar Titulo Header", () => {
    cy.get("[data-cy=header-title]")
      .invoke("text")
      .should("equal", "Phone CatalogThe latest phones on the market are here")
  })

  it("Verificar Button de Login", () => {
    cy.get("[data-cy=login-button]").should("exist")
  })

  it("Verificar Button de Agregar Phone y está deshabilitado", () => {
    cy.get("[data-cy=add-phone-button-disabled]")
      .should("exist")
      .should("have.class", "disabled")
  })

  it("Verificar que se muestran Phones", () => {
    cy.get("[data-cy=card-phone]").should("exist")
  })

  it("Verificar que se navega al detalle del Phone", () => {
    cy.get("[data-cy=card-phone]").first().click()
    cy.get("[data-cy=detail-phone]").should("exist")
  })

  it("Verificar que se corresponde el nombre del Phone en el página de <Detalle>", () => {
    cy.visit("/")
    cy.get("[data-cy=card-phone]").first().click()
    cy.get("[data-cy=detail-phone-name]")
      .invoke("text")
      .should("equal", "iPhone 8")
  })

  it("Verificar que al hacer click en Login button se abre <LoginModal>", () => {
    cy.visit("/")
    cy.get("[data-cy=login-button]").click()
    cy.get("[data-cy=auth-modal]").should("exist")
    cy.get("[data-cy=auth-login-modal]").should("exist")
  })

  it("Verificar campos del <LoginModal>", () => {
    cy.visit("/")
    cy.get("[data-cy=login-button]").click()
    cy.get("[data-cy=input-email]").should("exist")
    cy.get("[data-cy=input-password]").should("exist")
  })

  it("Verificar que se puede redireccionar a <RegisterModal>", () => {
    cy.visit("/")
    cy.get("[data-cy=login-button]").click()
    cy.get("[data-cy=button-to-register]").click()
    cy.get("[data-cy=auth-register-modal]").should("exist")
  })

  it("Verificar que se puede redireccionar a <LoginModal>", () => {
    cy.visit("/")
    cy.get("[data-cy=login-button]").click()
    cy.get("[data-cy=button-to-register]").click()
    cy.get("[data-cy=button-to-login]").click()
    cy.get("[data-cy=auth-login-modal]").should("exist")
  })

  it("Verificar que se habilita Button de Agregar Phone al hacer login", () => {
    cy.visit("/")
    cy.get("[data-cy=login-button]").click()
    cy.get("[data-cy=input-email]").type("test@test.com")
    cy.get("[data-cy=input-password]").type("12345678")
    cy.get("[data-cy=auth-login-modal]").submit()
    cy.get("[data-cy=add-phone-button-disabled]")
      .should("not.exist")
    cy.get("[data-cy=add-phone-button-enabled]")
    .should("exist")
  })

})
