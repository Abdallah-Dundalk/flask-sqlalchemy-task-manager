document.addEventListener('DOMContentLoaded', function() {
   // datepicker initialization
    let elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);

    // datepicker initialization
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
        format:"dd mmmm, yyyy",
        i18n: {done: "Select"}
    });

    // drop down menu
    let dropdown = document.querySelectorAll('select');
    M.FormSelect.init(dropdown);
  });
