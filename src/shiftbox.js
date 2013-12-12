
(function(){

  function toggleOverlay(box, fn){
    var section = xtag.query(box, 'section')[0];
    if (section && box.tapclose){
      section[fn](box.xtag.tapoverlay);
    }
  }

	xtag.register('x-shiftbox', {
		lifecycle: {
			created: function(){
				// flag to prevent opened and closed event from firing multiple times
				// when transitionend is fired for each animated property
				this.xtag.opened = this.hasAttribute('open');
        this.xtag.tapoverlay = document.createElement('div');
        this.xtag.tapoverlay.className = 'x-shiftbox-tapclose-overlay';

			}
		},
		events:{
			'transitionend:delegate(x-shiftbox > section)': function(e){
        var box = e.currentTarget;
        if (box.hasAttribute('open') && !box.xtag.opened){
          box.xtag.opened = true;
          box.removeAttribute('transitioning');
          xtag.fireEvent(box, 'opened');
        }
        else if(!box.hasAttribute('open') && box.xtag.opened) {
          box.xtag.opened = false;
          box.removeAttribute('transitioning');
          toggleOverlay(box, 'removeChild');
          xtag.fireEvent(box, 'closed');
        }
			},
      'tap:delegate(x-shiftbox[open][tapclose] > section)': function(e){
        e.currentTarget.open = false;
      }
		},
		accessors: {
			'shift': {
				attribute: {},
				get: function(){
					return this.getAttribute('shift') || 'right';
				}
			},
			'open': {
				attribute: { boolean: true },
        set: function(value){
          if (value){
            toggleOverlay(this, 'appendChild');
          }
          if (value != this.xtag.opened){
            this.setAttribute('transitioning','');
          }
        }
			},
      'tapclose': {
        attribute: { boolean: true }
      }
		},
		methods: {
			'toggle': function(){
				this.open = !this.hasAttribute('open');
			}
		}
	});

})();