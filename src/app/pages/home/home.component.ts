import { Component, OnInit, HostListener } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  innerWidth
  ballPosition
  scrollPosition
  
  @HostListener('document:wheel', ['$event.target']) onScroll() {
    // let projects = document.querySelector('.projects')
    // projects.scrollIntoView({behavior: "smooth", block: "start"});
    }

    @HostListener('window:scroll', ['$event']) 
    doSomething() {
      this.scrollPosition = window.pageYOffset
      if(!this.isSmall()) {
        this.ballPositionCounter(15)
        //position absolute used
      }
      else {
        this.ballPositionCounter(5)
        //position absolute used
      }
    }
  // scrollToElement($element): void {
    // console.log($element);
  // }
  ballPositionCounter(padding) {
    this.ballPosition = window.pageYOffset + padding * this.innerWidth / 100
    let res = this.innerWidth - (padding * this.innerWidth / 100) - 136
    if(this.ballPosition + 500 >= res) {
      let position = (padding * this.innerWidth / 100) - window.pageYOffset
      this.ballPosition = res + position
    }
  }
    
  public arrayOfStrings = ['дизайн', 'стиль', 'творчество', 'креатив', 'смелость']
  public charIndex = 0
  public wordIndex = 0
  public typedShit = ''
  public typing: boolean = true
  public pauseIndex = 0
  
  public erasing = false

  type() {

    setInterval(() => {
      if (this.pauseIndex < 10) {
        this.pauseIndex++
        this.typing = false
      }
      else if (this.charIndex < this.arrayOfStrings[this.wordIndex].length && !this.erasing) {
        this.typedShit += this.arrayOfStrings[this.wordIndex][this.charIndex]
        this.charIndex++
      } else {
        this.erasing = true
        return this.erase()
      }
    }, 100);
  }

  erase() {
    if (this.pauseIndex < 50) {
      this.pauseIndex++
      this.typing = false
    }
    else if (this.charIndex > 0 && this.erasing) {
      this.typedShit = this.typedShit.slice(0, -1);
      this.charIndex--
    } else {
      this.pauseIndex = 0
      this.typing = true
      if (this.wordIndex >= this.arrayOfStrings.length - 1)
        this.wordIndex = 0
      else
        this.wordIndex++
      this.erasing = false
      return 0
    }
  }

  isSmall() {
    if(this.innerWidth >= 1400) return false
    return true
  }
  
  ngOnInit(): void {
    this.type()
    this.innerWidth = window.innerWidth;
  }
}
