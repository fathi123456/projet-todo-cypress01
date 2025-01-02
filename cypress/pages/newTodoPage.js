class NewTodoPage{
    get newTodoInput(){
        return  cy.get('[data-testid="new-todo"]')
    }
    get submitNewTask(){
        return cy.get('[data-testid="submit-newTask"]')
    }
   


    addNewTodo(item){
        this.addNewTodoInput.type(item)
        this.submitNewTask.click()

    }





}
export default NewTodoPage;