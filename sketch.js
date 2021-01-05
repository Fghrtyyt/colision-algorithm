var stillrect, movingrect;





function setup() {

  createCanvas(1200,800);
  stillrect = createSprite(400, 200, 50, 50);
  movingrect = createSprite(800, 200, 80, 30);
  stillrect.shapeColor = "green"
  movingrect.shapeColor = "green"
}

function draw() {
  background ("black");  
movingrect.x = mouseX
movingrect.y = mouseY
if(movingrect.x - stillrect.x< stillrect.width/2 + movingrect.width/2
  && stillrect.x - movingrect.x < stillrect.width/2 + movingrect.width/2
  && movingrect.y - stillrect.y< stillrect.height/2 + movingrect.height/2
  && stillrect.y - movingrect.y < stillrect.height/2 + movingrect.height/2
  ){
  stillrect.shapeColor = "red"
  movingrect.shapeColor = "red"
}
else
{
  stillrect.shapeColor = "green"
  movingrect.shapeColor = "green"
}





drawSprites();
}