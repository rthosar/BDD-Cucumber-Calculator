$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("calc/Calculator.feature");
formatter.feature({
  "name": "Develop a calculator",
  "description": "    with add,substract methods",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@f1"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Calculator Add \u0026 Substract",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@s1"
    }
  ]
});
formatter.step({
  "name": "open a calculator and give \u003ca\u003e and \u003cb\u003e as input",
  "keyword": "Given "
});
formatter.step({
  "name": "\u003ca\u003e is greater than \u003cb\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "click on \"\u003caction\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "verify \u003coutput\u003e is the output",
  "keyword": "Then "
});
formatter.step({
  "name": "\u003coutput\u003e should be greater than zero",
  "keyword": "But "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "a",
        "b",
        "action",
        "output"
      ]
    },
    {
      "cells": [
        "3",
        "-5",
        "add",
        "-2"
      ]
    },
    {
      "cells": [
        "-1",
        "5",
        "add",
        "4"
      ]
    },
    {
      "cells": [
        "8",
        "5",
        "sub",
        "3"
      ]
    },
    {
      "cells": [
        "9",
        "5",
        "sub",
        "4"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Calculator Add \u0026 Substract",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f1"
    },
    {
      "name": "@s1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "open a calculator and give 3 and -5 as input",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorAddStepDef.open_a_calculator_and_give_and_as_input(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "3 is greater than -5",
  "keyword": "And "
});
formatter.match({
  "location": "CalculatorAddStepDef.is_greater_than(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on \"add\"",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorAddStepDef.click_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify -2 is the output",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorAddStepDef.verify_is_the_output(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "-2 should be greater than zero",
  "keyword": "But "
});
formatter.match({
  "location": "CalculatorAddStepDef.should_be_greater_than_zero(Integer)"
});
formatter.result({
  "error_message": "com.bdd.specs.GreaterThanException: -2 is less than 0\r\n\tat com.bdd.specs.CalculatorAddStepDef.should_be_greater_than_zero(CalculatorAddStepDef.java:60)\r\n\tat ✽.-2 should be greater than zero(calc/Calculator.feature:12)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Calculator Add \u0026 Substract",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f1"
    },
    {
      "name": "@s1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "open a calculator and give -1 and 5 as input",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorAddStepDef.open_a_calculator_and_give_and_as_input(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "-1 is greater than 5",
  "keyword": "And "
});
formatter.match({
  "location": "CalculatorAddStepDef.is_greater_than(Integer,Integer)"
});
formatter.result({
  "error_message": "com.bdd.specs.GreaterThanException: -1 is lesser than 5\r\n\tat com.bdd.specs.CalculatorAddStepDef.is_greater_than(CalculatorAddStepDef.java:51)\r\n\tat ✽.-1 is greater than 5(calc/Calculator.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "click on \"add\"",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorAddStepDef.click_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify 4 is the output",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorAddStepDef.verify_is_the_output(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "4 should be greater than zero",
  "keyword": "But "
});
formatter.match({
  "location": "CalculatorAddStepDef.should_be_greater_than_zero(Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Calculator Add \u0026 Substract",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f1"
    },
    {
      "name": "@s1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "open a calculator and give 8 and 5 as input",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorAddStepDef.open_a_calculator_and_give_and_as_input(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "8 is greater than 5",
  "keyword": "And "
});
formatter.match({
  "location": "CalculatorAddStepDef.is_greater_than(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on \"sub\"",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorAddStepDef.click_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify 3 is the output",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorAddStepDef.verify_is_the_output(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "3 should be greater than zero",
  "keyword": "But "
});
formatter.match({
  "location": "CalculatorAddStepDef.should_be_greater_than_zero(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Calculator Add \u0026 Substract",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f1"
    },
    {
      "name": "@s1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "open a calculator and give 9 and 5 as input",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorAddStepDef.open_a_calculator_and_give_and_as_input(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "9 is greater than 5",
  "keyword": "And "
});
formatter.match({
  "location": "CalculatorAddStepDef.is_greater_than(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on \"sub\"",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorAddStepDef.click_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify 4 is the output",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorAddStepDef.verify_is_the_output(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "4 should be greater than zero",
  "keyword": "But "
});
formatter.match({
  "location": "CalculatorAddStepDef.should_be_greater_than_zero(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});