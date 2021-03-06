// Component for injecting some A-Frame entities in a scene

/* global AFRAME */
if (typeof AFRAME === 'undefined') {
    throw new Error('Component attempted to register before AFRAME was available.');
}

AFRAME.registerComponent('globe', {

    init: function() {
        this.el.setAttribute('animation', {'property': 'position',
                                       'to': {x: -1, y: 200, z: -3},
                                       'dur': 100000});    
        
    }
});
    
AFRAME.registerComponent('break', {

    init: function() {
        scene = document.querySelector('a-scene');
        let el = this.el;
        el.addEventListener('click', function() {
          scene.removeChild(el)
             
    });   
        
    }
});

AFRAME.registerComponent('basic-scene', {

    init: function() {
        // Box
        // <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
        let box = document.createElement('a-box');
        box.setAttribute('color', 'red');
        box.setAttribute('position', {x: -1, y: 0.5, z: -3});
        box.setAttribute('rotation', {x: 0, y: 45, z: 0});
        box.setAttribute('color', "#4CC3D9");
        this.el.appendChild(box); 
        box.addEventListener('click', function() {
             let sphere = document.createElement('a-sphere');
             sphere.setAttribute('position', {x: -1, y: 1.75, z: -3});
             sphere.setAttribute('radius', 0.75);
             sphere.setAttribute('color', "red");
             sphere.setAttribute('globe', null);
             sphere.setAttribute('break', null);
             let scene = document.querySelector('a-scene');
             scene.appendChild(sphere);
          
    });
    
        // Sphere
        // <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
        let sphere = document.createElement('a-sphere');
        sphere.setAttribute('position', {x:0, y: 1.25, z: -5});
        sphere.setAttribute('radius', 1.25);
        sphere.setAttribute('color', "black");
        this.el.appendChild(sphere);
        sphere.addEventListener('click', function() {
            color = sphere.getAttribute('color');
            if (color == '#EF2D5E') {
                sphere.setAttribute('color', 'red');
            } else {
                sphere.setAttribute('color', '#EF2D5E');
            };
            position = sphere.getAttribute('position');
            sphere.setAttribute('position', {x:position.x, y: position.y, z: position.z-1});
    });
        
        // Cylinder
        // <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
        let cylinder = document.createElement('a-cylinder');
        cylinder.setAttribute('position', {x: 1, y: 0.75, z: -3});
        cylinder.setAttribute('radius', 0.5);
        cylinder.setAttribute('height', 1.5);       
        cylinder.setAttribute('color', "#FFC65D");
        this.el.appendChild(cylinder);

        // Plane
        // <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
        let plane = document.createElement('a-plane');
        plane.setAttribute('position', {x: 0, y: 0, z: -4});
        plane.setAttribute('rotation', {x: -90, y: 0, z: 0});
        plane.setAttribute('width', 4); 
        plane.setAttribute('height', 4);       
        plane.setAttribute('color', "#7BC8A4");
        this.el.appendChild(plane);
        plane.addEventListener('click', function() {
            width = plane.getAttribute('width');
            plane.setAttribute('width', width * 2);
            height = plane.getAttribute('width');
            plane.setAttribute('height', height * 2);
    });

    }
});
