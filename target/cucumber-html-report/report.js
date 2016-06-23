$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/clearqa/test/imdb_rest.feature");
formatter.feature({
  "id": "verify-whether-we-are-able-to-print-any-name-through-greeting-api",
  "description": "",
  "name": "Verify whether we are able to print any name through greeting API",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "verify-whether-we-are-able-to-print-any-name-through-greeting-api;print-with-null-name",
  "tags": [
    {
      "name": "@Null_Name",
      "line": 3
    }
  ],
  "description": "",
  "name": "Print with null name",
  "keyword": "Scenario",
  "line": 4,
  "type": "scenario"
});
formatter.step({
  "name": "I provide parameter as \"\"",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "I make the rest call",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "response should contain:",
  "keyword": "Then ",
  "line": 7,
  "doc_string": {
    "value": "Hello, World!",
    "line": 9,
    "content_type": ""
  }
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 24
    }
  ],
  "location": "ImdbSteps.I_provide_paramater_as(String)"
});
formatter.result({
  "duration": 110062000,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 13638000,
  "status": "failed",
  "error_message": "java.net.ConnectException: Connection refused\n\tat java.net.PlainSocketImpl.socketConnect(Native Method)\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:339)\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:200)\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:182)\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\n\tat java.net.Socket.connect(Socket.java:579)\n\tat java.net.Socket.connect(Socket.java:528)\n\tat sun.net.NetworkClient.doConnect(NetworkClient.java:180)\n\tat sun.net.www.http.HttpClient.openServer(HttpClient.java:432)\n\tat sun.net.www.http.HttpClient.openServer(HttpClient.java:527)\n\tat sun.net.www.http.HttpClient.\u003cinit\u003e(HttpClient.java:211)\n\tat sun.net.www.http.HttpClient.New(HttpClient.java:308)\n\tat sun.net.www.http.HttpClient.New(HttpClient.java:326)\n\tat sun.net.www.protocol.http.HttpURLConnection.getNewHttpClient(HttpURLConnection.java:996)\n\tat sun.net.www.protocol.http.HttpURLConnection.plainConnect(HttpURLConnection.java:932)\n\tat sun.net.www.protocol.http.HttpURLConnection.connect(HttpURLConnection.java:850)\n\tat com.clearqa.test.JsonReader.readJsonFromUrl(JsonReader.java:30)\n\tat com.clearqa.test.ImdbSteps.I_make_the_rest_call(ImdbSteps.java:28)\n\tat ✽.When I make the rest call(com/clearqa/test/imdb_rest.feature:6)\n"
});
formatter.match({
  "location": "ImdbSteps.response_should_contain_JSON(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "id": "verify-whether-we-are-able-to-print-any-name-through-greeting-api;print-with-valid-name",
  "tags": [
    {
      "name": "@Valid_Name",
      "line": 13
    }
  ],
  "description": "",
  "name": "Print with valid name",
  "keyword": "Scenario",
  "line": 14,
  "type": "scenario"
});
formatter.step({
  "name": "I provide parameter as \"JPMCTest\"",
  "keyword": "Given ",
  "line": 15
});
formatter.step({
  "name": "I make the rest call",
  "keyword": "When ",
  "line": 16
});
formatter.step({
  "name": "response should contain:",
  "keyword": "Then ",
  "line": 17,
  "doc_string": {
    "value": "Hello, JPMCTest!",
    "line": 19,
    "content_type": ""
  }
});
formatter.match({
  "arguments": [
    {
      "val": "JPMCTest",
      "offset": 24
    }
  ],
  "location": "ImdbSteps.I_provide_paramater_as(String)"
});
formatter.result({
  "duration": 130000,
  "status": "passed"
});
formatter.match({
  "location": "ImdbSteps.I_make_the_rest_call()"
});
formatter.result({
  "duration": 581000,
  "status": "failed",
  "error_message": "java.net.ConnectException: Connection refused\n\tat java.net.PlainSocketImpl.socketConnect(Native Method)\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:339)\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:200)\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:182)\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\n\tat java.net.Socket.connect(Socket.java:579)\n\tat java.net.Socket.connect(Socket.java:528)\n\tat sun.net.NetworkClient.doConnect(NetworkClient.java:180)\n\tat sun.net.www.http.HttpClient.openServer(HttpClient.java:432)\n\tat sun.net.www.http.HttpClient.openServer(HttpClient.java:527)\n\tat sun.net.www.http.HttpClient.\u003cinit\u003e(HttpClient.java:211)\n\tat sun.net.www.http.HttpClient.New(HttpClient.java:308)\n\tat sun.net.www.http.HttpClient.New(HttpClient.java:326)\n\tat sun.net.www.protocol.http.HttpURLConnection.getNewHttpClient(HttpURLConnection.java:996)\n\tat sun.net.www.protocol.http.HttpURLConnection.plainConnect(HttpURLConnection.java:932)\n\tat sun.net.www.protocol.http.HttpURLConnection.connect(HttpURLConnection.java:850)\n\tat com.clearqa.test.JsonReader.readJsonFromUrl(JsonReader.java:30)\n\tat com.clearqa.test.ImdbSteps.I_make_the_rest_call(ImdbSteps.java:28)\n\tat ✽.When I make the rest call(com/clearqa/test/imdb_rest.feature:16)\n"
});
formatter.match({
  "location": "ImdbSteps.response_should_contain_JSON(String)"
});
formatter.result({
  "status": "skipped"
});
});