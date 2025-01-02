class TodoPage{

get welcomeMessage(){
    return cy.get('[data-testid="welcome"]')
}
get addButton(){
    return  cy.get('[data-testid="add"]')
}
get firstTodoItem(){
    return cy.get('[data-testid="todo-item"]').eq(0)
}



load(){
    cy.visit('/todo')
}

welcomeMessageShouldBeVisisble(){
    this.welcomeMessage.should('be.visible')
}
firstItemShoulBeVisisble(text){
    this.firstTodoItem.should('have.text',text)
}
clickAddutton(){
    this.addButton.click()
}


}
export default TodoPage;