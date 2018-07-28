@f1
Feature: Develop a calculator
    with add,substract methods
    
	    
	@s1     
	Scenario Outline: Calculator Add & Substract
		Given open a calculator and give <a> and <b> as input
		And <a> is greater than <b>
		When click on "<action>"
	    Then verify <output> is the output 
	    But <output> should be greater than zero
			
			Examples:
			| a   | b    | action |output |
			| 3   | -5    |  add   | -2     |
			| -1   | 5    |  add   | 4     |
			| 8   | 5    |  sub   | 3     |
			| 9   | 5    |  sub   | 4    |
			