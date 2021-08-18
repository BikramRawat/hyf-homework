// Draw some arts using canvas element, JS classes and randomize the art
const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
canvas.height = window.innerHeight
canvas.width = window.innerWidth
class Circle {
    constructor(x,y,radius,startAngle,endAngle,fillColor){
        this.x = x
        this.y = y
        this.radius = radius
        this.startAngle = startAngle
        this.endAngle = endAngle
        this.fillColor = fillColor
    }
    drawCircle(ctx){
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.radius,this.startAngle,this.endAngle,false)
        ctx.fillStyle = this.fillColor
        ctx.fill()
        ctx.lineWidth = 3
        ctx.strokeStyle = 'blue'
        ctx.stroke()
    }
}

const circle1 = new Circle(50,50,20,0,2 * Math.PI,'#ff0000')
circle1.drawCircle(ctx)
const circle2 = new Circle(250,150,40,0,2 * Math.PI, '#00ff00')
circle2.drawCircle(ctx)
circle3 = new Circle(200,400,60,0,2*Math.PI,'#ffff00')
circle3.drawCircle(ctx)

function fillNewColor(){
    return 'rgb(' + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ')'
}

function drawRandomCircles(){
    const widthOfCircle = Math.floor(Math.random() * canvas.width)
    const heightOfCircle = Math.floor(Math.random() * canvas.height)
    //Q. What if we wanted the canvas to have the same width and height of the screen?
    //Ans: we can use window.screen.width and window.screen.height
    const radiusOfCircle = Math.floor(Math.random() * 200)
    const colorOfCircle = fillNewColor()
    const randomCircle = new Circle(widthOfCircle, heightOfCircle,radiusOfCircle,0,2*Math.PI, colorOfCircle)
    randomCircle.drawCircle(ctx)
}
 
setInterval(() => {
    drawRandomCircles()
},3000);

document.body.addEventListener("mousemove", drawRandomCircles)
// or we can select canvas as its height and width is the document window size as line 54
// canvas.addEventListener("mousemove", drawRandomCircles)

// Also painting some arts with mouse events
// this is just extra exercise  i have added my-self
    let painting = false
    function startPosition(e){
        painting = true
        draw(e)
    }
    function endPosition(){
        painting = false
        ctx.beginPath()
    }
    function draw(e){
        if(!painting)return
        ctx.lineWidth = 5
        ctx.strokeStyle = 'red'
        ctx.lineCap = 'round'
        ctx.lineTo(e.clientX, e.clientY)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(e.clientX,e.clientY)
    }
    canvas.addEventListener('mousedown', startPosition)
    canvas.addEventListener('mouseup', endPosition)
    canvas.addEventListener('mousemove', draw)
