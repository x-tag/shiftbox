# About 

A container element that allows you to slide aside a main ```<x-content>``` element to reveal secondary content such as menus, widgets, or settings lists underneath.

# Syntax


```
<x-shiftbox>
  <x-content>
    Content
  </x-content>
  <x-subcontent>
    Settings    
  </x-subcontent>
</x-shiftbox>

```


## Usage

```
var shiftbox = document.querySelector('x-shiftbox');
// Close the drawer
shiftbox.shift = 0;

// Open it 190 pixels  
shiftbox.shift = 190;

xtag.addEvent(shiftbox, 'opened', function(){
  // box has opened, do something!
});

xtag.addEvent(shiftbox, 'closed', function(){
  // box closed, cleanup.
});

```



# Create X-Tag Components

[Guide for creating X-Tag Components](https://github.com/x-tag/core/wiki/Creating-X-Tag-Components)

# Use X-Tag Components

[Using X-Tag components in your applications](https://github.com/x-tag/core/wiki/Using-X-Tag-Components-in-your-application)

