# About

A container element that allows you to slide out a main ```<section>``` element to reveal secondary content such as menus, widgets, or settings lists contained in a ```<aside>``` element underneath.

# Syntax


```
<x-shiftbox>
  <section>
    Content
  </section>
  <aside>
    <menu>
		<li>Menu Item 1</li>
		<li>Menu Item 2</li>
		<li>Menu Item 3</li>
	</menu>
  </aside>
</x-shiftbox>

```


## Usage

```
var shiftbox = document.querySelector('x-shiftbox');

// Configure it to open it to the right
shiftbox.shift = "right";
shiftbox.toggle();  // open it

// OR

shiftbox.setAttribute('open','');

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

