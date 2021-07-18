function setup() {
  createCanvas(1149,1550);

}

function draw(){
 heading();

 step1();
 step2();
 step3();
 step4();
 step5();
 step6();
 step7();
 step8();
 step9();
 step10();
 theEnd();
  drawSprites();
}

function heading() {
  textSize(30)
fill(255, 0, 0)
text("HOW TO MAKE A CHOKOLATE CAKE",310,50);
}

function  step1() {
  textSize(19);
  fill(0, 200, 0);
  text ("step-1:Get Ready",60,100);


  textSize(14);
  fill(0,0,200);
  text("Before you begin baking, grease and flour the pans you are using. These could be 8-inch rounds, 9-inch rounds, 13- by 9-inch rectangular, Bundt pans or even ",120,130);
  text("Springform pans. Preheat the oven to the temperature as directed in the recipe so that it's ready to bake when you are.",120,160);
}

function  step2() {
  textSize(19);
  fill(0, 200, 0);
  text ("step-2: Melting Chocolate or Other Ingredient Preparation",60,220);

  textSize(14);
  fill(0,0,200);
  text("It's important to have all of the ingredients prepared before making the batter. Many cake recipes call for melted chocolate, so you should do that before ",120,250);
  text("beginning to mix up the batter. To melt chocolate, you can use a microwave or a saucepan on the stovetop, the traditional method. There are several ways to ",120,280);
  text("melt chocolate. Other ingredient preparation could include chopping nuts or slicing of lemon or orange zest, among many other cake recipe variations.",120,310);
}

function  step3() {
  textSize(19);
  fill(0, 200, 0);
  text ("step-3: Mix the Dry Ingredients",60,370);

  textSize(14);
  fill(0,0,200);
  text ("It's important to measure correctly and then completely mix the dry ingredients so the cake will rise evenly and properly. Use a wire whisk to combine ",120,400);
  text("the flour with the leavening agents for a good mixing result.",120,430);
}

function  step4() {
  textSize(19);
  fill(0, 200, 0);
  text ("step-4: Cream the Butter and Sugar",60,490);

  textSize(14);
  fill(0,0,200);
  text ("Bring the butter to room temperature before you begin baking. When it's reached the proper temperature, beat it until it's creamy. Slowly add the sugar ",120,520);
  text("while mixing, if possible. If it's not possible to add the sugar while mixing, add a little of the sugar at a time and then mix until you have added the full amount.",120,550);
}

function  step5() {
  textSize(19);
  fill(0, 200, 0);
  text ("step-5:Add the Eggs",60,610);

  textSize(14);
  fill(0,0,200);
  text ("Add the eggs to the butter and sugar mixture, one at a time, and mix well until blended.",120,640);
}

function  step6() {
  textSize(19);
  fill(0, 200, 0);
  text ("step-6:Add the Chocolate",60,700);

  textSize(14);
  fill(0,0,200);
  text ("For a chocolate cake, this is generally when the chocolate is added to the butter and sugar mixture. Be sure to mix it completely. But you should follow",120,730) ;
  text("the specific recipe you are using on when to add chocolate or other flavor ingredients beyond the basics.",120,760);
}

function  step7() {
  textSize(19);
  fill(0, 200, 0);
  text ("step-7:Add Flour and Milk",60,820);

  textSize(14);
  fill(0,0,200);
  text ("Add the dry ingredients mixture with the milk alternately to the butter and sugar mixture, which now also contains eggs and melted chocolate, and mix ",120,850);
  text("well, until it is smooth and uniform. Some recipes add the milk at the end; follow the specific recipe for best results.",120,880);
}

function  step8() {
  textSize(19);
  fill(0, 200, 0);
  text ("step-8: Put Batter in the Pans",60,940);

  textSize(14);
  fill(0,0,200);
  text  ("Carefully divide the batter between two round cake pans or add to one pan if you are using a rectangular or Bundt pan. Gently tap the pans on the counter ",120,970);
  text("to even the tops. If necessary, use a spatula to smooth the tops before baking.",120,1000);
}

function  step9() {
  textSize(19);
  fill(0, 200, 0);
  text ("step-9:  Bake and Cool the Cakes",60,1060);

  textSize(14);
  fill(0,0,200);
  text ("Bake the cakes according to the time and temperature in the recipe directions. Remove from the oven and cool on a rack for 10 minutes or as directed in ",120,1090);
  text("your recipe. Remove the cakes from the pans and cool completely on wire racks before frosting the cake. Make sure the top layer's top is not top down on the rack. ",120,1120);
  text("Otherwise, there will be grid lines on the top of the cake.",120,1150);
}

function  step10() {
  textSize(19);
  fill(0, 200, 0);
  text ("step-10: The Finished Product",60,1210);

  textSize(14);
  fill(0,0,200);
  text ("Once the cakes are completely cool, it's time to frost them.  Choose from basic buttercream,  cream cheese,  ganache or whipped cream. If you have two ",120,1240);
  text("round cakes, put one top side down on the serving platter and frost it. Then put the second cake on top and frost the top and sides. Make swirls as decoration, ",120,1270);
  text("if desired.​",120,1300);
}

function theEnd() {
textSize(50);
fill(255, 165, 0);
text("~~~~~ALL DONE READY TO TASTE~~~~~", 120, 1400)
text("~~~~~THANK YOU~~~~~",310,1500)
}