const w = window.innerWidth,h = window.innerHeight
class StickyNote {
    constructor(text,i) {
        this.text = text
        this.createDom(i)
    }
    setText(text) {
        this.text = text
        this.div.innerHTML = text
    }
    createDom(i) {
        this.div = document.createElement('div')
        this.div.style.background = '#F4FF81'
        this.div.style.fontSize = Math.min(w,h)/30
        this.w = Math.min(w,h)/2
        this.h = Math.min(w,h)/3
        this.div.style.width = this.w
        this.div.style.height = this.h
        this.div.style.position = 'absolute'
        this.div.style.left = Math.min(w,h)/20+i*Math.min(w,h)/20
        this.div.style.top = Math.min(w,h)/5+i*Math.min(w,h)/30
        this.div.draggable = false
        this.div.style.boxShadow = '1px 2px #EEEEEE'
        document.body.appendChild(this.div)
    }
    handleMouseMove() {
        this.div.onmousedown = (event) => {
            this.down = true
        }
        this.div.onmouseup = (event) => {
            this.down = false
        }
    }
}
this.stickyNotes = []
window.onmousemove = (event) => {
    this.stickyNotes.forEach((stickyNote)=>{
        event.stopPropagation()
        if(stickyNote.down) {
            stickyNote.div.style.left = event.offsetX - stickyNote.w/2
            stickyNote.div.style.top = event.offsetY - stickyNote.h/2
        }
    })
}
const input = document.createElement('input')
document.body.appendChild(input)
var currNote = new StickyNote('',this.stickyNotes.length)
input.onkeyup = (event) =>{
    console.log(event)
   if(event.keyCode == 13) {
      currNote.handleMouseMove()
      this.stickyNotes.push(currNote)
      currNote = new StickyNote('',this.stickyNotes.length)
      input.value = ''
   }
   else {
      currNote.setText(input.value)
   }
}
