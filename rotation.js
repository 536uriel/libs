function drawRotation(r,...arr){
    ctx.save()
    ctx.translate(300,300)
    ctx.rotate(d)
    d -= r
    arr.forEach((s) =>{
        
    s.x -= 300
    s.y -= 300

    s.draw()

    s.x += 300
    s.y += 300
    
    })


    
    ctx.translate(-300,300)
    ctx.restore()
}
