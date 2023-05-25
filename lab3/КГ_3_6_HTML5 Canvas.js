(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"КГ_3_6_HTML5 Canvas_atlas_1", frames: [[1290,0,178,178],[0,0,1288,723]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Зырочка = function() {
	this.initialize(ss["КГ_3_6_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Фон = function() {
	this.initialize(ss["КГ_3_6_HTML5 Canvas_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.btn_start = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AKFheIxkKJIAA0SgEgswgWuMBZhAAAMAAAAtdMhZhAAAg");
	this.shape.setTransform(1.5,16.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AoyqJIRkKJIxkKKg");
	this.shape_1.setTransform(9.75,7.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("EgswAWvMAAAgtdMBZhAAAMAAAAtdgAnfIrIRkqJIxkqJg");
	this.shape_2.setTransform(1.5,16.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-287.5,-131.4,578,295.9);


(lib.btn_pause = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AC5ogIG4AAIAAO1Im4AAgEglQgVUMBKhAAAMAAAAqpMhKhAAAgArooCIHMAAIAAPJInMAAg");
	this.shape.setTransform(1.5,8.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AqsH0IAAvJIHMAAIAAPJgAD1HCIAAu1IG4AAIAAO1g");
	this.shape_1.setTransform(-4.5,4.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("EglQAVVMAAAgqpMBKhAAAMAAAAqpgAroHHIHMAAIAAvJInMAAgAC5GVIG4AAIAAu1Im4AAg");
	this.shape_2.setTransform(1.5,8.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-239.5,-130.4,482,277.9);


(lib.Символ1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Зырочка();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,178,178), null);


// stage content:
(lib.КГ_3_6_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		this.btn_play.addEventListener("click", func_play.bind(this));
		this.btn_pause.addEventListener("click", func_pause.bind(this));
		this.stop();
		function func_play(){
		this.play();
		}
		function func_pause(){
		this.stop();
		}
		playSound("WeatherAmbienceStormSeaThunderWavesOceanWind");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(150));

	// Слой_нооовая_звездааааа
	this.instance = new lib.Символ1();
	this.instance.setTransform(-112,206.1,1,1,0,0,0,89,89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:4.8322,x:-104.4,y:203.85},0).wait(1).to({rotation:9.6644,x:-96.75,y:201.65},0).wait(1).to({rotation:14.4966,x:-89.05,y:199.5},0).wait(1).to({rotation:19.3289,x:-81.2,y:197.4},0).wait(1).to({rotation:24.1611,x:-73.35,y:195.35},0).wait(1).to({rotation:28.9933,x:-65.35,y:193.35},0).wait(1).to({rotation:33.8255,x:-57.3,y:191.35},0).wait(1).to({rotation:38.6577,x:-49.15,y:189.4},0).wait(1).to({rotation:43.4899,x:-41,y:187.5},0).wait(1).to({rotation:48.3221,x:-32.65,y:185.65},0).wait(1).to({rotation:53.1544,x:-24.3,y:183.8},0).wait(1).to({rotation:57.9866,x:-15.9,y:182.1},0).wait(1).to({rotation:62.8188,x:-7.4,y:180.35},0).wait(1).to({rotation:67.651,x:1.15,y:178.65},0).wait(1).to({rotation:72.4832,x:9.8,y:177},0).wait(1).to({rotation:77.3154,x:18.5,y:175.45},0).wait(1).to({rotation:82.1477,x:27.3,y:173.8},0).wait(1).to({rotation:86.9799,x:36.15,y:172.35},0).wait(1).to({rotation:91.8121,x:45.1,y:170.85},0).wait(1).to({rotation:96.6443,x:54.05,y:169.35},0).wait(1).to({rotation:101.4765,x:63.1,y:167.95},0).wait(1).to({rotation:106.3087,x:72.2,y:166.55},0).wait(1).to({rotation:111.1409,x:81.4,y:165.25},0).wait(1).to({rotation:115.9732,x:90.6,y:163.9},0).wait(1).to({rotation:120.8054,x:99.9,y:162.7},0).wait(1).to({rotation:125.6376,x:109.25,y:161.5},0).wait(1).to({rotation:130.4698,x:118.7,y:160.3},0).wait(1).to({rotation:135.302,x:128.15,y:159.15},0).wait(1).to({rotation:140.1342,x:137.65,y:158.05},0).wait(1).to({rotation:144.9664,x:147.25,y:157},0).wait(1).to({rotation:149.7987,x:156.9,y:155.9},0).wait(1).to({rotation:154.6309,x:166.55,y:154.95},0).wait(1).to({rotation:159.4631,x:176.3,y:153.9},0).wait(1).to({rotation:164.2953,x:186.05,y:153},0).wait(1).to({rotation:169.1275,x:195.9,y:152.15},0).wait(1).to({rotation:173.9597,x:205.85,y:151.25},0).wait(1).to({rotation:178.7919,x:215.7,y:150.45},0).wait(1).to({rotation:183.6242,x:225.75,y:149.7},0).wait(1).to({rotation:188.4564,x:235.75,y:148.9},0).wait(1).to({rotation:193.2886,x:245.85,y:148.2},0).wait(1).to({rotation:198.1208,x:255.95,y:147.45},0).wait(1).to({rotation:202.953,x:266.1,y:146.85},0).wait(1).to({rotation:207.7852,x:276.3,y:146.2},0).wait(1).to({rotation:212.6174,x:286.55,y:145.7},0).wait(1).to({rotation:217.4497,x:296.8,y:145.1},0).wait(1).to({rotation:222.2819,x:307.15,y:144.55},0).wait(1).to({rotation:227.1141,x:317.5,y:144.1},0).wait(1).to({rotation:231.9463,x:327.9,y:143.65},0).wait(1).to({rotation:236.7785,x:338.35,y:143.25},0).wait(1).to({rotation:241.6107,x:348.8,y:142.85},0).wait(1).to({rotation:246.443,x:359.3,y:142.5},0).wait(1).to({rotation:251.2752,x:369.85,y:142.15},0).wait(1).to({rotation:256.1074,x:380.4,y:141.85},0).wait(1).to({rotation:260.9396,x:391,y:141.6},0).wait(1).to({rotation:265.7718,x:401.55,y:141.4},0).wait(1).to({rotation:270.604,x:412.25,y:141.15},0).wait(1).to({rotation:275.4362,x:422.9,y:141},0).wait(1).to({rotation:280.2685,x:433.55,y:140.85},0).wait(1).to({rotation:285.1007,x:444.35,y:140.7},0).wait(1).to({rotation:289.9329,x:455.05},0).wait(1).to({rotation:294.7651,x:465.85,y:140.65},0).wait(1).to({rotation:299.5973,x:476.6,y:140.55},0).wait(1).to({rotation:304.4295,x:487.4},0).wait(1).to({rotation:309.2617,x:498.25,y:140.6},0).wait(1).to({rotation:314.094,x:509.1,y:140.7},0).wait(1).to({rotation:318.9262,x:520,y:140.75},0).wait(1).to({rotation:323.7584,x:530.85,y:140.95},0).wait(1).to({rotation:328.5906,x:541.8,y:141},0).wait(1).to({rotation:333.4228,x:552.7,y:141.25},0).wait(1).to({rotation:338.255,x:563.6,y:141.4},0).wait(1).to({rotation:343.0872,x:574.55,y:141.65},0).wait(1).to({rotation:347.9195,x:585.55,y:141.9},0).wait(1).to({rotation:352.7517,x:596.5,y:142.15},0).wait(1).to({rotation:357.5839,x:607.45,y:142.45},0).wait(1).to({rotation:362.4161,x:618.4,y:142.8},0).wait(1).to({rotation:367.2483,x:629.4,y:143.2},0).wait(1).to({rotation:372.0805,x:640.4,y:143.6},0).wait(1).to({rotation:376.9128,x:651.4,y:144},0).wait(1).to({rotation:381.745,x:662.45,y:144.4},0).wait(1).to({rotation:386.5772,x:673.45,y:144.85},0).wait(1).to({rotation:391.4094,x:684.45,y:145.4},0).wait(1).to({rotation:396.2416,x:695.5,y:145.9},0).wait(1).to({rotation:401.0738,x:706.45,y:146.45},0).wait(1).to({rotation:405.906,x:717.55,y:147},0).wait(1).to({rotation:410.7383,x:728.5,y:147.55},0).wait(1).to({rotation:415.5705,x:739.5,y:148.15},0).wait(1).to({rotation:420.4027,x:750.5,y:148.8},0).wait(1).to({rotation:425.2349,x:761.55,y:149.45},0).wait(1).to({rotation:430.0671,x:772.55,y:150.15},0).wait(1).to({rotation:434.8993,x:783.5,y:150.9},0).wait(1).to({rotation:439.7315,x:794.5,y:151.5},0).wait(1).to({rotation:444.5638,x:805.45,y:152.35},0).wait(1).to({rotation:449.396,x:816.4,y:153.1},0).wait(1).to({rotation:454.2282,x:827.4,y:153.85},0).wait(1).to({rotation:459.0604,x:838.3,y:154.7},0).wait(1).to({rotation:463.8926,x:849.25,y:155.55},0).wait(1).to({rotation:468.7248,x:860.15,y:156.4},0).wait(1).to({rotation:473.557,x:871,y:157.25},0).wait(1).to({rotation:478.3893,x:881.9,y:158.15},0).wait(1).to({rotation:483.2215,x:892.75,y:159.05},0).wait(1).to({rotation:488.0537,x:903.6,y:160},0).wait(1).to({rotation:492.8859,x:914.45,y:160.95},0).wait(1).to({rotation:497.7181,x:925.2,y:161.9},0).wait(1).to({rotation:502.5503,x:936.05,y:162.9},0).wait(1).to({rotation:507.3826,x:946.8,y:163.9},0).wait(1).to({rotation:512.2148,x:957.5,y:164.95},0).wait(1).to({rotation:517.047,x:968.2,y:166},0).wait(1).to({rotation:521.8792,x:978.85,y:167.05},0).wait(1).to({rotation:526.7114,x:989.6,y:168.15},0).wait(1).to({rotation:531.5436,x:1000.15,y:169.25},0).wait(1).to({rotation:536.3758,x:1010.85,y:170.35},0).wait(1).to({rotation:541.2081,x:1021.35,y:171.5},0).wait(1).to({rotation:546.0403,x:1031.9,y:172.7},0).wait(1).to({rotation:550.8725,x:1042.4,y:173.85},0).wait(1).to({rotation:555.7047,x:1052.85,y:175},0).wait(1).to({rotation:560.5369,x:1063.3,y:176.25},0).wait(1).to({rotation:565.3691,x:1073.75,y:177.5},0).wait(1).to({rotation:570.2013,x:1084.1,y:178.75},0).wait(1).to({rotation:575.0336,x:1094.5,y:180},0).wait(1).to({rotation:579.8658,x:1104.75,y:181.25},0).wait(1).to({rotation:584.698,x:1115,y:182.55},0).wait(1).to({rotation:589.5302,x:1125.25,y:183.85},0).wait(1).to({rotation:594.3624,x:1135.45,y:185.15},0).wait(1).to({rotation:599.1946,x:1145.5,y:186.5},0).wait(1).to({rotation:604.0268,x:1155.6,y:187.85},0).wait(1).to({rotation:608.8591,x:1165.65,y:189.25},0).wait(1).to({rotation:613.6913,x:1175.65,y:190.6},0).wait(1).to({rotation:618.5235,x:1185.65,y:192},0).wait(1).to({rotation:623.3557,x:1195.55,y:193.4},0).wait(1).to({rotation:628.1879,x:1205.4,y:194.85},0).wait(1).to({rotation:633.0201,x:1215.25,y:196.25},0).wait(1).to({rotation:637.8523,x:1224.95,y:197.7},0).wait(1).to({rotation:642.6846,x:1234.7,y:199.15},0).wait(1).to({rotation:647.5168,x:1244.35,y:200.65},0).wait(1).to({rotation:652.349,x:1253.95,y:202.1},0).wait(1).to({rotation:657.1812,x:1263.5,y:203.6},0).wait(1).to({rotation:662.0134,x:1273,y:205.15},0).wait(1).to({rotation:666.8456,x:1282.4,y:206.6},0).wait(1).to({rotation:671.6779,x:1291.8,y:208.2},0).wait(1).to({rotation:676.5101,x:1301.1,y:209.65},0).wait(1).to({rotation:681.3423,x:1310.4,y:211.25},0).wait(1).to({rotation:686.1745,x:1319.6,y:212.8},0).wait(1).to({rotation:691.0067,x:1328.75,y:214.35},0).wait(1).to({rotation:695.8389,x:1337.85,y:215.95},0).wait(1).to({rotation:700.6711,x:1346.85,y:217.6},0).wait(1).to({rotation:705.5034,x:1355.8,y:219.1},0).wait(1).to({rotation:710.3356,x:1364.7,y:220.8},0).wait(1).to({rotation:715.1678,x:1373.5,y:222.4},0).wait(1).to({rotation:720,x:1382.25,y:224.05},0).wait(1));

	// Слой_слойка
	this.btn_play = new lib.btn_start();
	this.btn_play.name = "btn_play";
	this.btn_play.setTransform(320.55,469.5);
	new cjs.ButtonHelper(this.btn_play, 0, 1, 2, false, new lib.btn_start(), 3);

	this.btn_pause = new lib.btn_pause();
	this.btn_pause.name = "btn_pause";
	this.btn_pause.setTransform(917.5,468.5);
	new cjs.ButtonHelper(this.btn_pause, 0, 1, 2, false, new lib.btn_pause(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_pause},{t:this.btn_play}]}).wait(150));

	// Слой_фон
	this.instance_1 = new lib.Фон();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(150));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(439,360,1032.3,363);
// library properties:
lib.properties = {
	id: '370CE0E80B728F4C97A3EC73B5008AFD',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/КГ_3_6_HTML5 Canvas_atlas_1.png?1684939505684", id:"КГ_3_6_HTML5 Canvas_atlas_1"},
		{src:"sounds/WeatherAmbienceStormSeaThunderWavesOceanWind.mp3?1684939505728", id:"WeatherAmbienceStormSeaThunderWavesOceanWind"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['370CE0E80B728F4C97A3EC73B5008AFD'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;