import { Component, OnInit } from '@angular/core';
import { GetService} from './get.service'
import { Directions } from 'nativescript-directions'
import { openUrl } from '@nativescript/core/utils';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private get: GetService) { }
  meetings = [] 
  time = [] 
  locate = []

  ngOnInit() {
    this.get.getMeetings()
    .subscribe((data: any) => {
      data.items.forEach(element => {
        this.locate.push(element.location)
        
        let t = element.start.dateTime; 
        t = t.toString()
        let r = t.indexOf("T")
        let final; 

        let hour = t.slice(r+1, 13); 
        let min = t.slice(r+3, 16); 
        let time = t.slice(r+1, 16);
        
        if(hour > 12){
          hour -= 12
          final = hour+min+" pm"

        }else{
          final = time + " am"
        }

        this.time.push(final); 
        this.meetings.push(element); 
      });
    })
    
  }

  direction(m){
    let dir = new Directions(); 
        dir.navigate({
            to:[{
                address: m
            }]
        }).then(()=>{
            console.log("MAPS APP LAUNCHED")
        }, err=>{
            console.log(err)
        })
  }

  openZoom(m){
  
    let firstDigit = m.match(/\d/) // will give you the first digit in the string
    let index = m.indexOf(firstDigit)
    

    let num = m.slice(index, index+13)
    num = num.split(" ").join("")
    
    // console.log(`zoomus://zoom.us.join?action=join&confno=${num}`)
  
     openUrl(`zoomus://zoom.us.join?action=join&confno=${num}`)
    
   
    // openUrl(`zoomus://zoom.us.join?action&confno=${m}`)
  }

}
