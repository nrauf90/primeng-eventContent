import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prime-ng';

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    events: [
      { title: 'event 1', date: '2023-06-10', extraText: 'Muhammad Noman Rauf' },
      { title: 'event 2', date: '2023-06-21' , extraText: 'Muhammad Noman Rauf' }
    ],
    //Custom Content for Events
    eventContent: (arg: any) =>
    {   //add time
      console.log(arg.event)
      let timeText = document.createElement('div')
      timeText.className = "fc-event-time";
      timeText.innerHTML = arg.event.title;
      //include additional info
      let additionalText = document.createElement('i')
      additionalText.className = "fc-event-title";
      additionalText.innerHTML = arg.event.extendedProps.extraText;
      //include img/icon that should work as a button
      let img = document.createElement('img');
      img.src = 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png';
      img.className = "_iconFirma";


      img.addEventListener("click", (e: Event) => {
        e.stopPropagation(); //prevents eventClick to be triggered
         //this works now because 'this' is not the function anymore: it's the angular component

      })

      let arrayOfDomNodes = [ timeText, additionalText, img ]
      return { domNodes: arrayOfDomNodes }

    }
  };

}
