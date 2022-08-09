gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDNewTextObjects1= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects2= [];
gdjs.Untitled_32sceneCode.GDNewText2Objects1= [];
gdjs.Untitled_32sceneCode.GDNewText2Objects2= [];
gdjs.Untitled_32sceneCode.GDNewText3Objects1= [];
gdjs.Untitled_32sceneCode.GDNewText3Objects2= [];
gdjs.Untitled_32sceneCode.GDNewText32Objects1= [];
gdjs.Untitled_32sceneCode.GDNewText32Objects2= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2= [];

gdjs.Untitled_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_0 = {val:false};


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.Untitled_32sceneCode.GDNewText3Objects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewText3Objects1[i].setString(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().get("score")));
}
}}

}


{


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "z");
}if (gdjs.Untitled_32sceneCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{


{
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDNewTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewText2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewText2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewText3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewText3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewText32Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewText32Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
