
(function(){
	
	xtag.register('x-shiftbox', {			
		events:{
			'transitionend': function(e){
				if (e.target == xtag.queryChildren(this, 'x-content')[0]){					
					if (this.shift.length){
						xtag.fireEvent(this, 'closed');
					}
					else {
						xtag.fireEvent(this, 'opened');
					}
				}
			}
		},
		accessors: {
			'shift': {
				get: function(){					
					return this.getAttribute('shift') || '';
				},
				'set:attribute(shift)': function(shift){
				}
			}
		}
	});
	
})();