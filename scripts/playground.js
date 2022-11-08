var addArcCamera = (scene, distance) => {

    // This creates and positions an arc rotate camera
    var camera = new BABYLON.ArcRotateCamera("camera1", -Math.PI / 2, Math.PI / 2 - (Math.PI/10), distance, new BABYLON.Vector3(0, 0, 0));
    camera.panningSensibility = 100;
    camera.angularSensibilityX = 800;
    camera.angularSensibilityY = 800;

    // Get canvas from scene
    const canvas = scene.getEngine().getRenderingCanvas();

    // Attaches camera canvas
    camera.attachControl(canvas, true);

    return camera
}