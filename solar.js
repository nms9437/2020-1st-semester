(function () {
	var webglEl = document.getElementById('webgl');
	if (!Detector.webgl) {
		Detector.addGetWebGLMessage(webglEl);
		return;
	}
	var width  = window.innerWidth,
	     height = window.innerHeight;
	var radius   = 5,
	     segments = 32,
	     starting = 20;
	     rotation = 6;  
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(45, width / height, 0.01, 1000);
	camera.useQuaternion = true;
	camera.position.x = 30;
	camera.position.z = 50;
	camera.position.y = 40;
	var renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
	renderer.setSize(width, height);
	scene.add(new THREE.AmbientLight(0x333333));
	var light = new THREE.DirectionalLight(0xffffff, 1);
	light.position.set(5,3,5);
	scene.add(light);
 	var sphere = createmercury(radius/5, segments);
	sphere.rotation.y = rotation;
	sphere.position.x=starting+10; 
	var clouds = createClouds(radius/5, segments);
	clouds.rotation.y = rotation;
	clouds.position.x=starting+10;
	var tgeometry = new THREE.TorusGeometry(starting+10, 0.01,5,100);
	var tmaterial = new THREE.MeshBasicMaterial( { color: 0xffffff } );
	var orbit = new THREE.Mesh( tgeometry, tmaterial );
	orbit.rotation.x=0.5*Math.PI;
	orbit.position.x=0;
	orbit.add(sphere);
	orbit.add(clouds);
	scene.add( orbit );
	var venus = createvenus(radius/4, segments);
	venus.rotation.y = rotation;
	venus.position.x=starting+15; 
 	var clouds_venus = createClouds(radius/5, segments);
 	clouds_venus.rotation.y = rotation;
	clouds_venus.position.x=starting+15;
    	var tgeometry_venus = new THREE.TorusGeometry(starting+15, 0.01,5,100);
    	var orbit_venus = new THREE.Mesh(tgeometry_venus, tmaterial );
    	orbit_venus.rotation.x=0.5*Math.PI;
    	orbit_venus.position.x=0;
    	orbit_venus.add(clouds_venus);
    	orbit_venus.add(venus)
    	scene.add(orbit_venus);
    
    	var earth = createEarth(radius/3.5, segments);
	earth.rotation.x =-0.5*Math.PI;
    	earth.position.x=starting+20; 
    	var clouds_earth = createClouds(radius/3.5, segments);
    	clouds_earth.rotation.y = rotation;
    	clouds_earth.position.x=starting+20;
    	var tgeometry_earth = new THREE.TorusGeometry(starting+20, 0.01,5,100);
    	var orbit_earth = new THREE.Mesh(tgeometry_earth, tmaterial );
    	orbit_earth.rotation.x=0.5*Math.PI;
    	orbit_earth.position.x=0;
    	orbit_earth.add(clouds_earth);
    	orbit_earth.add(earth)
    	scene.add(orbit_earth);
    	var mars = createmars(radius/3.2, segments);
	mars.position.x=starting+25; 
	mars.rotation.x =-0.5*Math.PI;
	var tgeometry_mars = new THREE.TorusGeometry(starting+25, 0.01,5,100);
	var orbit_mars = new THREE.Mesh(tgeometry_mars, tmaterial );
    	orbit_mars.position.x=0;
    	orbit_mars.rotation.x=0.5*Math.PI;
    	orbit_mars.add(mars)
    	scene.add(orbit_mars);
  
    	var jupiter = createjupiter(radius, segments);
	jupiter.rotation.x =-0.5*Math.PI;
    	jupiter.position.x=starting+35; 
	var clouds_jupiter = createClouds(radius, segments);
	clouds_jupiter.rotation.y = rotation;
	clouds_jupiter.position.x=starting+35;
	var tgeometry_jupiter = new THREE.TorusGeometry(starting+35, 0.01,5,100);
	var orbit_jupiter = new THREE.Mesh(tgeometry_jupiter, tmaterial );
    	orbit_jupiter.rotation.x=0.5*Math.PI;
    	orbit_jupiter.position.x=0;
    	orbit_jupiter.add(clouds_jupiter);
    	orbit_jupiter.add(jupiter)
    	scene.add(orbit_jupiter);
    	var ring_material = new THREE.MeshBasicMaterial({map:THREE.ImageUtils.loadTexture('images/saturn_ring.jpg')}); 
    	var circleGeometry = new THREE.CircleGeometry( radius, 32 );  
    	var circleGeometry2 = new THREE.CircleGeometry( radius, 32 );  
    	var circle = new THREE.Mesh(circleGeometry,ring_material ); 
    	var circle2 = new THREE.Mesh(circleGeometry2,ring_material ); 
    	circle2.rotation.x=-Math.PI;
    	circle.rotation.z=Math.PI;
    	circle.rotation.x=-Math.PI/2;
    	circle2.rotation.x=Math.PI/2;
    	var saturn = createsaturn(radius/1.7, segments);
    	saturn.position.x=starting+45; 
    	saturn.rotation.x =-0.5*Math.PI;
    	saturn.add(circle);
    	saturn.add(circle2);
	var tgeometry_saturn = new THREE.TorusGeometry(starting+45, 0.01,5,100);
	var orbit_saturn = new THREE.Mesh(tgeometry_saturn, tmaterial );
    	orbit_saturn.position.x=0;
    	orbit_saturn.rotation.x=0.5*Math.PI;
    	saturn.rotation.x=-Math.PI/3;
    	orbit_saturn.add(saturn)
    	scene.add(orbit_saturn);
    	var U_ring_material = new THREE.MeshBasicMaterial({map:THREE.ImageUtils.loadTexture('images/uranus_ring.png')}); 
    	var U_circleGeometry = new THREE.CircleGeometry( radius, 32 );  
    	var U_circleGeometry2 = new THREE.CircleGeometry( radius, 32 );  
    	var U_circle = new THREE.Mesh(U_circleGeometry,U_ring_material ); 
    	var U_circle2 = new THREE.Mesh(U_circleGeometry2,U_ring_material ); 
    	U_circle2.rotation.x=-Math.PI;
    	U_circle.rotation.z=Math.PI;
    	U_circle.rotation.x=-Math.PI/2;
    	U_circle2.rotation.x=Math.PI/2;
	    	var uranus = createuranus(radius/1.7, segments);
    	uranus.position.x=starting+55; 
    	uranus.rotation.x =-0.5*Math.PI;
    	uranus.add(U_circle);
    	uranus.add(U_circle2);
	var tgeometry_uranus = new THREE.TorusGeometry(starting+55, 0.01,5,100);
	var orbit_uranus = new THREE.Mesh(tgeometry_uranus, tmaterial );
    	orbit_uranus.position.x=0;
    	orbit_uranus.rotation.x=0.5*Math.PI;
    	uranus.rotation.x=-Math.PI/6;
    	orbit_uranus.add(uranus)
    	scene.add(orbit_uranus);
	    	var neptune = createneptune(radius/3.2, segments);
    	neptune.position.x=starting+65; 
    	neptune.rotation.x =-0.5*Math.PI;
	var tgeometry_neptune = new THREE.TorusGeometry(starting+65, 0.01,5,100);
	var orbit_neptune = new THREE.Mesh(tgeometry_neptune, tmaterial );
    	orbit_neptune.position.x=0;
    	orbit_neptune.rotation.x=0.5*Math.PI;
    	orbit_neptune.add(neptune)
    	scene.add(orbit_neptune);
    	var textureFlare0 = THREE.ImageUtils.loadTexture("images/lensflare1.png");
    	var textureFlare3 = THREE.ImageUtils.loadTexture("images/lensflare2.png");
    	var flareColor = new THREE.Color(0xffaacc);
    	var lensFlare = new THREE.LensFlare(textureFlare0, 800, 0.0, THREE.AdditiveBlending, flareColor);
    	lensFlare.add(textureFlare3, 60, 0.6, THREE.AdditiveBlending);
    	lensFlare.add(textureFlare3, 70, 0.7, THREE.AdditiveBlending);
    	lensFlare.add(textureFlare3, 120, 0.9, THREE.AdditiveBlending);
    	lensFlare.add(textureFlare3, 70, 1.0, THREE.AdditiveBlending);
    	lensFlare.position.x=0;
    	lensFlare.position.y=0;
    	lensFlare.position.z=0;
    	scene.add(lensFlare);
	var stars = createStars(300, 64);
	scene.add(stars);
	var controls = new THREE.TrackballControls(camera);
	webglEl.appendChild(renderer.domElement);
	render(); 
	function render() {
		var speed=0.001;
		controls.update();
		sphere.rotation.z += 0.01;
		orbit.rotation.z+=speed;
		clouds.rotation.z += 0.01;
		orbit_venus.rotation.z+=speed/1.3;
		venus.rotation.z+=0.01;
		clouds_venus.rotation.z+=0.01;
		orbit_earth.rotation.z+=speed/1.7;
		earth.rotation.y-=0.01;
		clouds_earth.rotation.z+=0.01;
        		mars.rotation.y-=0.01;
        		orbit_mars.rotation.z+=speed/2;
        		orbit_jupiter.rotation.z+=speed/2.3;
		jupiter.rotation.y-=0.005;
		clouds_jupiter.rotation.z+=0.005;
        
        		saturn.rotation.y+=0.005;  
        		orbit_saturn.rotation.z+=speed/2.7; 
        		uranus.rotation.y+=0.0050;  
        		orbit_uranus.rotation.z+=speed/3; 
        
        		neptune.rotation.y-=0.01;
        		orbit_neptune.rotation.z+=speed/3.5;
		requestAnimationFrame(render);
		renderer.render(scene, camera);
	}
	function createEarth(radius, segments) {
		return new THREE.Mesh(
			new THREE.SphereGeometry(radius, segments, segments),
			new THREE.MeshPhongMaterial({
				map:         THREE.ImageUtils.loadTexture('images/earth.jpg')
			})
		);
	}
	function createmercury(radius, segments) {
		return new THREE.Mesh(
			new THREE.SphereGeometry(radius, segments, segments),
			new THREE.MeshPhongMaterial({
				map:         THREE.ImageUtils.loadTexture('images/mercury.jpg'),
			})
		);
	}
    	function createvenus(radius, segments) {
		return new THREE.Mesh(
			new THREE.SphereGeometry(radius, segments, segments),
			new THREE.MeshPhongMaterial({
				map:         THREE.ImageUtils.loadTexture('images/venus.jpg'),
			})
		);
	}
	function createjupiter(radius, segments) {
		return new THREE.Mesh(
			new THREE.SphereGeometry(radius, segments, segments),
			new THREE.MeshPhongMaterial({
				map:         THREE.ImageUtils.loadTexture('images/jupiter.jpg'),
			})
		);
	}
	function createmars(radius, segments) {
		return new THREE.Mesh(
			new THREE.SphereGeometry(radius, segments, segments),
			new THREE.MeshPhongMaterial({
				map:         THREE.ImageUtils.loadTexture('images/mars.jpg'),
			})
		);
	}
	function createsaturn(radius, segments) {
		return new THREE.Mesh(
			new THREE.SphereGeometry(radius, segments, segments),
			new THREE.MeshPhongMaterial({
				map:         THREE.ImageUtils.loadTexture('images/saturn.jpg'),
			})
		);
	}
	function createuranus(radius, segments) {
		return new THREE.Mesh(
			new THREE.SphereGeometry(radius, segments, segments),
			new THREE.MeshPhongMaterial({
				map:         THREE.ImageUtils.loadTexture('images/uranus.jpg'),				
				specular:    new THREE.Color('grey')
			})
		);
	}
    	function createneptune(radius, segments) {
		return new THREE.Mesh(
			new THREE.SphereGeometry(radius, segments, segments),
			new THREE.MeshPhongMaterial({
				map:         THREE.ImageUtils.loadTexture('images/neptune.jpg'),
				specularMap: THREE.ImageUtils.loadTexture('images/glow.jpg'),
				specular:    new THREE.Color('grey')
			})
		);
	}
	function createClouds(radius, segments) {
		return new THREE.Mesh(
			new THREE.SphereGeometry(radius + 0.005, segments, segments),			
			new THREE.MeshPhongMaterial({
				map:         THREE.ImageUtils.loadTexture('images/cloud.png'),
				transparent: true
			})
		);		
	}
	function createStars(radius, segments) {
		return new THREE.Mesh(
			new THREE.SphereGeometry(radius, segments, segments), 
			new THREE.MeshBasicMaterial({
				map:  THREE.ImageUtils.loadTexture('images/galaxy.png'), 
				side: THREE.BackSide
			})
		);
	}
}());