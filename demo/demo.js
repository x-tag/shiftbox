function updateDemoSect(demoSect){
    var contextEl = DemoHelpers.getContextEl(demoSect);
    var markupEl = DemoHelpers.getMarkupEl(demoSect, "html");

    var htmlMarkup = DemoHelpers.cleanHtmlSource(contextEl.innerHTML, ["style"]);
    DemoHelpers.updatePrettyprintEl(markupEl, htmlMarkup);
}

document.addEventListener('DOMComponentsLoaded', function(){

    var states = [
      'right',
      'down',
      'left',
      'up',
      'downright',
      'downleft',
      'upleft',
      'upright'
    ],
    last = null;


    xtag.addEvent(document, "update-demo:delegate("+DemoHelpers.DEMO_SECT_SELECTOR+")", function(e){
        updateDemoSect(this);
    });

    xtag.addEvent(document, "click:delegate("+DemoHelpers.BUTTON_SELECTOR+".toggle)", function(e){
        var demoSect = DemoHelpers.controlButtonToDemoSect(this);
        var shiftbox = demoSect.querySelector("x-shiftbox");
        shiftbox.toggle();
        updateDemoSect(demoSect);
    });

    xtag.addEvent(document, "click:delegate("+DemoHelpers.BUTTON_SELECTOR+".direction)", function(e){
        var demoSect = DemoHelpers.controlButtonToDemoSect(this);
        var shiftbox = demoSect.querySelector("x-shiftbox");
        shiftbox.shift = states[states.indexOf(last)+1] || 'right';
        last = shiftbox.shift;
        updateDemoSect(demoSect);
    });

    DemoHelpers.initializeDemos();
});