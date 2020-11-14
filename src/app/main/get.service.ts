import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor(private http: HttpClient,) { }


  getMeetings(){
    let d = new Date().getDate()
    let d2 = new Date().getDate() + 1
   
    let m = new Date().getMonth() + 1
   
    let y = new Date().getFullYear()

    //tomorrows date
    var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    var day = currentDate.getDate()
    var month = currentDate.getMonth() + 1
    var year = currentDate.getFullYear()

    let endDate = `${year}-${month}-${day}`
   
    console.log(`${y}-${m}-${d2}`)
    let startDate = `${y}-${m}-${d}`
    




    return this.http.get<{meeings: any}>(`https://www.googleapis.com/calendar/v3/calendars/vgn57os9bsbdbknhtadnmgqh3louv24d@import.calendar.google.com/events?key=AIzaSyACxYM0MpM9y4p9ViJT3jQoe9VE-P3INKU&timeMin=${startDate}T5:00:00Z&timeMax=${endDate}T5:59:00Z&singleEvents=True&orderBy=startTime`)
  
  }


}
