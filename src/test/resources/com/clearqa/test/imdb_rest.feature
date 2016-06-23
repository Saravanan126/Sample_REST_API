Feature: Verify whether we are able to print any name through greeting API

  @Null_Name
  Scenario: Print with null name
    Given I provide parameter as ""
    When I make the rest call
    Then response should contain:
    
     """
     Hello, World!
     """
      
 @Valid_Name
  Scenario: Print with valid name
    Given I provide parameter as "JPMCTest"
    When I make the rest call
    Then response should contain:
    
     """
     Hello, JPMCTest!
     """