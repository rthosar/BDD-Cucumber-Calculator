package com.bdd.specs;
import static org.junit.Assert.assertTrue;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CalculatorAddStepDef {

	BddCalculator target=new BddCalculator();
	int ActualOutPut=0;
	
	@Before("@s1")
	public void beforescenario(){
		System.out.println("**************Before Scenario*************");
	}
	
	@After
	public void Afterscenario(){
		System.out.println("**************After Scenario*************");
	}
	@Given("open a calculator and give {int} and {int} as input")
	public void open_a_calculator_and_give_and_as_input(Integer int1, Integer int2) {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new PendingException();
		
		target.setA(int1);
		target.setB(int2);
	}

//	@When("click on Add")
//	public void click_on_Add() {
//	    // Write code here that turns the phrase above into concrete actions
//	    //throw new PendingException();
//		ActualOutPut=target.add();
//	}

	@Then("verify {int} is the output")
	public void verify_is_the_output(Integer ExpectedOutPut) {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new PendingException();
		assertTrue(ActualOutPut==ExpectedOutPut?true:false);
	}
	
	@Given("{int} is greater than {int}")
	public void is_greater_than(Integer int1, Integer int2) throws GreaterThanException {
	    // Write code here that turns the phrase above into concrete actions
		if(int1<int2)
	    throw new GreaterThanException(int1 +" is lesser than " +int2);
	}


	@Then("{int} should be greater than zero")
	public void should_be_greater_than_zero(Integer int1) throws GreaterThanException {
	    // Write code here that turns the phrase above into concrete actions
	    
		if(int1<0)
		throw new GreaterThanException(int1 +" is less than 0");
	}
	
	@When("click on {string}")
	public void click_on(String action) {
	    // Write code here that turns the phrase above into concrete actions
	    //throw new PendingException();
		
		if(action.equals("add")){
			ActualOutPut=target.add();
			
		}
		else if(action.equals("sub")){
			ActualOutPut=target.sub();
			
		}
	}


}
