$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/Feature/TestCase.feature");
formatter.feature({
  "line": 2,
  "name": "Testing the practice automation website",
  "description": "",
  "id": "testing-the-practice-automation-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Practice_Automation"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Automation Website",
  "description": "To check if the user is able to register with valid details",
  "id": "testing-the-practice-automation-website;automation-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@TC-01_Register"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Launch the chrome browser in system",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "open the Practice automation website",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "The user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Click the Register button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "testing-the-practice-automation-website;automation-website;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 14,
      "id": "testing-the-practice-automation-website;automation-website;;1"
    },
    {
      "cells": [
        "vignesh@gmail.com",
        "9869868@7\u0026"
      ],
      "line": 15,
      "id": "testing-the-practice-automation-website;automation-website;;2"
    },
    {
      "cells": [
        "vicky@gmail.com",
        "sanjeev!@#$"
      ],
      "line": 16,
      "id": "testing-the-practice-automation-website;automation-website;;3"
    },
    {
      "cells": [
        "kpvic@gmail.com",
        "admin^%$#"
      ],
      "line": 17,
      "id": "testing-the-practice-automation-website;automation-website;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Automation Website",
  "description": "To check if the user is able to register with valid details",
  "id": "testing-the-practice-automation-website;automation-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Practice_Automation"
    },
    {
      "line": 3,
      "name": "@TC-01_Register"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Launch the chrome browser in system",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "open the Practice automation website",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "The user enters \"vignesh@gmail.com\" and \"9869868@7\u0026\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Click the Register button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterationStepDefinition.launch_the_chrome_browser_in_system()"
});
formatter.result({
  "duration": 4437063658,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 13082044964,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vignesh@gmail.com",
      "offset": 17
    },
    {
      "val": "9869868@7\u0026",
      "offset": 41
    }
  ],
  "location": "RegisterationStepDefinition.enter_the_Email_and_password(String,String)"
});
formatter.result({
  "duration": 7326762039,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.click_the_Register_button()"
});
formatter.result({
  "duration": 2057161618,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7072439680,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Automation Website",
  "description": "To check if the user is able to register with valid details",
  "id": "testing-the-practice-automation-website;automation-website;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Practice_Automation"
    },
    {
      "line": 3,
      "name": "@TC-01_Register"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Launch the chrome browser in system",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "open the Practice automation website",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "The user enters \"vicky@gmail.com\" and \"sanjeev!@#$\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Click the Register button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterationStepDefinition.launch_the_chrome_browser_in_system()"
});
formatter.result({
  "duration": 3276218662,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 13830276185,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vicky@gmail.com",
      "offset": 17
    },
    {
      "val": "sanjeev!@#$",
      "offset": 39
    }
  ],
  "location": "RegisterationStepDefinition.enter_the_Email_and_password(String,String)"
});
formatter.result({
  "duration": 7275896963,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.click_the_Register_button()"
});
formatter.result({
  "duration": 2071343939,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7077294994,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Automation Website",
  "description": "To check if the user is able to register with valid details",
  "id": "testing-the-practice-automation-website;automation-website;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Practice_Automation"
    },
    {
      "line": 3,
      "name": "@TC-01_Register"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Launch the chrome browser in system",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "open the Practice automation website",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "The user enters \"kpvic@gmail.com\" and \"admin^%$#\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Click the Register button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterationStepDefinition.launch_the_chrome_browser_in_system()"
});
formatter.result({
  "duration": 3551581724,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 14003027068,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kpvic@gmail.com",
      "offset": 17
    },
    {
      "val": "admin^%$#",
      "offset": 39
    }
  ],
  "location": "RegisterationStepDefinition.enter_the_Email_and_password(String,String)"
});
formatter.result({
  "duration": 7345507805,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.click_the_Register_button()"
});
formatter.result({
  "duration": 2086957671,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7338038874,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "To check if the user is able to login with valid details",
  "description": "",
  "id": "testing-the-practice-automation-website;to-check-if-the-user-is-able-to-login-with-valid-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@TC-02_Login_Functionlity"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "Launch the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "open the Practice automation",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Enter the Email and password in Login",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Click Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefiniton.launch_the_chrome_browser_in_system()"
});
formatter.result({
  "duration": 4059044237,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefiniton.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 15012565520,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefiniton.enter_the_Email_and_password_in_Login()"
});
formatter.result({
  "duration": 2950334122,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefiniton.click_Login_Button()"
});
formatter.result({
  "duration": 23516430439,
  "status": "passed"
});
formatter.match({
  "location": "RegisterationStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7096537657,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "To check if the user is able to filter the price using slider",
  "description": "",
  "id": "testing-the-practice-automation-website;to-check-if-the-user-is-able-to-filter-the-price-using-slider",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@TC-03_Filter_Functionality"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "Launching the chrome browser in system",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "opening the Practice automation website",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Entering  the Email and password in Login",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Clicking Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "click_Shop_icon and Filter price using Slider",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Closing the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FilterFunctionalityStepDefinition.launch_the_chrome_browser_in_system()"
});
formatter.result({
  "duration": 3463843216,
  "status": "passed"
});
formatter.match({
  "location": "FilterFunctionalityStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 14067412943,
  "status": "passed"
});
formatter.match({
  "location": "FilterFunctionalityStepDefinition.enter_the_Email_and_password_in_Login()"
});
formatter.result({
  "duration": 2329134758,
  "status": "passed"
});
formatter.match({
  "location": "FilterFunctionalityStepDefinition.click_Login_Button()"
});
formatter.result({
  "duration": 7310513593,
  "status": "passed"
});
formatter.match({
  "location": "FilterFunctionalityStepDefinition.click_shop_icon_and_Filter_price_using_Slider()"
});
formatter.result({
  "duration": 41209175748,
  "status": "passed"
});
formatter.match({
  "location": "FilterFunctionalityStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7121957168,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "To check if the user is able to add the books in the basket on the filtered price",
  "description": "",
  "id": "testing-the-practice-automation-website;to-check-if-the-user-is-able-to-add-the-books-in-the-basket-on-the-filtered-price",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@TC_04_Filtering_And_adding_to_Basket"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "Launching the chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "opening the Practice automation",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Entering the Email and password",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Clicking Login",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Click Shop icon Filter price using Slider",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Add the books to the basket and View the cart",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Close",
  "keyword": "Then "
});
formatter.match({
  "location": "FilteringAddToBasketPageStepDefinition.launch_the_chrome_browser_in_system()"
});
formatter.result({
  "duration": 3465099806,
  "status": "passed"
});
formatter.match({
  "location": "FilteringAddToBasketPageStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 13910506118,
  "status": "passed"
});
formatter.match({
  "location": "FilteringAddToBasketPageStepDefinition.enter_the_Email_and_password_in_Login()"
});
formatter.result({
  "duration": 2328303702,
  "status": "passed"
});
formatter.match({
  "location": "FilteringAddToBasketPageStepDefinition.click_Login_Button()"
});
formatter.result({
  "duration": 7478841113,
  "status": "passed"
});
formatter.match({
  "location": "FilteringAddToBasketPageStepDefinition.click_shop_icon_and_Filter_price_using_Slider()"
});
formatter.result({
  "duration": 68937560176,
  "status": "passed"
});
formatter.match({
  "location": "FilteringAddToBasketPageStepDefinition.add_the_books_to_the_basket_and_View_the_cart()"
});
formatter.result({
  "duration": 7801171860,
  "status": "passed"
});
formatter.match({
  "location": "FilteringAddToBasketPageStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7115024403,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "To check if the user is able to buy books from android category",
  "description": "",
  "id": "testing-the-practice-automation-website;to-check-if-the-user-is-able-to-buy-books-from-android-category",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 48,
      "name": "@TC_05_Adding_books_from_android_Category"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "Launch chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "opening the website",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "Enter Email and password in website",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "login Button",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Click Shop icon, click android and buy the book",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "View the cart android book",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AndroidCategoryStepDefinition.launch_the_chrome_browser_in_system()"
});
formatter.result({
  "duration": 3476233916,
  "status": "passed"
});
formatter.match({
  "location": "AndroidCategoryStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 15895783099,
  "status": "passed"
});
formatter.match({
  "location": "AndroidCategoryStepDefinition.enter_the_Email_and_password_in_Login()"
});
formatter.result({
  "duration": 2315964354,
  "status": "passed"
});
formatter.match({
  "location": "AndroidCategoryStepDefinition.click_Login_Button()"
});
formatter.result({
  "duration": 7589460655,
  "status": "passed"
});
formatter.match({
  "location": "AndroidCategoryStepDefinition.click_Shop_icon_click_android_and_buy_the_book()"
});
formatter.result({
  "duration": 117463862095,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.practiceautomation.stepdefinition.AndroidCategoryStepDefinition.click_Shop_icon_click_android_and_buy_the_book(AndroidCategoryStepDefinition.java:62)\r\n\tat ✽.Then Click Shop icon, click android and buy the book(src/main/resources/Feature/TestCase.feature:54)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AndroidCategoryStepDefinition.view_the_cart_android_book()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterationStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 59,
  "name": "To check if the user is able to buy books from javascipt category",
  "description": "",
  "id": "testing-the-practice-automation-website;to-check-if-the-user-is-able-to-buy-books-from-javascipt-category",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 58,
      "name": "@TC_06_Adding_books_from_JavaScript_Category"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "Launching a chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "open automation website",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "Enter Email password in website",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "Click Login Button in myaccount",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "Click Shop icon, Click JavaScript and buy the book",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "View the cart js book",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "Closing the browser tab",
  "keyword": "Then "
});
formatter.match({
  "location": "JavascriptStepDefinition.launch_the_chrome_browser_in_system()"
});
formatter.result({
  "duration": 3629217297,
  "status": "passed"
});
formatter.match({
  "location": "JavascriptStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 12690965391,
  "status": "passed"
});
formatter.match({
  "location": "JavascriptStepDefinition.enter_the_Email_and_password_in_Login()"
});
formatter.result({
  "duration": 2353882175,
  "status": "passed"
});
formatter.match({
  "location": "JavascriptStepDefinition.click_Login_Button()"
});
formatter.result({
  "duration": 18445687231,
  "status": "passed"
});
formatter.match({
  "location": "JavascriptStepDefinition.click_Shop_icon_Click_JavaScript_and_buy_the_book()"
});
formatter.result({
  "duration": 52498366207,
  "status": "passed"
});
formatter.match({
  "location": "JavascriptStepDefinition.view_the_cart_js_book()"
});
formatter.result({
  "duration": 6317151091,
  "status": "passed"
});
formatter.match({
  "location": "JavascriptStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7112812911,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "To check if the user is able to able to filter the prices from low to high",
  "description": "",
  "id": "testing-the-practice-automation-website;to-check-if-the-user-is-able-to-able-to-filter-the-prices-from-low-to-high",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 67,
      "name": "@TC_07_Filtering_The_Price_from_low_to_high"
    }
  ]
});
formatter.step({
  "line": 69,
  "name": "Launching the chrome browser in the system",
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "open the Automation Practice website",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "Enter the Email and password in Practice website",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "Click Login button",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "Click Shop icon and in Dropdown select the prices from low to high",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "Close the browser tab",
  "keyword": "Then "
});
formatter.match({
  "location": "SotingLowtoHighStepDefinition.launch_the_chrome_browser_in_system()"
});
formatter.result({
  "duration": 3557999847,
  "status": "passed"
});
formatter.match({
  "location": "SotingLowtoHighStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 12507398700,
  "status": "passed"
});
formatter.match({
  "location": "SotingLowtoHighStepDefinition.enter_the_Email_and_password_in_Login()"
});
formatter.result({
  "duration": 2405206012,
  "status": "passed"
});
formatter.match({
  "location": "SotingLowtoHighStepDefinition.click_Login_Button()"
});
formatter.result({
  "duration": 8990732273,
  "status": "passed"
});
formatter.match({
  "location": "SotingLowtoHighStepDefinition.click_Shop_icon_and_in_Dropdown_select_the_prices_from_low_to_high()"
});
formatter.result({
  "duration": 29019949872,
  "status": "passed"
});
formatter.match({
  "location": "SotingLowtoHighStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7084583819,
  "status": "passed"
});
formatter.scenario({
  "line": 77,
  "name": "To check if the user is able to buy books from HTML category",
  "description": "",
  "id": "testing-the-practice-automation-website;to-check-if-the-user-is-able-to-buy-books-from-html-category",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 76,
      "name": "@TC_08_Delete_item_from_cart"
    }
  ]
});
formatter.step({
  "line": 78,
  "name": "Launch the chrome browser to open the automation website",
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "opening the Practice automation website on chrome",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "Enter the Email_id and password in Login",
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "Clicking Login Button on automation website",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "Click Shop icon, Click HTML and buy the book",
  "keyword": "Then "
});
formatter.step({
  "line": 83,
  "name": "View the cart and Delete item from cart",
  "keyword": "Then "
});
formatter.step({
  "line": 84,
  "name": "Closing the chrome browser tabs",
  "keyword": "Then "
});
formatter.match({
  "location": "DeletingCartStepDefinition.launch_the_chrome_browser_in_system()"
});
formatter.result({
  "duration": 3451500469,
  "status": "passed"
});
formatter.match({
  "location": "DeletingCartStepDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 14703121614,
  "status": "passed"
});
formatter.match({
  "location": "DeletingCartStepDefinition.enter_the_Email_and_password_in_Login()"
});
formatter.result({
  "duration": 2307967942,
  "status": "passed"
});
formatter.match({
  "location": "DeletingCartStepDefinition.click_Login_Button()"
});
formatter.result({
  "duration": 9222928760,
  "status": "passed"
});
formatter.match({
  "location": "DeletingCartStepDefinition.click_Shop_icon_Click_HTML_and_buy_the_book()"
});
formatter.result({
  "duration": 75976611497,
  "status": "passed"
});
formatter.match({
  "location": "DeletingCartStepDefinition.view_the_cart_html_book()"
});
formatter.result({
  "duration": 8322743443,
  "status": "passed"
});
formatter.match({
  "location": "DeletingCartStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7110166068,
  "status": "passed"
});
formatter.scenario({
  "line": 87,
  "name": "To check if the user able to place the order",
  "description": "",
  "id": "testing-the-practice-automation-website;to-check-if-the-user-able-to-place-the-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 86,
      "name": "@TC_09_Placing_the_order"
    }
  ]
});
formatter.step({
  "line": 88,
  "name": "Launching a chrome to open website",
  "keyword": "Given "
});
formatter.step({
  "line": 89,
  "name": "opening the Practice automation website in system",
  "keyword": "Then "
});
formatter.step({
  "line": 90,
  "name": "Enter Email password in  auto website",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "Click Login Button in automation website",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "Click Shop button  click Java and buy the book",
  "keyword": "Then "
});
formatter.step({
  "line": 93,
  "name": "View cart, Click proceed to checkout, Enter the billing details and Click place order",
  "keyword": "Then "
});
formatter.step({
  "line": 94,
  "name": "Order status Message",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "Logut the user",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "Closing the browser tabs",
  "keyword": "Then "
});
formatter.match({
  "location": "PlaceOrderStepsDefinition.launch_the_chrome_browser_in_system()"
});
formatter.result({
  "duration": 3332091595,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderStepsDefinition.open_the_Practice_automation_website()"
});
formatter.result({
  "duration": 13852597267,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderStepsDefinition.enter_the_Email_and_password_in_Login()"
});
formatter.result({
  "duration": 2309344980,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderStepsDefinition.click_Login_Button()"
});
formatter.result({
  "duration": 17097132725,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderStepsDefinition.click_Shop_icon_Click_JavaScript_and_buy_the_book()"
});
formatter.result({
  "duration": 61893455312,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderStepsDefinition.view_cart_Click_proceed_to_checkout_Enter_the_billing_details_and_Click_place_order()"
});
formatter.result({
  "duration": 26337726238,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderStepsDefinition.order_status_Message()"
});
formatter.result({
  "duration": 6637988505,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderStepsDefinition.logut_the_user()"
});
formatter.result({
  "duration": 14711662497,
  "status": "passed"
});
formatter.match({
  "location": "PlaceOrderStepsDefinition.close_the_browser()"
});
formatter.result({
  "duration": 7138289060,
  "status": "passed"
});
});