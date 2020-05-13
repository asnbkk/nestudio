import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  innerWidth
  ballPosition
  scrollPosition

  aboutUsShuffle = [
    'HTML', 'App', 'Interface', 'CSS', 'Angular', 'SCSS', 'NodeJS', 
    'JavaScript', 'Responsive design', 'Semantic markup', 'SaaS', 'API', 
    'Bootstrap', 'Backend', 'Cache', 'Data structures', 'Documentation', 'Frameworks',
    'Frontend', 'HTTP', 'Plugin', 'Python', 'Software stack', 'UI Design', 'UX Design',
    'Web app', 'Mobile app'
                  ]  
  shuffleArray = function(array) {
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  this.aboutUsShuffle = array
}

  @HostListener('window:scroll', ['$event'])
  doSomething() {
    let target = document.getElementById('projects')
    // target.scrollIntoView();

    this.scrollPosition = window.pageYOffset
    if (!this.isSmall()) {
      this.ballPositionCounter(15)
      //position absolute used
    }
    else {
      this.ballPositionCounter(5)
      //position absolute used
    }
  }

    val
  ballPositionCounter(padding) {
    this.ballPosition = window.pageYOffset + padding * this.innerWidth / 100
    let res = this.innerWidth - (padding * this.innerWidth / 100) - 136
    if(this.ballPosition + 500 <= res)
      this.val = window.pageYOffset
    if (this.ballPosition + 500 >= res) {
      this.ballPosition = res - 500 - (window.pageYOffset - this.val)
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
    if (this.innerWidth >= 1400) return false
    return true
  }

  ngOnInit(): void {
    this.type()
    this.shuffleArray(this.aboutUsShuffle)
    this.innerWidth = window.innerWidth;
  }
}
