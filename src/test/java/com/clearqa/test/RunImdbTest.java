package com.clearqa.test;

import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@Cucumber.Options(format = {"pretty", "html:target/cucumber-html-report"}, 
				  features = "src/test/resources",
				  tags = {"@Null_Name,  @Valid_Name"}
				  )
public class RunImdbTest {
}
