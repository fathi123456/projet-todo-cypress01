class LoginPage{

//Element ou Locators
get emailInput(){
    return cy.get('[data-testid="email"]')
}
 get passwordInput(){
    return cy.get('[data-testid="password"]')
 }
 get submitButton(){
    return cy.get('[data-testid="submit"]')
 }




//Methodes
load(){
    cy.visit('/')
}
login(email,password){
    this.emailInput.type(email)
    this.passwordInput.type(password)
    this.submitButton.click()
    

}

}

export default LoginPage;