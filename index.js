
$(".inName").on("focus", function() {
    if ($(this).val() === "") {
      $(this).attr("placeholder", "");
      $(this).addClass("inStyle");
      $(".name").text("First Name cannot be empty"); 
    }
  });
  
  $(".inName").on("input", function() {
    if ($(this).val().length > 0) {
      $(this).removeClass("inStyle");
      $(".name").text("");
    }
  });
  
  $(".inName").on("blur", function() {
    if ($(this).val() === "") {
      $(this).attr("placeholder", "First Name");
    }
  });

  $(".inSurname").on("focus", function() {
    if ($(this).val() === "") {
      $(this).attr("placeholder", "");
      $(this).addClass("inStyle");
      $(".surname").text("Surname cannot be empty"); 
    }
  });
  
  $(".inSurname").on("input", function() {
    if ($(this).val().length > 0) {
      $(this).removeClass("inStyle");
      $(".surname").text("");
    }
  });
  
  $(".inSurname").on("blur", function() {
    if ($(this).val() === "") {
      $(this).attr("placeholder", "Surname");
    }
  });
  $(".inEmail").on("focus", function() {
    if ($(this).val() === "") {
      $(this).attr("placeholder", "");
      $(this).addClass("inStyle");
      $(".adress").text("Email cannot be empty");
    }
  });
  
  $(".inEmail").on("input", function() {
    var email = $(this).val();
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.length > 0) {
      if (emailRegex.test(email)) {
        $(this).removeClass("inStyle");
        $(".adress").text(""); 
      } else {
        $(this).addClass("inStyle"); 
        $(".adress").text("Please enter a valid email address");
      }
    }
  });
  
  $(".inEmail").on("blur", function() {
    if ($(this).val() === "") {
      $(this).attr("placeholder", "Email Address");
      $(".adress").text("");
    }
  });

  $(".inPass").on("focus", function() {
    if ($(this).val() === "") {
      $(this).attr("placeholder", "");
      $(this).addClass("inStyle");
      $(".pass").text("Password cannot be empty"); 
    }
  });
  
  $(".inPass").on("input", function() {
    if ($(this).val().length > 0) {
      $(this).removeClass("inStyle");
      $(".pass").text("");
    }
  });
  
  $(".inPass").on("blur", function() {
    if ($(this).val() === "") {
      $(this).attr("placeholder", "Password");
    }
  });