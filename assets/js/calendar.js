$(document).ready(function() {
    $('#calendar').fullCalendar({
        googleCalendarApiKey: 'AIzaSyB4sJMKTTCLJhuZpm365dUjFrgwt1GMcrI',
        events: {
            googleCalendarId: 'f5s5jqffscjr8m55hhds508t14@group.calendar.google.com'
        },
        /*header: {
          center: 'month,listView' // buttons for switching between views
        },
        views: {
          listView: {
            type: 'list',
            duration: { days: 4 },
            buttonText: 'list events'
          }
        }*/
    });
});
