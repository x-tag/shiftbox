
(function(){

	xtag.register('x-shiftbox', {
		lifecycle: {
			created: function(){
				// flag to prevent opened and closed event from firing multiple times
				// when transitionend is fired for each animated property
				this.xtag.opened = this.hasAttribute('open');
			}
		},
		events:{
			'transitionend:delegate(x-shiftbox > section)': function(e){
        var box = e.currentTarget;
        if (box.hasAttribute('open') && !box.xtag.opened){
          box.xtag.opened = true;
          xtag.fireEvent(box, 'opened');
        }
        else if(!box.hasAttribute('open') && box.xtag.opened) {
          box.xtag.opened = false;
          e.currentTarget.removeAttribute('data-opened');
          xtag.fireEvent(box, 'closed');
        }
			},
      'tap:delegate(x-shiftbox[open] > section)': function(e){
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
          if(value){
            this.setAttribute('data-opened','');
          }
        }
			}
		},
		methods: {
			'toggle': function(){
				this.open = !this.hasAttribute('open');
			}
		}
	});

})();