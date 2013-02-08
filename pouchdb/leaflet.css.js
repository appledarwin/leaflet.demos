(function() {
  var LCCS, cssFiles,
    __slice = [].slice;

  cssFiles = [".leaflet-image-layer,.leaflet-layer,.leaflet-map-pane,.leaflet-marker-icon,.leaflet-marker-pane,.leaflet-marker-shadow,.leaflet-overlay-pane,.leaflet-overlay-pane svg,.leaflet-popup-pane,.leaflet-shadow-pane,.leaflet-tile,.leaflet-tile-pane,.leaflet-zoom-box{left:0;position:absolute;top:0}.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-tile{-webkit-user-select:none;-moz-user-select:none;user-select:none}.leaflet-container img{max-width:none!important}.leaflet-container img.leaflet-image-layer{max-width:15000px!important}.leaflet-tile{filter:inherit;visibility:hidden}.leaflet-tile-loaded{visibility:inherit}.leaflet-tile-pane{z-index:2}.leaflet-objects-pane{z-index:3}.leaflet-overlay-pane{z-index:4}.leaflet-shadow-pane{z-index:5}.leaflet-marker-pane{z-index:6}.leaflet-popup-pane{z-index:7}.leaflet-bottom,.leaflet-top{pointer-events:none;position:absolute;z-index:1000}.leaflet-top{top:0}.leaflet-right{right:0}.leaflet-bottom{bottom:0}.leaflet-left{left:0}.leaflet-control{clear:both;float:left;pointer-events:auto;position:relative;z-index:7}.leaflet-top .leaflet-control{margin-top:10px}.leaflet-bottom .leaflet-control{margin-bottom:10px}.leaflet-left .leaflet-control{margin-left:10px}.leaflet-right .leaflet-control{float:right;margin-right:10px}.leaflet-fade-anim .leaflet-popup,.leaflet-fade-anim .leaflet-tile{opacity:0;-webkit-transition:opacity 0.2s linear;-moz-transition:opacity 0.2s linear;-o-transition:opacity 0.2s linear;transition:opacity 0.2s linear}.leaflet-fade-anim .leaflet-map-pane .leaflet-popup,.leaflet-fade-anim .leaflet-tile-loaded{opacity:1}.leaflet-zoom-anim .leaflet-zoom-animated{-webkit-transition:-webkit-transform 0.25s cubic-bezier(0,0,0.25,1);-moz-transition:-moz-transform 0.25s cubic-bezier(0,0,0.25,1);-o-transition:-o-transform 0.25s cubic-bezier(0,0,0.25,1);transition:transform 0.25s cubic-bezier(0,0,0.25,1)}.leaflet-pan-anim .leaflet-tile,.leaflet-touching .leaflet-zoom-animated,.leaflet-zoom-anim .leaflet-tile{-webkit-transition:none;-moz-transition:none;-o-transition:none;transition:none}.leaflet-zoom-anim .leaflet-zoom-hide{visibility:hidden}.leaflet-clickable{cursor:pointer}.leaflet-control,.leaflet-popup-pane{cursor:auto}.leaflet-dragging,.leaflet-dragging .leaflet-clickable,.leaflet-dragging .leaflet-container{cursor:move;cursor:-webkit-grabbing;cursor:-moz-grabbing}.leaflet-container a{color:#0078a8}.leaflet-container a.leaflet-active{outline:2px solid orange}.leaflet-zoom-box{background:white;border:2px dotted #05f;height:0;opacity:0.5;width:0}.leaflet-container{background:#ddd;cursor:-webkit-grab;cursor:-moz-grab;font:12px/1.5 \"Helvetica Neue\" , Arial, Helvetica, sans-serif;outline:0;overflow:hidden;-ms-touch-action:none}.leaflet-bar{border:1px solid #888;-webkit-border-radius:5px;border-radius:5px;box-shadow:0 0 8px rgba(0,0,0,0.4)}.leaflet-bar-part{background-color:rgba(255,255,255,0.8);border-bottom:1px solid #aaa}.leaflet-bar-part-top{-webkit-border-radius:4px 4px 0 0;border-radius:4px 4px 0 0}.leaflet-bar-part-bottom{border-bottom:0;-webkit-border-radius:0 0 4px 4px;border-radius:0 0 4px 4px}.leaflet-touch .leaflet-bar{-webkit-border-radius:10px;border-radius:10px}.leaflet-touch .leaflet-bar-part{border-bottom:4px solid rgba(0,0,0,0.3)}.leaflet-touch .leaflet-bar-part-top{-webkit-border-radius:7px 7px 0 0;border-radius:7px 7px 0 0}.leaflet-touch .leaflet-bar-part-bottom{border-bottom:0;-webkit-border-radius:0 0 7px 7px;border-radius:0 0 7px 7px}.leaflet-container .leaflet-control-zoom{margin-left:13px;margin-top:12px}.leaflet-control-zoom a{color:black;height:22px;text-align:center;text-decoration:none;width:22px}.leaflet-control-layers-toggle,.leaflet-control-zoom a{background-position:50% 50%;background-repeat:no-repeat;display:block}.leaflet-control-zoom a:hover{background-color:#fff;color:#777}.leaflet-control-zoom-in{font:bold 18px/24px Arial,Helvetica,sans-serif}.leaflet-control-zoom-out{font:bold 23px/20px Tahoma,Verdana,sans-serif}.leaflet-control-zoom a.leaflet-control-zoom-disabled{background-color:rgba(255,255,255,0.8);color:#bbb;cursor:default}.leaflet-touch .leaflet-control-zoom a{height:30px;width:30px}.leaflet-touch .leaflet-control-zoom-in{font-size:24px;line-height:29px}.leaflet-touch .leaflet-control-zoom-out{font-size:28px;line-height:24px}.leaflet-control-layers{background:#f8f8f9;-webkit-border-radius:8px;border-radius:8px;box-shadow:0 1px 7px rgba(0,0,0,0.4)}.leaflet-control-layers-toggle{background-image:url(images/layers.png);height:36px;width:36px}.leaflet-touch .leaflet-control-layers-toggle{height:44px;width:44px}.leaflet-control-layers .leaflet-control-layers-list,.leaflet-control-layers-expanded .leaflet-control-layers-toggle{display:none}.leaflet-control-layers-expanded .leaflet-control-layers-list{display:block;position:relative}.leaflet-control-layers-expanded{background:#fff;color:#333;padding:6px 10px 6px 6px}.leaflet-control-layers-selector{margin-top:2px;position:relative;top:1px}.leaflet-control-layers label,.leaflet-marker-icon,.leaflet-marker-shadow{display:block}.leaflet-control-layers-separator{border-top:1px solid #ddd;height:0;margin:5px -10px 5px -6px}.leaflet-container .leaflet-control-attribution{background-color:rgba(255,255,255,0.7);box-shadow:0 0 5px #bbb;margin:0}.leaflet-control-attribution,.leaflet-control-scale-line{color:#333;padding:0 5px}.leaflet-container .leaflet-control-attribution,.leaflet-container .leaflet-control-scale{font-size:11px}.leaflet-left .leaflet-control-scale{margin-left:5px}.leaflet-bottom .leaflet-control-scale{margin-bottom:5px}.leaflet-control-scale-line{background-color:rgba(255,255,255,0.5);border:2px solid #777;border-top:0;box-shadow:0 -1px 5px rgba(0,0,0,0.2);color:black;font-size:11px;line-height:1.1;overflow:hidden;padding:2px 5px 1px;text-shadow:1px 1px 1px #fff;white-space:nowrap}.leaflet-control-scale-line:not(:first-child){border-bottom:0;border-top:2px solid #777;box-shadow:0 2px 5px rgba(0,0,0,0.2);margin-top:-2px}.leaflet-control-scale-line:not(:first-child):not(:last-child){border-bottom:2px solid #777}.leaflet-touch .leaflet-control-attribution,.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-control-zoom{box-shadow:none}.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-control-zoom{border:4px solid rgba(0,0,0,0.3)}.leaflet-popup{position:absolute;text-align:center}.leaflet-popup-content-wrapper{-webkit-border-radius:20px;border-radius:20px;padding:1px;text-align:left}.leaflet-popup-content{line-height:1.4;margin:14px 20px}.leaflet-popup-content p{margin:18px 0}.leaflet-popup-tip-container{height:20px;margin:0 auto;overflow:hidden;position:relative;width:40px}.leaflet-popup-tip{height:15px;margin:-8px auto 0;padding:1px;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg);width:15px}.leaflet-popup-content-wrapper,.leaflet-popup-tip{background:white;box-shadow:0 3px 14px rgba(0,0,0,0.4)}.leaflet-container a.leaflet-popup-close-button{background:transparent;color:#c3c3c3;font:16px/14px Tahoma,Verdana,sans-serif;font-weight:bold;height:14px;padding:4px 5px 0 0;position:absolute;right:0;text-align:center;text-decoration:none;top:0;width:18px}.leaflet-container a.leaflet-popup-close-button:hover{color:#999}.leaflet-popup-scrolled{border-bottom:1px solid #ddd;border-top:1px solid #ddd;overflow:auto}.leaflet-div-icon{background:#fff;border:1px solid #666}.leaflet-editing-icon{-webkit-border-radius:2px;border-radius:2px}", ".leaflet-vml-shape{height:1px;width:1px}.lvml{behavior:url(#default#VML);display:inline-block;position:absolute}.leaflet-control{display:inline}.leaflet-popup-tip{filter:progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678,M12=0.70710678,M21=-0.70710678,M22=0.70710678);-ms-filter:\"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)\";margin:0 auto;_margin-top:-3px;width:21px;_width:27px}.leaflet-popup-tip-container{margin-top:-1px}.leaflet-popup-content-wrapper,.leaflet-popup-tip{border:1px solid #999}.leaflet-popup-content-wrapper{zoom:1}.leaflet-control-layers,.leaflet-control-zoom{border:3px solid #999}.leaflet-control-zoom a{background-color:#eee}.leaflet-control-zoom a:hover{background-color:#fff}.leaflet-control-attribution,.leaflet-control-layers,.leaflet-control-scale-line{background:white}.leaflet-zoom-box{filter:alpha(opacity=50)}.leaflet-control-attribution{border-left:1px solid #bbb;border-top:1px solid #bbb}"];

  LCCS = (function() {

    function LCCS(css) {
      var imagePath;
      imagePath = L.Icon.Default.imagePath;
      css[0] = css[0].replace("url(images", "url(" + imagePath);
      this.addStyle(css);
    }

    LCCS.prototype.addStyle = function(styles) {
      var head, styleElt, styleSheet;
      if (document.createStyleSheet) {
        styleSheet = document.createStyleSheet();
        styleSheet.cssText = styles.join("\n");
      } else {
        head = document.getElementsByTagName("head")[0];
        styleElt = document.createElement("style");
        head.appendChild(styleElt);
        styleElt.innerHTML = styles[0];
      }
      return true;
    };

    return LCCS;

  })();

  L.CSS = LCCS;

  L.css = function() {
    var params;
    params = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return (function(func, args, ctor) {
      ctor.prototype = func.prototype;
      var child = new ctor, result = func.apply(child, args);
      return Object(result) === result ? result : child;
    })(L.CSS, params, function(){});
  };

  L.css(cssFiles);

}).call(this);