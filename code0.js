gdjs.GameCode = {};
gdjs.GameCode.GDNewSpriteObjects1= [];
gdjs.GameCode.GDNewSpriteObjects2= [];
gdjs.GameCode.GDNewSprite2Objects1= [];
gdjs.GameCode.GDNewSprite2Objects2= [];
gdjs.GameCode.GDNewSprite3Objects1= [];
gdjs.GameCode.GDNewSprite3Objects2= [];
gdjs.GameCode.GDScoreObjects1= [];
gdjs.GameCode.GDScoreObjects2= [];
gdjs.GameCode.GDScore2Objects1= [];
gdjs.GameCode.GDScore2Objects2= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};


gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.GameCode.GDNewSprite3Objects1});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.GameCode.GDNewSprite3Objects1});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.GameCode.GDNewSprite2Objects1});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.GameCode.GDNewSprite2Objects1});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.GameCode.GDNewSpriteObjects1});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.GameCode.GDNewSprite2Objects1});
gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("score").setNumber(0);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.GameCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.GameCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDScoreObjects1[i].setString("Score: " + gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().get("score")));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseInsideCanvas(runtimeScene);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.GameCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.GameCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewSpriteObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0),gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.GameCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.GameCode.GDNewSprite3Objects1);
{for(var i = 0, len = gdjs.GameCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewSpriteObjects1[i].getBehavior("FireBullet").FireTowardPosition((gdjs.GameCode.GDNewSpriteObjects1[i].getPointX("")) - 50, (gdjs.GameCode.GDNewSpriteObjects1[i].getPointY("")) - 10, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDNewSprite3Objects1Objects, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 1000, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.GameCode.GDNewSprite2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.GameCode.GDNewSprite3Objects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDNewSprite3Objects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDNewSprite2Objects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDNewSprite2Objects1 */
/* Reuse gdjs.GameCode.GDNewSprite3Objects1 */
{for(var i = 0, len = gdjs.GameCode.GDNewSprite3Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewSprite3Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDNewSprite2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewSprite2Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDNewSprite2Objects1Objects, gdjs.random(1920), gdjs.random(1080), "");
}{runtimeScene.getGame().getVariables().get("score").add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.GameCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.GameCode.GDNewSprite2Objects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDNewSpriteObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDNewSprite2Objects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LAlt");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "j");
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "RAlt");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "j");
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDNewSpriteObjects1.length = 0;
gdjs.GameCode.GDNewSpriteObjects2.length = 0;
gdjs.GameCode.GDNewSprite2Objects1.length = 0;
gdjs.GameCode.GDNewSprite2Objects2.length = 0;
gdjs.GameCode.GDNewSprite3Objects1.length = 0;
gdjs.GameCode.GDNewSprite3Objects2.length = 0;
gdjs.GameCode.GDScoreObjects1.length = 0;
gdjs.GameCode.GDScoreObjects2.length = 0;
gdjs.GameCode.GDScore2Objects1.length = 0;
gdjs.GameCode.GDScore2Objects2.length = 0;

gdjs.GameCode.eventsList0(runtimeScene);
return;

}

gdjs['GameCode'] = gdjs.GameCode;
