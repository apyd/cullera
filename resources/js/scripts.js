$(document).ready(function() {
  if ($('#txtCaptcha').length > 0) {
    var a = Math.ceil(Math.random() * 9) + '';
    var b = Math.ceil(Math.random() * 9) + '';
    var c = Math.ceil(Math.random() * 9) + '';
    var d = Math.ceil(Math.random() * 9) + '';
    var e = Math.ceil(Math.random() * 9) + '';
    var code = a + b + c + d + e;
    document.getElementById("txtCaptcha").value = code;
    document.getElementById("CaptchaDiv").innerHTML = code;
  }
  if ($('#date-arrive').length > 0) {
    var time = new Date();
    var year = time.getFullYear().toString();
    var month = (time.getMonth() + 1).toString();
    var day = time.getDate().toString();
    if (month.length == 1) {
      month = "0" + month;
    }
    if (day.length == 1) {
      day = "0" + day;
    }
    var date = year + "-" + month + "-" + day;
    document.getElementById('date-arrive').min = date;
    document.getElementById('date-arrive').placeholder = document.getElementById('date-arrive').min;
    document.getElementById('date-go').placeholder = document.getElementById('date-arrive').min;
  }
  //Script for full calendar
  if ($('#date-arrive').length > 0) {
    $('#calendar').fullCalendar({

      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,listYear'
      },

      displayEventTime: false, // don't show the time column in list view

      // THIS KEY WON'T WORK IN PRODUCTION!!!
      // To make your own Google API key, follow the directions here:
      // http://fullcalendar.io/docs/google_calendar/
      googleCalendarApiKey: 'AIzaSyBPciQcNvyG04-L9XwZq_JTUVrk1tgQfhY',

      // US Holidays
      events: 'cullera.apartment@gmail.com',

      eventClick: function(event) {
        // opens events in a popup window
        window.open(event.url, 'gcalevent', 'width=700,height=600');
        return false;
      },

      loading: function(bool) {
        $('#loading').toggle(bool);
      }

    });
  }

});

function InvalidName(textbox) {
  var re = /[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
  if (textbox.value == '') {
    textbox.setCustomValidity('Proszę podać imię i nazwisko');
  } else if (textbox.value.search(re) > -1) {
    textbox.setCustomValidity('Proszę podać właściwe imię i nazwisko');
  } else {
    textbox.setCustomValidity('');
  }
  return true;
};

function InvalidEmail(textbox) {
  var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]+$/;
  if (textbox.value === '') {
    textbox.setCustomValidity('Proszę wprowadzić adres email');
  } else if (!textbox.value.match(re)) {
    textbox.setCustomValidity('Proszę wprowadzić poprawny adres email');
  } else if (textbox.value[textbox.value.length - 1] === '.') {
    textbox.setCustomValidity('Adres email nie może się kończyć kropką')
  } else {
    textbox.setCustomValidity("");
  }
  return true;
};


function InvalidText(textbox) {
  if (textbox.value === '') {
    textbox.setCustomValidity('Wprowadź tekst');
  } else {
    textbox.setCustomValidity("");
  }
  return true;
};

function InvalidTel(textbox) {
  var re = /\+([0-9]){11}/
  if (textbox.value === '') {
    textbox.setCustomValidity('Proszę podać numer telefonu');
  } else if (!textbox.value.match(re)) {
    textbox.setCustomValidity('Proszę podać poprawny numer telefonu');
  } else {
    textbox.setCustomValidity("");
  }
  return true;
};

function InvalidDateArrive(textbox) {
  var date = textbox.value.split("-");
  var asked_date = new Date(date[0], date[1], date[2]);
  var date_min = document.getElementById('date-arrive').min.split("-");
  var min_date = new Date(date_min[0], date_min[1], date_min[2]);
  //  alert(typeof(parseInt(test[0])));
  if (textbox.value == "") {
    textbox.setCustomValidity("Proszę podać datę");
  } else if (asked_date < min_date) {
    textbox.setCustomValidity("Proszę podać właściwą datę");
  } else {
    textbox.setCustomValidity("");
    document.getElementById('date-go').min = document.getElementById('date-arrive').value;
    document.getElementById('date-go').placeholder = document.getElementById('date-arrive').value;
  }
  return true;
};

function InvalidDateGo(textbox) {
  var date = textbox.value.split("-");
  var asked_date = new Date(date[0], date[1], date[2]);
  var date_min = document.getElementById('date-go').min.split("-");
  var min_date = new Date(date_min[0], date_min[1], date_min[2]);
  //  alert(typeof(parseInt(test[0])));
  if (textbox.value == "") {
    textbox.setCustomValidity("Proszę podać datę");
  } else if (asked_date < min_date) {
    textbox.setCustomValidity("Proszę podać właściwą datę");
  } else {
    textbox.setCustomValidity("");
  }
  return true;
};

// Validate input against the generated number
function ValidCaptcha() {
  var str1 = removeSpaces(document.getElementById('txtCaptcha').value);
  var str2 = removeSpaces(document.getElementById('CaptchaInput').value);
  if (str1 == str2) {
    if ($("input:first").val() !== "") {
      $("#messageSent").css("display", "block");
      $("#messageSent").css("opacity", "1");
      $("#submit-button").focus();
    }
    var a = Math.ceil(Math.random() * 9) + '';
    var b = Math.ceil(Math.random() * 9) + '';
    var c = Math.ceil(Math.random() * 9) + '';
    var d = Math.ceil(Math.random() * 9) + '';
    var e = Math.ceil(Math.random() * 9) + '';
    var code = a + b + c + d + e;
    document.getElementById("txtCaptcha").value = code;
    document.getElementById("CaptchaDiv").innerHTML = code;
    $("#error").text('');
    return true;
  } else {
    return false;
  }
};
// Remove the spaces from the entered and generated code
function removeSpaces(string) {
  return string.split(' ').join('');
};

function close_modal() {
  $("#messageSent").css("display", "none");
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("comment").value = "";
};