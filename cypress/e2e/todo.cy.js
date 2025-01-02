///<reference types="Cypress"/>
import { faker, Faker } from "@faker-js/faker"
import UserApi from "../api/userAPI";
import TodoApi from "../api/TodoAPI";
import TodoPage from "../pages/todoPage";
import NewTodoPage from "../pages/newTodoPage";

describe('todo test case',()=>{
    let token;

    beforeEach(()=>{
        UserApi.register().then((response) =>{
        token = response.body.access_token;
        })
    });

it("should be able to add Todo", ()=>{
    const todoPage = new TodoPage()
    const newTodoPage= new NewTodoPage()
    todoPage.load()
    todoPage.clickAddutton()
    newTodoPage.addNewTodo('Learn Cypress')
    todoPage.firstItemShoulBeVisisble('Learn Cypress')

})
it.only('should be abl to mark a to do is complited',()=>{

     TodoApi.add(token)   
    
    cy.visit('/login')
    
    cy.get('[data-testid="complete-task"]').eq(0).click()
    cy.get('[data-testid="todo-item"]').eq(0).should('have.css','background-color','rgb(33, 76, 97)')
})
})