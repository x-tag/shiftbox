
(function(){
		
	var shiftMap = {
			'north': ['top'],
			'south': ['bottom'],
			'east': ['right'],
			'west': ['left'],
			'north-west': ['top', 'left'],
			'north-east': ['top', 'right'],
			'south-west': ['bottom', 'left'],
			'south-east': ['bottom', 'right']
		},
		setStyles = function(shiftbox, direction, value){
			var shift = xtag.queryChildren(shiftbox, 'x-content')[0];
			if (typeof value == 'number') value = value + 'px';
			if (shift) (shiftMap[direction] || ['left']).forEach(function(side){
				shift.style[side] = value;
			});
		};
	
	xtag.register('x-shiftbox', {
		lifecycle: {
			created: function(){
				console.log("created", this, this.direction, this.shift);
				setStyles(this, this.direction, this.shift);
			}
		},		
		events:{
			'transitionend': function(e){
				if (e.target == xtag.queryChildren(this, 'x-content')[0]){
					if (this.shift == 0){
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
					return Number(this.getAttribute('shift') || 0);
				},
				'set:attribute(shift)': function(shift){
					setStyles(this, this.direction, shift);
				}
			},
			'direction': {
				get: function(){
					var value = this.getAttribute('shift-direction');
					return shiftMap[value] ? value : 'west';
				},
				'set:attribute(direction)': function(direction){
					setStyles(this, direction, this.shift);
				}
			}
		}
	});
	
	xtag.register('x-content', {
		lifecycle: {
			upgraded: function(){				
				var parent = this.parentNode;
				if (parent && parent.tagName == 'x-content') setStyles(parent, parent.direction, parent.shift);	
			}
		}
	});
	
})();