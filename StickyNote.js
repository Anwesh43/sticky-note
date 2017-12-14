const w = window.innerWidth,h = window.innerHeight
class StickyNote {
    constructor(text) {
        this.text = text
        this.createDom()
    }
    setText(text) {
        this.text = text
    }
    createDom() {
        this.div = document.createElement('div')
        this.div.style.background = '#F4FF81'
        this.div.style.fontSize = Math.min(w,h)/30
        this.w = Math.min(w,h)/4
        this.h = Math.min(w,h)/3
        this.div.style.width = this.w
        this.div.style.height = this.h
        this.div.style.postion = 'absolute'
        this.div.style.left = 0
        this.div.style.top = 0
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
window.onmousemove = (event) {
    this.stickyNotes.forEach((stickyNote)=>{
        if(stickyNote.down) {
            stickyNote.div.style.left = event.offsetX - stickyNote.w/2
            stickyNote.div.style.top = event.offsetY - stickyNote.h/2
        }
    })
}
this.text = document.createElement('input')
var currNote = new StickyNote('')
input.onkeyup = (event) =>{
   if(event.keyCode == 32) {
      currNote.handleMouseMove()
      this.stickyNotes.push(currNote)
      currNote = new StickyNote('')
   }
   else {
      currNote.setText(input.value)
   }
}
