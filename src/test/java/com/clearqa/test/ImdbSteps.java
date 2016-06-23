package com.clearqa.test;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

import org.json.JSONException;
import org.junit.Assert;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import cucumber.api.java.en.*;

public class ImdbSteps {

	final Logger logger = LoggerFactory.getLogger(ImdbSteps.class);
	private String jpmc_url;
	private String json_response;

	@Given("^I provide parameter as \"(.*)?\"$")
	public void I_provide_paramater_as(String key) throws UnsupportedEncodingException {
		jpmc_url = "http://localhost:8080/gs-rest-service/greeting?name=" + URLEncoder.encode(key, "UTF-8") + "&type=json";
		logger.info("http query = " + jpmc_url);
	}

	@When("^I make the rest call$")
	public void I_make_the_rest_call() throws IOException, JSONException {
		json_response = JsonReader.readJsonFromUrl(jpmc_url);
		logger.info("Response = " + json_response.toString());
	}

	@Then("^response should contain:$")
	public void response_should_contain_JSON(String expected_json_str) throws JSONException {
		logger.info("Comparing reponse with" + expected_json_str);
	//	JSONObject expected_json = new JSONObject(expected_json_str);
		Assert.assertEquals(expected_json_str, json_response);
	}
	
	@Then("^response should contain \"(.+)\"")
	public void response_should_contain(String expected_json_str) throws JSONException {
		response_should_contain_JSON(expected_json_str);
	}

}
