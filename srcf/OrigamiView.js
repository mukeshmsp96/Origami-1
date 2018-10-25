/** 
 * this extends FoldView to add interaction
 */

"use strict";

import SVG from "./SimpleSVG";
import FoldView from "./FoldView";

export default function OrigamiView(){

	let { cp, svg, groups, frame, zoom, padding, style, setPadding,
		draw, setViewBox, getFrames, getFrame, setFrame, showVertices,
		hideVertices, showEdges, hideEdges, showFaces, hideFaces
	 } = FoldView(...arguments);

	// implement these, they will get called when the event fires
	this.event = {
		animate: function(){},
		onResize: function(){},
		onMouseMove: function(){},
		onMouseDown: function(){},
		onMouseUp: function(){},
		onMouseDidBeginDrag: function(){},
	}

	// expose these functions to the user
	let paint = {
		line: SVG.line,
		circle: SVG.circle,
		polygon: SVG.polygon,
		bezier: SVG.bezier,
		group: SVG.group
	}
	let removeChildren = SVG.removeChildren;
	let convertToViewbox = SVG.convertToViewbox;

	// interaction behavior
	let mouse = {
		position: {"x":0,"y":0},// the current position of the mouse
		pressed: {"x":0,"y":0}, // the last location the mouse was pressed
		isPressed: false,       // is the mouse button pressed (y/n)
	};
	var frameNum = 0;

	// update FoldView member variables to
	style.sector = {scale: 0.5};  // radius of sector wedges
	style.face = {scale:1.0};     // shrink scale of each face
	style.selected = {
		node:{ radius: 0.02 },
		edge:{ strokeColor:{ hue:0, saturation:0.8, brightness:1 } },
		face:{ fillColor:{ hue:0, saturation:0.8, brightness:1 } }
	};

	var that = this;
	svg.onmousedown = function(event){
		mouse.isPressed = true;
		mouse.pressed = convertToViewbox(svg, event.clientX, event.clientY);
		// attemptSelection();
		that.event.onMouseDown(mouse);
	};
	svg.onmouseup = function(event){
		mouse.isPressed = false;
		selectedTouchPoint = undefined;
		that.event.onMouseUp(mouse);
	};
	svg.onmousemove = function(event){
		mouse.position = convertToViewbox(svg, event.clientX, event.clientY);
		if(mouse.isPressed){
			that.event.onMouseDidBeginDrag(mouse);
		}
		// updateSelection();
		that.event.onMouseMove(mouse);
	};
	svg.onResize = function(event){
		that.event.onResize(event);
	};

	// javascript get Date()
	// todo: watch for the variable getting set
	animateTimer = setInterval(function(){
		if(typeof that.event.animate === "function"){
			that.event.animate({"time":svg.getCurrentTime(), "frame":frameNum});
		}
		frameNum += 1;
	}, 1000/60);

	// return Object.freeze({
	return { cp, svg, groups, frame, zoom, padding, style, setPadding,
		draw, setViewBox, getFrames, getFrame, setFrame, showVertices,
		hideVertices, showEdges, hideEdges, showFaces, hideFaces,
		event:this.event,
		mouse,
		paint
	};

}
