# CheatShet
Git Commands
1.	git clone https://github.com/YourUsername/git_test - Create a clone of repository
2.	git remote -v   - display the url of the repository
3.	git status - will show files in red, this means file is un-staged
4.	git add README.md - This adds your README.md file to staging area in git
5.	git add .  - the full stop means add all un-staged files
6.	git commit -m "Add README.md" - will commit your changes
7.	git log - historical commit
8.	git push origin master - Pushing your finished work to github
HTML Element Reference
URL - https://developer.mozilla.org/en-US/docs/Web/HTML/Element
Element	Description
<html>
The HTML <html> element represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element.
Document metadata
Metadata contains information about the page. This includes information about styles, scripts and data to help software (search engines, browsers, etc.) use and render the page. Metadata for styles and scripts may be defined in the page or link to another file that has the information. 
Element	Description
<link>
The HTML <link> element specifies relationships between the current document and an external resource. Possible uses for this element include defining a relational framework for navigation. This element is most used to link to style sheets.

<meta>
The HTML <meta> element represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> or <title>.

<style>
The HTML <style> element contains style information for a document, or part of a document.
<title>
The HTML Title element (<title>) defines the title of the document, shown in a browser's title bar or on the page's tab.
Sectioning root
Element	Description
<body>
The HTML <body> Element represents the content of an HTML document. There can be only one <body> element in a document.
Content sectioning
Content sectioning elements allow you to organize the document content into logical pieces. Use the sectioning elements to create a broad outline for your page content, including header and footer navigation, and heading elements to identify sections of content.   
Element	Description
<address>
The HTML <address> element indicates that the enclosed HTML provides contact information for a person or people, or for an organization.
<article>
The HTML <article> element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication). Examples include: a forum post, a magazine or newspaper article, or a blog entry.
<aside>
The HTML <aside> element represents a portion of a document whose content is only indirectly related to the document's main content.
<footer>
The HTML <footer> element represents a footer for its nearest sectioning content or sectioning root element. A footer typically contains information about the author of the section, copyright data or links to related documents.
<header>
The HTML <header> element represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also other elements like a logo, a search form, an author name, and so on.
<h1>, <h2>, <h3>, <h4>, <h5>, <h6>
The HTML <h1>–<h6> elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest.
<hgroup>
The HTML <hgroup> element represents a multi-level heading for a section of a document. It groups a set of <h1>–<h6> elements.

<nav>
The HTML <nav> element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes.
<section>
The HTML <section> element represents a standalone section — which doesn't have a more specific semantic element to represent it — contained within an HTML document.
Text content
Use HTML text content elements to organize blocks or sections of content placed between the opening <body> and closing </body> tags. Important for accessibility and SEO, these elements identify the purpose or structure of that content.     
Element	Description
<blockquote>
The HTML <blockquote> Element (or HTML Block Quotation Element) indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see Notes for how to change it). A URL for the source of the quotation may be given using the cite attribute, while a text representation of the source can be given using the <cite> element.

<dd>
The HTML <dd> element provides the details about or the definition of the preceding term (<dt>) in a description list (<dl>).

<dir>
The obsolete HTML Directory element (<dir>) is used as a container for a directory of files and/or folders, potentially with styles and icons applied by the user agent.

<div>
The HTML Content Division element (<div>) is the generic container for flow content. It has no effect on the content or layout until styled using CSS.
<dl>
The HTML <dl> element represents a description list. The element encloses a list of groups of terms (specified using the <dt> element) and descriptions. (provided by <dd> elements). Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs).
<dt>
The HTML <dt> element specifies a term in a description or definition list, and as such must be used inside a <dl> element.

<figcaption>
The HTML <figcaption> element represents a caption or a legend associated with a figure or an illustration described by the rest of the data of the <figure> element which is its immediate ancestor.
<figure>
The HTML <figure> element represents self-contained content, frequently with a caption (<figcaption>), and is typically referenced as a single unit.

<hr>
The HTML <hr> element represents a thematic break between paragraph-level elements (for example, a change of scene in a story, or a shift of topic with a section); historically, this has been presented as a horizontal rule or line.
<li>
The HTML <li> element is used to represent an item in a list. It must be contained in a parent element: an ordered list (<ol>), an unordered list (<ul>), or a menu (<menu>). In menus and unordered lists, list items are usually displayed using bullet points. In ordered lists, they are usually displayed with an ascending counter on the left, such as a number or letter.
<main>
The HTML <main> element represents the main content of the <body> of a document, portion of a document, or application. The main content area consists of content that is directly related to, or expands upon the central topic of, a document or the central functionality of an application.
<ol>
The HTML <ol> element represents an ordered list of items, typically rendered as a numbered list.
<p>
The HTML <p> element represents a paragraph of text.
<pre>
The HTML <pre> element represents preformatted text which is to be presented exactly as written in the HTML file.
<ul>
The HTML <ul> element represents an unordered list of items, typically rendered as a bulleted list.
Inline text semantics
Use the HTML inline text semantic to define the meaning, structure, or style of a word, line, or any arbitrary piece of text.
Element	Description
<a>
The HTML <a> element (or anchor element) creates a hyperlink to other web pages, files, locations within the same page, email addresses, or any other URL.
<abbr>
The HTML <abbr> element represents an abbreviation and optionally provides a full description for it. If present, the title attribute must contain this full description and nothing else.
<b>
The HTML Bring Attention To element (<b>)  is used to draw the reader's attention to the element's contents, which are not otherwise granted special importance.
<bdi>
The HTML <bdi> element (bidirectional isolation) isolates a span of text that might be formatted in a different direction from other text outside it.
<bdo>
The HTML Bidirectional Text Override element (<bdo>) overrides the current directionality of text, so that the text within is rendered in a different direction.
<br>
The HTML <br> element produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant.
<cite>
The HTML Citation element (<cite>) is used to describe a reference to a cited creative work, and must include either the title or the URL of that work.
<code>
The HTML <code> element displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code.
<data>
The HTML <data> element links a given content with a machine-readable translation. If the content is time- or date-related, the <time> element must be used.

<dfn>
The HTML Definition element (<dfn>) is used to indicate the term being defined within the context of a definition phrase or sentence.
<em>
The HTML <em> element marks text that has stress emphasis. The <em> element can be nested, with each level of nesting indicating a greater degree of emphasis.
<i>
The HTML <i> element represents a range of text that is set off from the normal text for some reason, for example, technical terms, foreign language phrases, or fictional character thoughts. It is typically displayed in italic type.
<kbd>
The HTML Keyboard Input element (<kbd>) represents a span of inline text denoting textual user input from a keyboard, voice input, or any other text entry device.
<mark>
The HTML Mark Text element (<mark>) represents text which is marked or highlighted for reference or notation purposes, due to the marked passage's relevance or importance in the enclosing context.
<nobr>
The non-standard, obsolete HTML <nobr> element prevents the text it contains from automatically wrapping across multiple lines, potentially resulting in the user having to scroll horizontally to see the entire width of the text.
<q>
The HTML <q> element indicates that the enclosed text is a short inline quotation. Most modern browsers implement this by surrounding the text in quotation marks. 
<rp>
The HTML Ruby Fallback Parenthesis (<rp>) element is used to provide fall-back parentheses for browsers that do not support display of ruby annotations using the <ruby> element.

<rt>
The HTML Ruby Text (<rt>) element specifies the ruby text component of a ruby annotation, which is used to provide pronunciation, translation, or transliteration information for East Asian typography. The <rt> element must always be contained within a <ruby> element.

<rtc>
The HTML Ruby Text Container (<rtc>) element embraces semantic annotations of characters presented in a ruby of <rb> elements used inside of <ruby> element. <rb> elements can have both pronunciation (<rt>) and semantic (<rtc>) annotations.

<ruby>
The HTML <ruby> element represents a ruby annotation. Ruby annotations are for showing pronunciation of East Asian characters.
<s>
The HTML <s> element renders text with a strikethrough, or a line through it. Use the <s> element to represent things that are no longer relevant or no longer accurate. However, <s> is not appropriate when indicating document edits; for that, use the <del> and <ins> elements, as appropriate.

<samp>
The HTML Sample Element (<samp>) is used to enclose inline text which represents sample (or quoted) output from a computer program.
<small>
The HTML <small> element makes the text font size one size smaller (for example, from large to medium, or from small to x-small) down to the browser's minimum font size.  In HTML5, this element is repurposed to represent side-comments and small print, including copyright and legal text, independent of its styled presentation.
<span>
The HTML <span> element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang.
<strong>
The HTML Strong Importance Element (<strong>) indicates that its contents have strong importance, seriousness, or urgency. Browsers typically render the contents in bold type.
<sub>
The HTML Subscript element (<sub>) specifies inline text which should be displayed as subscript for solely typographical reasons. Subscripts are typically rendered with a lowered baseline using smaller text.
<sup>
The HTML Superscript element (<sup>) specifies inline text which is to be displayed as superscript for solely typographical reasons.
<time>
The HTML <time> element represents either a time on a 24-hour clock or a precise date in the Gregorian calendar (with optional time and timezone information).

<tt>
The obsolete HTML Teletype Text element (<tt>) creates inline text which is presented using the user agent's default monospace font face.

<u>
The HTML Unarticulated Annotation element (<u>) represents a span of inline text which should be rendered in a way that indicates that it has a non-textual annotation.
<var>
The HTML <var> element represents a variable in a mathematical expression or a programming context.
<wbr>
The HTML <wbr> element represents a word break opportunity—a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location.
Image and multimedia
HTML supports various multimedia resources such as images, audio, and video.
Element	Description
<area>
The HTML <area> element defines a hot-spot region on an image, and optionally associates it with a hypertext link. This element is used only within a <map> element.

<audio>
The HTML <audio> element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the <source> element: the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream.

<img>
The HTML <img> element embeds an image into the document.
<map>
The HTML <map> element is used with <area> elements to define an image map (a clickable link area).
<track>
The HTML <track> element is used as a child of the media elements <audio> and <video>. It lets you specify timed text tracks (or time-based data), for example to automatically handle subtitles. The tracks are formatted in WebVTT format (.vtt files) — Web Video Text Tracks.
<video>
Use the HTML <video> element to embed video content in a document.
Embedded content
In addition to regular multimedia content, HTML can include a variety of other content, even if it's not always easy to interact with.
Element	Description
<applet>
The obsolete HTML Applet Element (<applet>) embeds a Java applet into the document; this element has been deprecated in favor of <object>.

<embed>
The HTML <embed> element embeds external content at the specified point in the document. This content is provided by an external application or other source of interactive content such as a browser plug-in.
<noembed>
The <noembed> element is an obsolete, non-standard way to provide alternative, or "fallback", content for browsers that do not support the <embed> element or do not support the type of embedded content an author wishes to use.

<object>
The HTML <object> element represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin.
<param>
The HTML <param> element defines parameters for an <object> element.

<picture>
The HTML <picture> element serves as a container for zero or more <source> elements and one <img> element to provide versions of an image for different display device scenarios.
<source>
The HTML <source> element specifies multiple media resources for the <picture>, the <audio> element, or the <video> element. It is an empty element. It is commonly used to serve the same media content in multiple formats supported by different browsers.

Scripting
In order to create dynamic content and Web applications, HTML supports the use of scripting languages, most prominently JavaScript. Certain elements support this capability.
Element	Description
<canvas>
Use the HTML <canvas> element with either the canvas scripting API or the WebGL API to draw graphics and animations.

<noscript>
The HTML <noscript> element defines a section of HTML to be inserted if a script type on the page is unsupported or if scripting is currently turned off in the browser.
<script>
The HTML <script> element is used to embed or reference executable code; this is typically used to embed or refer to JavaScript code.
Demarcating edits
These elements let you provide indications that specific parts of the text have been altered.
Element	Description
<del>
The HTML <del> element represents a range of text that has been deleted from a document.
<ins>
The HTML <ins> element represents a range of text that has been added to a document.
Table content
The elements here are used to create and handle tabular data.
Element	Description
<caption>
The HTML Table Caption element (<caption>) specifies the caption (or title) of a table, and if used is always the first child of a <table>.

<col>
The HTML <col> element defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <colgroup> element.
<colgroup>
The HTML <colgroup> element defines a group of columns within a table.
<table>
The HTML <table> element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.
<tbody>
The HTML Table Body element (<tbody>) encapsulates a set of table row (<tr> elements, indicating that they comprise the body of the table (<table>).

<td>
The HTML <td> element defines a cell of a table that contains data. It participates in the table model.
<tfoot>
The HTML <tfoot> element defines a set of rows summarizing the columns of the table.
<th>
The HTML <th> element defines a cell as header of a group of table cells. The exact nature of this group is defined by the scope and headers attributes.

<thead>
The HTML <thead> element defines a set of rows defining the head of the columns of the table.
<tr>
The HTML <tr> element specifies that the markup contained inside the <tr> block comprises one row of a table, inside which the <th> and <td> elements create header and data cells, respectively, within the row.
Forms
HTML provides a number of elements which can be used together to create forms which the user can fill out and submit to the Web site or application. There's a great deal of further information about this available in the HTML forms guide.
Element	Description
<button>
The HTML <button> element represents a clickable button, which can be used in forms, or anywhere in a document that needs simple, standard button functionality.

<datalist>
The HTML <datalist> element contains a set of <option> elements that represent the values available for other controls.
<fieldset>
The HTML <fieldset> element is used to group several controls as well as labels (<label>) within a web form.

<form>
The HTML <form> element represents a document section that contains interactive controls to submit information to a web server.
<input>
The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user.
<label>
The HTML <label> element represents a caption for an item in a user interface.
<legend>
The HTML <legend> element represents a caption for the content of its parent <fieldset>.

<meter>
The HTML <meter> element represents either a scalar value within a known range or a fractional value.
<optgroup>
The HTML <optgroup> element creates a grouping of options within a <select> element.
<option>
The HTML <option> element is used to define an item contained in a <select>, an <optgroup>, or a <datalist> element. As such, <option> can represent menu items in popups and other lists of items in an HTML document.
<output>
The HTML Output element (<output>) is a container element into which a site or app can inject the results of a calculation or the outcome of a user action.
<progress>
The HTML <progress> element displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
<select>
The HTML <select> element represents a control that provides a menu of options:
<textarea>
The HTML <textarea> element represents a multi-line plain-text editing control.
Interactive elements
HTML offers a selection of elements which help to create interactive user interface objects.
Element	Description
<details>
The HTML Details Element (<details>) is used to create a disclosure widget in which information is visible only when the widget is toggled into an "open" state. A summary or label can be provided using the <summary> element.

<dialog>
The HTML <dialog> element represents a dialog box or other interactive component, such as an inspector or window.
<menu>
The HTML <menu> element represents a group of commands that a user can perform or activate. This includes both list menus, which might appear across the top of a screen, as well as context menus, such as those that might appear underneath a button after it has been clicked.
<menuitem>
The HTML <menuitem> element represents a command that a user is able to invoke through a popup menu. This includes context menus, as well as menus that might be attached to a menu button.
<summary>
The HTML Disclosure Summary element (<summary>) element specifies a summary, caption, or legend for a <details> element's disclosure box.

Web Components
Web Components is an HTML-related technology which makes it possible to, essentially, create and use custom elements as if it were regular HTML. In addition, you can create custom versions of standard HTML elements.
Element	Description
<content>
The HTML <content> element—an obsolete part of the Web Components suite of technologies—was used inside of Shadow DOM as an insertion point, and wasn't meant to be used in ordinary HTML.
<element>
The obsolete HTML <element> element was part of the Web Components specification; it was intended to be used to define new custom DOM elements.
<shadow>
The HTML <shadow> element—an obsolete part of the Web Components technology suite—was intended to be used as a shadow DOM insertion point. You might have used it if you have created multiple shadow roots under a shadow host. It is not useful in ordinary HTML.
<slot>
The HTML <slot> element—part of the Web Components technology suite—is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together.
<template>
The HTML <template> element is a mechanism for holding client-side content that is not to be rendered when a page is loaded but may subsequently be instantiated during runtime using JavaScript.
Obsolete and deprecated elements
Warning: These are old HTML elements which are deprecated and should not be used. You should never use them in new projects, and should replace them in old projects as soon as you can. They are listed here for informational purposes only.
Element	Description
<acronym>
The HTML Acronym Element (<acronym>) allows authors to clearly indicate a sequence of characters that compose an acronym or abbreviation for a word. This element has been removed in HTML5. Use <abbr> element.

<applet>
The obsolete HTML Applet Element (<applet>) embeds a Java applet into the document; this element has been deprecated in favor of <object>.

<basefont>
The obsolete HTML Base Font element (<basefont>) sets a default font face, size, and color for the other elements which are descended from its parent element.
<bgsound>
The Internet Explorer only HTML Background Sound element (<bgsound>) sets up a sound file to play in the background while the page is used; use <audio> instead.

<big>
The obsolete HTML Big Element (<big>) renders the enclosed text at a font size one level larger than the surrounding text (medium becomes large, for example).
<blink>
The HTML Blink Element (<blink>) is a non-standard element which causes the enclosed text to flash slowly.
<center>
The obsolete HTML Center Element (<center>) is a block-level element that displays its block-level or inline contents centered horizontally within its containing element.
<command>
The HTML Command element (<command>) represents a command which the user can invoke. Commands are often used as part of a context menu or toolbar.
<content>
The HTML <content> element—an obsolete part of the Web Components suite of technologies—was used inside of Shadow DOM as an insertion point, and wasn't meant to be used in ordinary HTML.
<dir>
The obsolete HTML Directory element (<dir>) is used as a container for a directory of files and/or folders, potentially with styles and icons applied by the user agent.

<element>
The obsolete HTML <element> element was part of the Web Components specification; it was intended to be used to define new custom DOM elements.
<font>
The HTML Font Element (<font>) defines the font size, color and face for its content.
<frame>
<frame> is an HTML element which defines a particular area in which another HTML document can be displayed. A frame should be used within a <frameset>.

<frameset>
<frameset> is an HTML element which is used to contain <frame> elements.

<image>
The HTML <image> element is an obsolete remnant of an ancient version of HTML lost in the mists of time; use the standard <img> element instead. Seriously, the specification even literally uses the words "Don't ask" when describing this element.
<isindex>
<isindex> is an obsolete HTML element that puts a text field in a page for querying the document.
<keygen>
The HTML <keygen> element exists to facilitate generation of key material, and submission of the public key as part of an HTML form. This mechanism is designed for use with Web-based certificate management systems. It is expected that the <keygen> element will be used in an HTML form along with other information needed to construct a certificate request, and that the result of the process will be a signed certificate.
<listing>
The HTML Listing Element (<listing>) renders text between the start and end tags without interpreting the HTML in between and using a monospaced font. The HTML 2 standard recommended that lines shouldn't be broken when not greater than 132 characters.
<marquee>
The HTML <marquee> element is used to insert a scrolling area of text. You can control what happens when the text reaches the edges of its content area using its attributes.
<menu>
The HTML <menu> element represents a group of commands that a user can perform or activate. This includes both list menus, which might appear across the top of a screen, as well as context menus, such as those that might appear underneath a button after it has been clicked.
<menuitem>
The HTML <menuitem> element represents a command that a user is able to invoke through a popup menu. This includes context menus, as well as menus that might be attached to a menu button.
<multicol>
The HTML Multi-Column Layout element (<multicol>) was an experimental element designed to allow multi-column layouts and must not be used.
<nextid>
<nextid> is an obsolete HTML element that served to enable the NeXT web designing tool to generate automatic NAME labels for its anchors.
<nobr>
The non-standard, obsolete HTML <nobr> element prevents the text it contains from automatically wrapping across multiple lines, potentially resulting in the user having to scroll horizontally to see the entire width of the text.
<noembed>
The <noembed> element is an obsolete, non-standard way to provide alternative, or "fallback", content for browsers that do not support the <embed> element or do not support the type of embedded content an author wishes to use.

<noframes>
The obsolete HTML No Frames or frame fallback element, <noframes>, provides content to be presented in browsers that don't support (or have disabled support for) the <frame> element.

<plaintext>
The HTML Plaintext Element (<plaintext>) renders everything following the start tag as raw text, without interpreting any HTML. There is no closing tag, since everything after it is considered raw text.
<shadow>
The HTML <shadow> element—an obsolete part of the Web Components technology suite—was intended to be used as a shadow DOM insertion point. You might have used it if you have created multiple shadow roots under a shadow host. It is not useful in ordinary HTML.
<spacer>
<spacer> is an obsolete HTML element which allowed insertion of empty spaces on pages. It was devised by Netscape to accomplish the same effect as a single-pixel layout image, which was something web designers used to use to add white spaces to web pages without actually using an image. However, <spacer> no longer supported by any major browser and the same effects can now be achieved using simple CSS. 
<strike>
The HTML <strike> element (or HTML Strikethrough Element) places a strikethrough (horizontal line) over text.
<tt>
The obsolete HTML Teletype Text element (<tt>) creates inline text which is presented using the user agent's default monospace font face.

<xmp>
The HTML Example Element (<xmp>) renders text between the start and end tags without interpreting the HTML in between and using a monospaced font. The HTML2 specification recommended that it should be rendered wide enough to allow 80 characters per line.

CSS reference
URL - https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Keyword_index

Keyword index
Note: The property names in this index do not include the JavaScript names where they differ from the CSS standard names.
A
•	:active
•	additive-symbols (@counter-style)
•	::after (:after)
•	align-content
•	align-items
•	align-self
•	all
•	<an-plus-b>
•	<angle>
•	animation
•	animation-delay
•	animation-direction
•	animation-duration
•	animation-fill-mode
•	animation-iteration-count
•	animation-name
•	animation-play-state
•	animation-timing-function
•	@annotation
•	annotation()
•	attr()
B
•	::backdrop
•	backface-visibility
•	background
•	background-attachment
•	background-blend-mode
•	background-clip
•	background-color
•	background-image
•	background-origin
•	background-position
•	background-repeat
•	background-size
•	<basic-shape>
•	::before (:before)
•	<blend-mode>
•	block-size
•	blur()
•	border
•	border-block-end
•	border-block-end-color
•	border-block-end-style
•	border-block-end-width
•	border-block-start
•	border-block-start-color
•	border-block-start-style
•	border-block-start-width
•	border-bottom
•	border-bottom-color
•	border-bottom-left-radius
•	border-bottom-right-radius
•	border-bottom-style
•	border-bottom-width
•	border-collapse
•	border-color
•	border-image
•	border-image-outset
•	border-image-repeat
•	border-image-slice
•	border-image-source
•	border-image-width
•	border-inline-end
•	border-inline-end-color
•	border-inline-end-style
•	border-inline-end-width
•	border-inline-start
•	border-inline-start-color
•	border-inline-start-style
•	border-inline-start-width
•	border-left
•	border-left-color
•	border-left-style
•	border-left-width
•	border-radius
•	border-right
•	border-right-color
•	border-right-style
•	border-right-width
•	border-spacing
•	border-style
•	border-top
•	border-top-color
•	border-top-left-radius
•	border-top-right-radius
•	border-top-style
•	border-top-width
•	border-width
•	bottom
•	@bottom-center
•	box-decoration-break
•	box-shadow
•	box-sizing
•	break-after
•	break-before
•	break-inside
•	brightness()
C
•	calc()
•	caption-side
•	caret-color
•	ch
•	@character-variant
•	character-variant()
•	@charset
•	:checked
•	circle()
•	clear
•	clip
•	clip-path
•	cm
•	<color>
•	color
•	column-count
•	column-fill
•	column-gap
•	column-rule
•	column-rule-color
•	column-rule-style
•	column-rule-width
•	column-span
•	column-width
•	columns
•	content
•	contrast()
•	<counter>
•	counter-increment
•	counter-reset
•	@counter-style
•	cross-fade()
•	cubic-bezier()
•	::cue
•	cursor
•	<custom-ident>
D
•	:default
•	deg
•	:dir
•	direction
•	:disabled
•	display
•	dpcm
•	dpi
•	dppx
•	drop-shadow()
E
•	element()
•	ellipse()
•	em
•	:empty
•	empty-cells
•	:enabled
•	ex
F
•	fallback (@counter-style)
•	filter
•	<filter-function>
•	:first
•	:first-child
•	::first-letter (:first-letter)
•	::first-line (:first-line)
•	:first-of-type
•	fit-content()
•	<flex>
•	flex
•	flex-basis
•	flex-direction
•	flex-flow
•	flex-grow
•	flex-shrink
•	flex-wrap
•	float
•	:focus
•	font
•	@font-face
•	font-family
•	font-family (@font-face)
•	font-feature-settings
•	font-feature-settings (@font-face)
•	@font-feature-values
•	font-kerning
•	font-language-override
•	font-size
•	font-size-adjust
•	font-stretch
•	font-stretch (@font-face)
•	font-style
•	font-style (@font-face)
•	font-synthesis
•	font-variant
•	font-variant (@font-face)
•	font-variant-alternates
•	font-variant-caps
•	font-variant-east-asian
•	font-variant-ligatures
•	font-variant-numeric
•	font-variant-position
•	font-variation-settings (@font-face)
•	font-weight
•	font-weight (@font-face)
•	format()
•	format() (@font-face)
•	fr
•	frames()
•	<frequency>
•	:fullscreen
G
•	grad
•	<gradient>
•	grayscale()
•	grid
•	grid-area
•	grid-auto-columns
•	grid-auto-flow
•	grid-auto-rows
•	grid-column
•	grid-column-end
•	grid-column-gap
•	grid-column-start
•	grid-gap
•	grid-row
•	grid-row-end
•	grid-row-gap
•	grid-row-start
•	grid-template
•	grid-template-areas
•	grid-template-columns
•	grid-template-rows
H
•	hanging-punctuation
•	height
•	height (@viewport)
•	@historical-forms
•	:hover
•	hsl()
•	hsla()
•	hue-rotate()
•	hyphens
•	hz
I
•	<ident>
•	<image>
•	image()
•	image-orientation
•	image-rendering
•	image-resolution
•	image-set()
•	@import
•	in
•	:in-range
•	:indeterminate
•	inherit
•	initial
•	inline-size
•	inset()
•	<integer>
•	:invalid
•	invert()
•	isolation
J
•	justify-content
K
•	@keyframes
•	khz
L
•	:lang
•	:last-child
•	:last-of-type
•	leader()
•	:left
•	left
•	@left-bottom
•	<length>
•	letter-spacing
•	line-break
•	line-height
•	linear-gradient()
•	:link
•	list-style
•	list-style-image
•	list-style-position
•	list-style-type
•	local()
M
•	margin
•	margin-block-end
•	margin-block-start
•	margin-bottom
•	margin-inline-end
•	margin-inline-start
•	margin-left
•	margin-right
•	margin-top
•	mask
•	mask-clip
•	mask-composite
•	mask-image
•	mask-mode
•	mask-origin
•	mask-position
•	mask-repeat
•	mask-size
•	mask-type
•	matrix()
•	matrix3d()
•	max-height
•	max-height (@viewport)
•	max-width
•	max-width (@viewport)
•	max-zoom (@viewport)
•	@media
•	min-block-size
•	min-height
•	min-height (@viewport)
•	min-inline-size
•	min-width
•	min-width (@viewport)
•	min-zoom (@viewport)
•	minmax()
•	mix-blend-mode
•	mm
•	ms
N
•	@namespace
•	negative (@counter-style)
•	:not
•	:nth-child
•	:nth-last-child
•	:nth-last-of-type
•	:nth-of-type
•	<number>
O
•	object-fit
•	object-position
•	offset-block-end
•	offset-block-start
•	offset-inline-end
•	offset-inline-start
•	:only-child
•	:only-of-type
•	opacity
•	opacity()
•	:optional
•	order
•	orientation (@viewport)
•	@ornaments
•	ornaments()
•	orphans
•	:out-of-range
•	outline
•	outline-color
•	outline-offset
•	outline-style
•	outline-width
•	overflow
•	overflow-wrap
•	overflow-x
•	overflow-y
P
•	pad (@counter-style)
•	padding
•	padding-block-end
•	padding-block-start
•	padding-bottom
•	padding-inline-end
•	padding-inline-start
•	padding-left
•	padding-right
•	padding-top
•	@page
•	page-break-after
•	page-break-before
•	page-break-inside
•	pc
•	<percentage>
•	perspective
•	perspective()
•	perspective-origin
•	::placeholder
•	pointer-events
•	polygon()
•	<position>
•	position
•	prefix (@counter-style)
•	pt
•	px
Q
•	q
•	quotes
R
•	rad
•	radial-gradient()
•	range (@counter-style)
•	<ratio>
•	:read-only
•	:read-write
•	rect()
•	rem
•	repeat()
•	repeating-linear-gradient()
•	repeating-radial-gradient()
•	:required
•	resize
•	<resolution>
•	revert
•	rgb()
•	rgba()
•	:right
•	right
•	@right-bottom
•	:root
•	rotate()
•	rotate3d()
•	rotateX()
•	rotateY()
•	rotateZ()
•	ruby-align
•	ruby-merge
•	ruby-position
S
•	s
•	saturate()
•	scale()
•	scale3d()
•	scaleX()
•	scaleY()
•	scaleZ()
•	:scope
•	scroll-behavior
•	scroll-snap-coordinate
•	scroll-snap-destination
•	scroll-snap-type
•	::selection
•	sepia()
•	<shape>
•	shape-image-threshold
•	shape-margin
•	shape-outside
•	skew()
•	skewX()
•	skewY()
•	speak-as (@counter-style)
•	src (@font-face)
•	steps()
•	<string>
•	@styleset
•	styleset()
•	@stylistic
•	stylistic()
•	suffix (@counter-style)
•	@supports
•	@swash
•	swash()
•	symbols (@counter-style)
•	symbols()
•	system (@counter-style)
T
•	tab-size
•	table-layout
•	:target
•	target-counter()
•	target-counters()
•	target-text()
•	text-align
•	text-align-last
•	text-combine-upright
•	text-decoration
•	text-decoration-color
•	text-decoration-line
•	text-decoration-style
•	text-emphasis
•	text-emphasis-color
•	text-emphasis-position
•	text-emphasis-style
•	text-indent
•	text-justify
•	text-orientation
•	text-overflow
•	text-rendering
•	text-shadow
•	text-transform
•	text-underline-position
•	<time>
•	<timing-function>
•	top
•	@top-center
•	touch-action
•	transform
•	transform-box
•	<transform-function>
•	transform-origin
•	transform-style
•	transition
•	transition-delay
•	transition-duration
•	transition-property
•	transition-timing-function
•	translate()
•	translate3d()
•	translateX()
•	translateY()
•	translateZ()
•	turn
U
•	unicode-bidi
•	unicode-range (@font-face)
•	unset
•	<url>
•	url()
•	user-zoom (@viewport)
V
•	:valid
•	var()
•	vertical-align
•	vh
•	@viewport
•	visibility
•	:visited
•	vmax
•	vmin
•	vw
W
•	white-space
•	widows
•	width
•	width (@viewport)
•	will-change
•	word-break
•	word-spacing
•	word-wrap
•	writing-mode
Z
•	z-index
•	zoom (@viewport)
Others
•	--*

Selectors
Basic selectors
•	Type selector elementname
•	Class selector .classname
•	ID selector #idname
•	Universal selector *, ns|*, *|*, |*
•	Attribute selector [attr=value]
Combinators
•	Adjacent sibling combinator A + B
•	General sibling combinator A ~ B
•	Child combinator A > B
•	Descendant combinator A B
Pseudo-classes
•	:active
•	:any
•	:any-link
•	:checked
•	:default
•	:dir()
•	:disabled
•	:empty
•	:enabled
•	:first
•	:first-child
•	:first-of-type
•	:fullscreen
•	:focus
•	:hover
•	:indeterminate
•	:in-range
•	:invalid
•	:lang()
•	:last-child
•	:last-of-type
•	:left
•	:link
•	:not()
•	:nth-child()
•	:nth-last-child()
•	:nth-last-of-type()
•	:nth-of-type()
•	:only-child
•	:only-of-type
•	:optional
•	:out-of-range
•	:read-only
•	:read-write
•	:required
•	:right
•	:root
•	:scope
•	:target
•	:valid
•	:visited
Pseudo-elements
•	::after
•	::backdrop
•	::before
•	::cue
•	::first-letter
•	::first-line
•	::grammar-error 
•	::marker 
•	::placeholder 
•	::selection
•	::spelling-error 
JavaScript reference
URL - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
Global Objects
This chapter documents all the JavaScript standard built-in objects, along with their methods and properties.
Value properties
These global properties return a simple value; they have no properties or methods.
•	Infinity
•	NaN
•	undefined
•	null literal
Function properties
These global functions—functions which are called globally rather than on an object—directly return their results to the caller.
•	eval()
•	uneval() 
•	isFinite()
•	isNaN()
•	parseFloat()
•	parseInt()
•	decodeURI()
•	decodeURIComponent()
•	encodeURI()
•	encodeURIComponent()
•	escape() 
•	unescape() 
Fundamental objects
These are the fundamental, basic objects upon which all other objects are based. This includes objects that represent general objects, functions, and errors.
•	Object
•	Function
•	Boolean
•	Symbol
•	Error
•	EvalError
•	InternalError
•	RangeError
•	ReferenceError
•	SyntaxError
•	TypeError
•	URIError
Numbers and dates
These are the base objects representing numbers, dates, and mathematical calculations.
•	Number
•	Math
•	Date
Text processing
These objects represent strings and support manipulating them.
•	String
•	RegExp
Indexed collections
These objects represent collections of data which are ordered by an index value. This includes (typed) arrays and array-like constructs.
•	Array
•	Int8Array
•	Uint8Array
•	Uint8ClampedArray
•	Int16Array
•	Uint16Array
•	Int32Array
•	Uint32Array
•	Float32Array
•	Float64Array
Keyed collections
These objects represent collections which use keys; these contain elements which are iterable in the order of insertion.
•	Map
•	Set
•	WeakMap
•	WeakSet
Vector collections
SIMD vector data types are objects where data is arranged into lanes.
•	SIMD 
•	SIMD.Float32x4 
•	SIMD.Float64x2 
•	SIMD.Int8x16 
•	SIMD.Int16x8 
•	SIMD.Int32x4 
•	SIMD.Uint8x16 
•	SIMD.Uint16x8 
•	SIMD.Uint32x4 
•	SIMD.Bool8x16 
•	SIMD.Bool16x8 
•	SIMD.Bool32x4 
•	SIMD.Bool64x2 
Structured data
These objects represent and interact with structured data buffers and data coded using JavaScript Object Notation (JSON).
•	ArrayBuffer
•	SharedArrayBuffer 
•	Atomics 
•	DataView
•	JSON
Control abstraction objects
•	Promise
•	Generator
•	GeneratorFunction
•	AsyncFunction
Reflection
•	Reflect
•	Proxy
Internationalization
Additions to the ECMAScript core for language-sensitive functionalities.
•	Intl
•	Intl.Collator
•	Intl.DateTimeFormat
•	Intl.NumberFormat
WebAssembly
•	WebAssembly
•	WebAssembly.Module
•	WebAssembly.Instance
•	WebAssembly.Memory
•	WebAssembly.Table
•	WebAssembly.CompileError
•	WebAssembly.LinkError
•	WebAssembly.RuntimeError
Other
•	arguments
Statements
This chapter documents all the JavaScript statements and declarations.
For an alphabetical listing see the sidebar on the left.
Control flow
Block
A block statement is used to group zero or more statements. The block is delimited by a pair of curly brackets.
break
Terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement.
continue
Terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.
Empty
An empty statement is used to provide no statement, although the JavaScript syntax would expect one.
if...else
Executes a statement if a specified condition is true. If the condition is false, another statement can be executed.
switch
Evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case.
throw
Throws a user-defined exception.
try...catch
Marks a block of statements to try, and specifies a response, should an exception be thrown.
Declarations
var
Declares a variable, optionally initializing it to a value.
let
Declares a block scope local variable, optionally initializing it to a value.
const
Declares a read-only named constant.
Functions and classes
function
Declares a function with the specified parameters.
function*
Generator Functions enable writing iterators more easily.
async function
Declares an async function with the specified parameters.
return
Specifies the value to be returned by a function.
class
Declares a class.
Iterations
do...while
Creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.
for
Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement executed in the loop.
for each...in
Iterates a specified variable over all values of object's properties. For each distinct property, a specified statement is executed.
for...in
Iterates over the enumerable properties of an object, in arbitrary order. For each distinct property, statements can be executed.
for...of
Iterates over iterable objects (including arrays, array-like objects, iterators and generators), invoking a custom iteration hook with statements to be executed for the value of each distinct property.
while
Creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.
Others
debugger
Invokes any available debugging functionality. If no debugging functionality is available, this statement has no effect.
export
Used to export functions to make them available for imports in external modules, another scripts.
import
Used to import functions exported from an external module, another script.
label
Provides a statement with an identifier that you can refer to using a break or continue statement.
with
Extends the scope chain for a statement.
Expressions and operators
This chapter documents all the JavaScript expressions and operators.
For an alphabetical listing see the sidebar on the left.
Primary expressions
Basic keywords and general expressions in JavaScript.
this
The this keyword refers to the function's execution context.
function
The function keyword defines a function expression.
class
The class keyword defines a class expression.
function*
The function* keyword defines a generator function expression.
yield
Pause and resume a generator function.
yield*
Delegate to another generator function or iterable object.
async function*
The async function defines an async function expression.
await
Pause and resume an async function and wait for the promise's resolution/rejection.
[]
Array initializer/literal syntax.
{}
Object initializer/literal syntax.
/ab+c/i
Regular expression literal syntax.
( )
Grouping operator.
Left-hand-side expressions
Left values are the destination of an assignment.
Property accessors
Member operators provide access to a property or method of an object
(object.property and object["property"]).
new
The new operator creates an instance of a constructor.
new.target
In constructors, new.target refers to the constructor that was invoked by new.
super
The super keyword calls the parent constructor.
...obj
Spread syntax allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) are expected.
Increment and decrement
Postfix/prefix increment and postfix/prefix decrement operators.
A++
Postfix increment operator.
A--
Postfix decrement operator.
++A
Prefix increment operator.
--A
Prefix decrement operator.
Unary operators
A unary operation is operation with only one operand.
delete
The delete operator deletes a property from an object.
void
The void operator discards an expression's return value.
typeof
The typeof operator determines the type of a given object.
+
The unary plus operator converts its operand to Number type.
-
The unary negation operator converts its operand to Number type and then negates it.
~
Bitwise NOT operator.
!
Logical NOT operator.
Arithmetic operators
Arithmetic operators take numerical values (either literals or variables) as their operands and return a single numerical value.
+
Addition operator.
-
Subtraction operator.
/
Division operator.
*
Multiplication operator.
%
Remainder operator.
**
Exponentiation operator.
Relational operators
A comparison operator compares its operands and returns a Boolean value based on whether the comparison is true.
in
The in operator determines whether an object has a given property.
instanceof
The instanceof operator determines whether an object is an instance of another object.
<
Less than operator.
>
Greater than operator.
<=
Less than or equal operator.
>=
Greater than or equal operator.
Note: => is not an operator, but the notation for Arrow functions.
Equality operators
The result of evaluating an equality operator is always of type Boolean based on whether the comparison is true.
==
Equality operator.
!=
Inequality operator.
===
Identity operator.
!==
Nonidentity operator.
Bitwise shift operators
Operations to shift all bits of the operand.
<<
Bitwise left shift operator.
>>
Bitwise right shift operator.
>>>
Bitwise unsigned right shift operator.
Binary bitwise operators
Bitwise operators treat their operands as a set of 32 bits (zeros and ones) and return standard JavaScript numerical values.
&
Bitwise AND.
|
Bitwise OR.
^
Bitwise XOR.
Binary logical operators
Logical operators are typically used with boolean (logical) values, and when they are, they return a boolean value.
&&
Logical AND.
||
Logical OR.
Conditional (ternary) operator
(condition ? ifTrue : ifFalse)
The conditional operator returns one of two values based on the logical value of the condition.
Assignment operators
An assignment operator assigns a value to its left operand based on the value of its right operand.
=
Assignment operator.
*=
Multiplication assignment.
/=
Division assignment.
%=
Remainder assignment.
+=
Addition assignment.
-=
Subtraction assignment
<<=
Left shift assignment.
>>=
Right shift assignment.
>>>=
Unsigned right shift assignment.
&=
Bitwise AND assignment.
^=
Bitwise XOR assignment.
|=
Bitwise OR assignment.
[a, b] = [1, 2]
{a, b} = {a:1, b:2}
Destructuring assignment allows you to assign the properties of an array or object to variables using syntax that looks similar to array or object literals.
Comma operator
,
The comma operator allows multiple expressions to be evaluated in a single statement and returns the result of the last expression.
Non-standard features
Legacy generator function
The function keyword can be used to define a legacy generator function inside an expression. To make the function a legacy generator, the function body should contains at least one yield expression.
Expression closures
The expression closure syntax is a shorthand for writing simple function.
[for (x of y) x]
Array comprehensions.
(for (x of y) y)
Generator comprehensions.

jQuery API
URL - http://api.jquery.com/
.add() 
Create a new jQuery object with elements added to the set of matched elements.
Traversing > Miscellaneous Traversing 
.addBack() 
Add the previous set of elements on the stack to the current set, optionally filtered by a selector.
Attributes | Manipulation > Class Attribute | CSS 
.addClass() 
Adds the specified class(es) to each element in the set of matched elements.
Manipulation > DOM Insertion, Outside 
.after() 
Insert content, specified by the parameter, after each element in the set of matched elements.
Ajax > Global Ajax Event Handlers 
.ajaxComplete() 
Register a handler to be called when Ajax requests complete. This is an AjaxEvent.
Ajax > Global Ajax Event Handlers 
.ajaxError() 
Register a handler to be called when Ajax requests complete with an error. This is an Ajax Event.
Ajax > Global Ajax Event Handlers 
.ajaxSend() 
Attach a function to be executed before an Ajax request is sent. This is an Ajax Event.
Ajax > Global Ajax Event Handlers 
.ajaxStart() 
Register a handler to be called when the first Ajax request begins. This is an Ajax Event.
Ajax > Global Ajax Event Handlers 
.ajaxStop() 
Register a handler to be called when all Ajax requests have completed. This is an Ajax Event.
Ajax > Global Ajax Event Handlers 
.ajaxSuccess() 
Attach a function to be executed whenever an Ajax request completes successfully. This is an Ajax Event.
Selectors > Basic 
All Selector (“*”) 
Selects all elements.
Deprecated > Deprecated 1.8 | Traversing > Miscellaneous Traversing | Removed 
.andSelf() 
Add the previous set of elements on the stack to the current set.
Effects > Custom 
.animate() 
Perform a custom animation of a set of CSS properties.
Selectors > Basic Filter | Selectors > jQuery Extensions 
:animated Selector 
Select all elements that are in the progress of an animation at the time the selector is run.
Manipulation > DOM Insertion, Inside 
.append() 
Insert content, specified by the parameter, to the end of each element in the set of matched elements.
Manipulation > DOM Insertion, Inside 
.appendTo() 
Insert every element in the set of matched elements to the end of the target.
Attributes | Manipulation > General Attributes 
.attr() 
Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element.
Selectors > Attribute 
Attribute Contains Prefix Selector [name|=”value”] 
Selects elements that have the specified attribute with a value either equal to a given string or starting with that string followed by a hyphen (-).
Selectors > Attribute 
Attribute Contains Selector [name*=”value”] 
Selects elements that have the specified attribute with a value containing a given substring.
Selectors > Attribute 
Attribute Contains Word Selector [name~=”value”] 
Selects elements that have the specified attribute with a value containing a given word, delimited by spaces.
Selectors > Attribute 
Attribute Ends With Selector [name$=”value”] 
Selects elements that have the specified attribute with a value ending exactly with a given string. The comparison is case sensitive.
Selectors > Attribute 
Attribute Equals Selector [name=”value”] 
Selects elements that have the specified attribute with a value exactly equal to a certain value.
Selectors > Attribute | Selectors > jQuery Extensions 
Attribute Not Equal Selector [name!=”value”] 
Select elements that either don’t have the specified attribute, or do have the specified attribute but not with a certain value.
Selectors > Attribute 
Attribute Starts With Selector [name^=”value”] 
Selects elements that have the specified attribute with a value beginning exactly with a given string.
Manipulation > DOM Insertion, Outside 
.before() 
Insert content, specified by the parameter, before each element in the set of matched elements.
Deprecated > Deprecated 3.0 | Events > Event Handler Attachment 
.bind() 
Attach a handler to an event for the elements.
Events > Form Events | Forms 
.blur() 
Bind an event handler to the “blur” JavaScript event, or trigger that event on an element.
Selectors > Form | Selectors > jQuery Extensions 
:button Selector 
Selects all button elements and elements of type button.
Callbacks Object 
callbacks.add() 
Add a callback or a collection of callbacks to a callback list.
Callbacks Object 
callbacks.disable() 
Disable a callback list from doing anything more.
Callbacks Object 
callbacks.disabled() 
Determine if the callbacks list has been disabled.
Callbacks Object 
callbacks.empty() 
Remove all of the callbacks from a list.
Callbacks Object 
callbacks.fire() 
Call all of the callbacks with the given arguments.
Callbacks Object 
callbacks.fired() 
Determine if the callbacks have already been called at least once.
Callbacks Object 
callbacks.fireWith() 
Call all callbacks in a list with the given context and arguments.
Callbacks Object 
callbacks.has() 
Determine whether or not the list has any callbacks attached. If a callback is provided as an argument, determine whether it is in a list.
Callbacks Object 
callbacks.lock() 
Lock a callback list in its current state.
Callbacks Object 
callbacks.locked() 
Determine if the callbacks list has been locked.
Callbacks Object 
callbacks.remove() 
Remove a callback or a collection of callbacks from a callback list.
Events > Form Events | Forms 
.change() 
Bind an event handler to the “change” JavaScript event, or trigger that event on an element.
Selectors > Form | Selectors > jQuery Extensions 
:checkbox Selector 
Selects all elements of type checkbox.
Selectors > Form 
:checked Selector 
Matches all elements that are checked or selected.
Selectors > Hierarchy 
Child Selector (“parent > child”) 
Selects all direct child elements specified by “child” of elements specified by “parent”.
Traversing > Tree Traversal 
.children() 
Get the children of each element in the set of matched elements, optionally filtered by a selector.
Selectors > Basic 
Class Selector (“.class”) 
Selects all elements with the given class.
Effects > Custom | Data | Utilities 
.clearQueue() 
Remove from the queue all items that have not yet been run.
Events > Mouse Events 
.click() 
Bind an event handler to the “click” JavaScript event, or trigger that event on an element.
Manipulation > Copying 
.clone() 
Create a deep copy of the set of matched elements.
Traversing > Tree Traversal 
.closest() 
For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
Selectors > Content Filter 
:contains() Selector 
Select all elements that contain the specified text.
Traversing > Miscellaneous Traversing 
.contents() 
Get the children of each element in the set of matched elements, including text and comment nodes.
Deprecated > Deprecated 1.10 | Internals | Properties > Properties of jQuery Object Instances | Removed 
.context 
The DOM node context originally passed to jQuery(); if none was passed then context will likely be the document.
Events > Mouse Events 
.contextmenu() 
Bind an event handler to the “contextmenu” JavaScript event, or trigger that event on an element.
CSS | Manipulation > Style Properties 
.css() 
Get the value of a computed style property for the first element in the set of matched elements or set one or more CSS properties for every matched element.
Data | Miscellaneous > Data Storage 
.data() 
Store arbitrary data associated with the matched elements or return the value at the named data store for the first element in the set of matched elements.
Events > Mouse Events 
.dblclick() 
Bind an event handler to the “dblclick” JavaScript event, or trigger that event on an element.
Deferred Object 
deferred.always() 
Add handlers to be called when the Deferred object is either resolved or rejected.
Deferred Object 
deferred.catch() 
Add handlers to be called when the Deferred object is rejected.
Deferred Object 
deferred.done() 
Add handlers to be called when the Deferred object is resolved.
Deferred Object 
deferred.fail() 
Add handlers to be called when the Deferred object is rejected.
Deferred Object | Deprecated > Deprecated 1.7 | Removed 
deferred.isRejected() 
Determine whether a Deferred object has been rejected.
Deferred Object | Deprecated > Deprecated 1.7 | Removed 
deferred.isResolved() 
Determine whether a Deferred object has been resolved.
Deferred Object 
deferred.notify() 
Call the progressCallbacks on a Deferred object with the given args.
Deferred Object 
deferred.notifyWith() 
Call the progressCallbacks on a Deferred object with the given context and args.
Deferred Object | Deprecated > Deprecated 1.8 
deferred.pipe() 
Utility method to filter and/or chain Deferreds.
Deferred Object 
deferred.progress() 
Add handlers to be called when the Deferred object generates progress notifications.
Deferred Object 
deferred.promise() 
Return a Deferred’s Promise object.
Deferred Object 
deferred.reject() 
Reject a Deferred object and call any failCallbacks with the given args.
Deferred Object 
deferred.rejectWith() 
Reject a Deferred object and call any failCallbacks with the given context and args.
Deferred Object 
deferred.resolve() 
Resolve a Deferred object and call any doneCallbacks with the given args.
Deferred Object 
deferred.resolveWith() 
Resolve a Deferred object and call any doneCallbacks with the given context and args.
Deferred Object 
deferred.state() 
Determine the current state of a Deferred object.
Deferred Object 
deferred.then() 
Add handlers to be called when the Deferred object is resolved, rejected, or still in progress.
Effects > Custom 
.delay() 
Set a timer to delay execution of subsequent items in the queue.
Deprecated > Deprecated 3.0 | Events > Event Handler Attachment 
.delegate() 
Attach a handler to one or more events for all elements that match the selector, now or in the future, based on a specific set of root elements.
Effects > Custom | Data | Utilities 
.dequeue() 
Execute the next function on the queue for the matched elements.
Selectors > Hierarchy 
Descendant Selector (“ancestor descendant”) 
Selects all elements that are descendants of a given ancestor.
Manipulation > DOM Removal 
.detach() 
Remove the set of matched elements from the DOM.
Deprecated > Deprecated 1.7 | Events > Event Handler Attachment | Removed 
.die() 
Remove event handlers previously attached using .live() from the elements.
Selectors > Form 
:disabled Selector 
Selects all elements that are disabled.
Miscellaneous > Collection Manipulation | Traversing 
.each() 
Iterate over a jQuery object, executing a function for each matched element.
Selectors > Basic 
Element Selector (“element”) 
Selects all elements with the given tag name.
Manipulation > DOM Removal 
.empty() 
Remove all child nodes of the set of matched elements from the DOM.
Selectors > Content Filter 
:empty Selector 
Select all elements that have no children (including text nodes).
Selectors > Form 
:enabled Selector 
Selects all elements that are enabled.
Traversing > Miscellaneous Traversing 
.end() 
End the most recent filtering operation in the current chain and return the set of matched elements to its previous state.
Traversing > Filtering 
.eq() 
Reduce the set of matched elements to the one at the specified index.
Selectors > Basic Filter | Selectors > jQuery Extensions 
:eq() Selector 
Select the element at index n within the matched set.
Events > Browser Events | Deprecated > Deprecated 1.8 | Removed 
.error() 
Bind an event handler to the “error” JavaScript event.
Selectors > Basic Filter | Selectors > jQuery Extensions 
:even Selector 
Selects even elements, zero-indexed. See also odd.
Events > Event Object 
event.currentTarget 
The current DOM element within the event bubbling phase.
Events > Event Object 
event.data 
An optional object of data passed to an event method when the current executing handler is bound.
Events > Event Object | Events 
event.delegateTarget 
The element where the currently-called jQuery event handler was attached.
Events > Event Object 
event.isDefaultPrevented() 
Returns whether event.preventDefault() was ever called on this event object.
Events > Event Object 
event.isImmediatePropagationStopped() 
Returns whether event.stopImmediatePropagation() was ever called on this event object.
Events > Event Object 
event.isPropagationStopped() 
Returns whether event.stopPropagation() was ever called on this event object.
Events > Event Object 
event.metaKey 
Indicates whether the META key was pressed when the event fired.
Events > Event Object 
event.namespace 
The namespace specified when the event was triggered.
Events > Event Object 
event.pageX 
The mouse position relative to the left edge of the document.
Events > Event Object 
event.pageY 
The mouse position relative to the top edge of the document.
Events > Event Object 
event.preventDefault() 
If this method is called, the default action of the event will not be triggered.
Events > Event Object 
event.relatedTarget 
The other DOM element involved in the event, if any.
Events > Event Object 
event.result 
The last value returned by an event handler that was triggered by this event, unless the value was undefined.
Events > Event Object 
event.stopImmediatePropagation() 
Keeps the rest of the handlers from being executed and prevents the event from bubbling up the DOM tree.
Events > Event Object 
event.stopPropagation() 
Prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.
Events > Event Object 
event.target 
The DOM element that initiated the event.
Events > Event Object 
event.timeStamp 
The difference in milliseconds between the time the browser created the event and January 1, 1970.
Events > Event Object 
event.type 
Describes the nature of the event.
Events > Event Object 
event.which 
For key or mouse events, this property indicates the specific key or button that was pressed.
Effects > Fading 
.fadeIn() 
Display the matched elements by fading them to opaque.
Effects > Fading 
.fadeOut() 
Hide the matched elements by fading them to transparent.
Effects > Fading 
.fadeTo() 
Adjust the opacity of the matched elements.
Effects | Effects > Fading 
.fadeToggle() 
Display or hide the matched elements by animating their opacity.
Selectors > Form | Selectors > jQuery Extensions 
:file Selector 
Selects all elements of type file.
Traversing > Filtering 
.filter() 
Reduce the set of matched elements to those that match the selector or pass the function’s test.
Traversing > Tree Traversal 
.find() 
Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.
Effects > Custom 
.finish() 
Stop the currently-running animation, remove all queued animations, and complete all animations for the matched elements.
Traversing > Filtering 
.first() 
Reduce the set of matched elements to the first in the set.
Selectors > Child Filter 
:first-child Selector 
Selects all elements that are the first child of their parent.
Selectors > Child Filter 
:first-of-type Selector 
Selects all elements that are the first among siblings of the same element name.
Selectors > Basic Filter | Selectors > jQuery Extensions 
:first Selector 
Selects the first matched DOM element.
Events > Form Events | Forms 
.focus() 
Bind an event handler to the “focus” JavaScript event, or trigger that event on an element.
Selectors > Basic Filter | Selectors > Form 
:focus Selector 
Selects element if it is currently focused.
Events > Form Events | Forms 
.focusin() 
Bind an event handler to the “focusin” event.
Events > Form Events | Forms 
.focusout() 
Bind an event handler to the “focusout” JavaScript event.
Miscellaneous > DOM Element Methods 
.get() 
Retrieve the DOM elements matched by the jQuery object.
Selectors > Basic Filter | Selectors > jQuery Extensions 
:gt() Selector 
Select all elements at an index greater than index within the matched set.
Traversing > Filtering 
.has() 
Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element.
Selectors > Attribute 
Has Attribute Selector [name] 
Selects elements that have the specified attribute, with any value.
Selectors > Content Filter | Selectors > jQuery Extensions 
:has() Selector 
Selects elements which contain at least one element that matches the specified selector.
Attributes | Manipulation > Class Attribute | CSS 
.hasClass() 
Determine whether any of the matched elements are assigned the given class.
Selectors > Basic Filter | Selectors > jQuery Extensions 
:header Selector 
Selects all elements that are headers, like h1, h2, h3 and so on.
CSS | Dimensions | Manipulation > Style Properties 
.height() 
Get the current computed height for the first element in the set of matched elements or set the height of every matched element.
Selectors > jQuery Extensions | Selectors > Visibility Filter 
:hidden Selector 
Selects all elements that are hidden.
Effects > Basics 
.hide() 
Hide the matched elements.
Events > Mouse Events 
.hover() 
Bind one or two handlers to the matched elements, to be executed when the mouse pointer enters and leaves the elements.
Attributes | Manipulation > DOM Insertion, Inside 
.html() 
Get the HTML contents of the first element in the set of matched elements or set the HTML contents of every matched element.
Selectors > Basic 
ID Selector (“#id”) 
Selects a single element with the given id attribute.
Selectors > Form | Selectors > jQuery Extensions 
:image Selector 
Selects all elements of type image.
Miscellaneous > DOM Element Methods 
.index() 
Search for a given element from among the matched elements.
CSS | Dimensions | Manipulation > Style Properties 
.innerHeight() 
Get the current computed inner height (including padding but not border) for the first element in the set of matched elements or set the inner height of every matched element.
CSS | Dimensions | Manipulation > Style Properties 
.innerWidth() 
Get the current computed inner width (including padding but not border) for the first element in the set of matched elements or set the inner width of every matched element.
Selectors > Form | Selectors > jQuery Extensions 
:input Selector 
Selects all input, textarea, select and button elements.
Manipulation > DOM Insertion, Outside 
.insertAfter() 
Insert every element in the set of matched elements after the target.
Manipulation > DOM Insertion, Outside 
.insertBefore() 
Insert every element in the set of matched elements before the target.
Traversing > Filtering 
.is() 
Check the current matched set of elements against a selector, element, or jQuery object and return true if at least one of these elements matches the given arguments.
Core 
jQuery() 
Return a collection of matched elements either found in the DOM based on passed argument(s) or created by passing an HTML string.
Internals | Properties > Properties of jQuery Object Instances 
.jquery 
A string containing the jQuery version number.
Ajax > Low-Level Interface 
jQuery.ajax() 
Perform an asynchronous HTTP (Ajax) request.
Ajax > Low-Level Interface 
jQuery.ajaxPrefilter() 
Handle custom Ajax options or modify existing options before each request is sent and before they are processed by $.ajax().
Ajax > Low-Level Interface 
jQuery.ajaxSetup() 
Set default values for future Ajax requests. Its use is not recommended.
Ajax > Low-Level Interface 
jQuery.ajaxTransport() 
Creates an object that handles the actual transmission of Ajax data.
Deprecated > Deprecated 1.3 | Removed | Utilities 
jQuery.boxModel 
States if the current page, in the user’s browser, is being rendered using the W3C CSS Box Model. This property was removed in jQuery 1.8. Please try to use feature detection instead.
Deprecated > Deprecated 1.3 | Properties > Properties of the Global jQuery Object | Removed | Utilities 
jQuery.browser 
Contains flags for the useragent, read from navigator.userAgent. This property was removed in jQuery 1.9 and is available only through the jQuery.migrate plugin. Please try to use feature detection instead.
Callbacks Object 
jQuery.Callbacks() 
A multi-purpose callbacks list object that provides a powerful way to manage callback lists.
Utilities 
jQuery.contains() 
Check to see if a DOM element is a descendant of another DOM element.
CSS 
jQuery.cssHooks 
Hook directly into jQuery to override how particular CSS properties are retrieved or set, normalize CSS property naming, or create custom properties.
CSS | Manipulation > Style Properties 
jQuery.cssNumber 
An object containing all CSS properties that may be used without a unit. The .css() method uses this object to see if it may append px to unitless values.
Data | Utilities 
jQuery.data() 
Store arbitrary data associated with the specified element and/or return the value that was set.
Deferred Object 
jQuery.Deferred() 
A factory function that returns a chainable utility object with methods to register multiple callbacks into callback queues, invoke callback queues, and relay the success or failure state of any synchronous or asynchronous function.
Data | Utilities 
jQuery.dequeue() 
Execute the next function on the queue for the matched element.
Utilities 
jQuery.each() 
A generic iterator function, which can be used to seamlessly iterate over both objects and arrays. Arrays and array-like objects with a length property (such as a function’s arguments object) are iterated by numeric index, from 0 to length-1. Other objects are iterated via their named properties.
Internals 
jQuery.error() 
Takes a string and throws an exception containing it.
CSS 
jQuery.escapeSelector() 
Escapes any character that has a special meaning in a CSS selector.
Utilities 
jQuery.extend() 
Merge the contents of two or more objects together into the first object.
Utilities 
jQuery.fn.extend() 
Merge the contents of an object onto the jQuery prototype to provide new jQuery instance methods.
Effects > Custom | Deprecated > Deprecated 3.0 | Properties > Properties of the Global jQuery Object 
jQuery.fx.interval 
The rate (in milliseconds) at which animations fire.
Effects > Custom | Properties > Properties of the Global jQuery Object 
jQuery.fx.off 
Globally disable all animations.
Ajax > Shorthand Methods 
jQuery.get() 
Load data from the server using a HTTP GET request.
Ajax > Shorthand Methods 
jQuery.getJSON() 
Load JSON-encoded data from the server using a GET HTTP request.
Ajax > Shorthand Methods 
jQuery.getScript() 
Load a JavaScript file from the server using a GET HTTP request, then execute it.
Utilities 
jQuery.globalEval() 
Execute some JavaScript code globally.
Utilities 
jQuery.grep() 
Finds the elements of an array which satisfy a filter function. The original array is not affected.
Data 
jQuery.hasData() 
Determine whether an element has any jQuery data associated with it.
Core | Events > Document Loading | Properties > Properties of the Global jQuery Object 
jQuery.holdReady() 
Holds or releases the execution of jQuery’s ready event.
Manipulation 
jQuery.htmlPrefilter() 
Modify and filter HTML strings passed through jQuery manipulation methods.
Utilities 
jQuery.inArray() 
Search for a specified value within an array and return its index (or -1 if not found).
Utilities 
jQuery.isArray() 
Determine whether the argument is an array.
Utilities 
jQuery.isEmptyObject() 
Check to see if an object is empty (contains no enumerable properties).
Utilities 
jQuery.isFunction() 
Determine if the argument passed is a JavaScript function object.
Utilities 
jQuery.isNumeric() 
Determines whether its argument represents a JavaScript number.
Utilities 
jQuery.isPlainObject() 
Check to see if an object is a plain object (created using “{}” or “new Object”).
Utilities 
jQuery.isWindow() 
Determine whether the argument is a window.
Utilities 
jQuery.isXMLDoc() 
Check to see if a DOM node is within an XML document (or is an XML document).
Utilities 
jQuery.makeArray() 
Convert an array-like object into a true JavaScript array.
Utilities 
jQuery.map() 
Translate all items in an array or object to new array of items.
Utilities 
jQuery.merge() 
Merge the contents of two arrays together into the first array.
Core | Miscellaneous > Setup Methods 
jQuery.noConflict() 
Relinquish jQuery’s control of the $ variable.
Utilities 
jQuery.noop() 
An empty function.
Utilities 
jQuery.now() 
Return a number representing the current time.
Miscellaneous > Collection Manipulation | Forms | Ajax > Helper Functions 
jQuery.param() 
Create a serialized representation of an array, a plain object, or a jQuery object suitable for use in a URL query string or Ajax request. In case a jQuery object is passed, it should contain input elements with name/value properties.
Utilities 
jQuery.parseHTML() 
Parses a string into an array of DOM nodes.
Utilities 
jQuery.parseJSON() 
Takes a well-formed JSON string and returns the resulting JavaScript value.
Utilities 
jQuery.parseXML() 
Parses a string into an XML document.
Ajax > Shorthand Methods 
jQuery.post() 
Load data from the server using a HTTP POST request.
Events > Event Handler Attachment | Utilities 
jQuery.proxy() 
Takes a function and returns a new one that will always have a particular context.
Data | Utilities 
jQuery.queue() 
Show or manipulate the queue of functions to be executed on the matched element.
Core | Events > Document Loading | Properties > Properties of the Global jQuery Object 
jQuery.ready 
A Promise-like object (or “thenable”) that resolves when the document is ready.
Core 
jQuery.readyException() 
Handles errors thrown synchronously in functions wrapped in jQuery().
Data | Utilities 
jQuery.removeData() 
Remove a previously-stored piece of data.
Effects > Custom 
jQuery.speed 
Creates an object containing a set of properties ready to be used in the definition of custom animations.
Core | Deprecated > Deprecated 1.7 | Removed 
jQuery.sub() 
Creates a new copy of jQuery whose properties and methods can be modified without affecting the original jQuery object.
Deprecated > Deprecated 1.9 | Properties > Properties of the Global jQuery Object | Utilities 
jQuery.support 
A collection of properties that represent the presence of different browser features or bugs. Intended for jQuery’s internal use; specific properties may be removed when they are no longer needed internally to improve page startup performance. For your own project’s feature-detection needs, we strongly recommend the use of an external library such as Modernizr instead of dependency on properties in jQuery.support.
Utilities 
jQuery.trim() 
Remove the whitespace from the beginning and end of a string.
Utilities 
jQuery.type() 
Determine the internal JavaScript [[Class]] of an object.
Utilities 
jQuery.unique() 
Sorts an array of DOM elements, in place, with the duplicates removed. Note that this only works on arrays of DOM elements, not strings or numbers.
Utilities 
jQuery.uniqueSort() 
Sorts an array of DOM elements, in place, with the duplicates removed. Note that this only works on arrays of DOM elements, not strings or numbers.
Core | Deferred Object 
jQuery.when() 
Provides a way to execute callback functions based on zero or more Thenable objects, usually Deferred objects that represent asynchronous events.
Events > Keyboard Events 
.keydown() 
Bind an event handler to the “keydown” JavaScript event, or trigger that event on an element.
Events > Keyboard Events 
.keypress() 
Bind an event handler to the “keypress” JavaScript event, or trigger that event on an element.
Events > Keyboard Events 
.keyup() 
Bind an event handler to the “keyup” JavaScript event, or trigger that event on an element.
Selectors > Basic Filter 
:lang() Selector 
Selects all elements of the specified language.
Traversing > Filtering 
.last() 
Reduce the set of matched elements to the final one in the set.
Selectors > Child Filter 
:last-child Selector 
Selects all elements that are the last child of their parent.
Selectors > Child Filter 
:last-of-type Selector 
Selects all elements that are the last among siblings of the same element name.
Selectors > Basic Filter | Selectors > jQuery Extensions 
:last Selector 
Selects the last matched element.
Properties > Properties of jQuery Object Instances 
.length 
The number of elements in the jQuery object.
Deprecated > Deprecated 1.7 | Events > Event Handler Attachment | Removed 
.live() 
Attach an event handler for all elements which match the current selector, now and in the future.
Ajax > Shorthand Methods 
.load() 
Load data from the server and place the returned HTML into the matched element.
Deprecated > Deprecated 1.8 | Events > Document Loading | Removed 
.load() 
Bind an event handler to the “load” JavaScript event.
Selectors > Basic Filter | Selectors > jQuery Extensions 
:lt() Selector 
Select all elements at an index less than index within the matched set.
Traversing > Filtering 
.map() 
Pass each element in the current matched set through a function, producing a new jQuery object containing the return values.
Events > Mouse Events 
.mousedown() 
Bind an event handler to the “mousedown” JavaScript event, or trigger that event on an element.
Events > Mouse Events 
.mouseenter() 
Bind an event handler to be fired when the mouse enters an element, or trigger that handler on an element.
Events > Mouse Events 
.mouseleave() 
Bind an event handler to be fired when the mouse leaves an element, or trigger that handler on an element.
Events > Mouse Events 
.mousemove() 
Bind an event handler to the “mousemove” JavaScript event, or trigger that event on an element.
Events > Mouse Events 
.mouseout() 
Bind an event handler to the “mouseout” JavaScript event, or trigger that event on an element.
Events > Mouse Events 
.mouseover() 
Bind an event handler to the “mouseover” JavaScript event, or trigger that event on an element.
Events > Mouse Events 
.mouseup() 
Bind an event handler to the “mouseup” JavaScript event, or trigger that event on an element.
Selectors > Attribute 
Multiple Attribute Selector [name=”value”][name2=”value2″] 
Matches elements that match all of the specified attribute filters.
Selectors > Basic 
Multiple Selector (“selector1, selector2, selectorN”) 
Selects the combined results of all the specified selectors.
Traversing > Tree Traversal 
.next() 
Get the immediately following sibling of each element in the set of matched elements. If a selector is provided, it retrieves the next sibling only if it matches that selector.
Selectors > Hierarchy 
Next Adjacent Selector (“prev + next”) 
Selects all next elements matching “next” that are immediately preceded by a sibling “prev”.
Selectors > Hierarchy 
Next Siblings Selector (“prev ~ siblings”) 
Selects all sibling elements that follow after the “prev” element, have the same parent, and match the filtering “siblings” selector.
Traversing > Tree Traversal 
.nextAll() 
Get all following siblings of each element in the set of matched elements, optionally filtered by a selector.
Traversing > Tree Traversal 
.nextUntil() 
Get all following siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object passed.
Traversing > Filtering | Traversing > Miscellaneous Traversing 
.not() 
Remove elements from the set of matched elements.
Selectors > Basic Filter 
:not() Selector 
Selects all elements that do not match the given selector.
Selectors > Child Filter 
:nth-child() Selector 
Selects all elements that are the nth-child of their parent.
Selectors > Child Filter 
:nth-last-child() Selector 
Selects all elements that are the nth-child of their parent, counting from the last element to the first.
Selectors > Child Filter 
:nth-last-of-type() Selector 
Selects all the elements that are the nth-child of their parent in relation to siblings with the same element name, counting from the last element to the first.
Selectors > Child Filter 
:nth-of-type() Selector 
Selects all elements that are the nth child of their parent in relation to siblings with the same element name.
Selectors > Basic Filter | Selectors > jQuery Extensions 
:odd Selector 
Selects odd elements, zero-indexed. See also even.
Events > Event Handler Attachment 
.off() 
Remove an event handler.
CSS | Offset | Manipulation > Style Properties 
.offset() 
Get the current coordinates of the first element, or set the coordinates of every element, in the set of matched elements, relative to the document.
Offset | Traversing > Tree Traversal 
.offsetParent() 
Get the closest ancestor element that is positioned.
Events > Event Handler Attachment 
.on() 
Attach an event handler function for one or more events to the selected elements.
Events > Event Handler Attachment 
.one() 
Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
Selectors > Child Filter 
:only-child Selector 
Selects all elements that are the only child of their parent.
Selectors > Child Filter 
:only-of-type Selector 
Selects all elements that have no siblings with the same element name.
CSS | Dimensions | Manipulation > Style Properties 
.outerHeight() 
Get the current computed outer height (including padding, border, and optionally margin) for the first element in the set of matched elements or set the outer height of every matched element.
CSS | Dimensions | Manipulation > Style Properties 
.outerWidth() 
Get the current computed outer width (including padding, border, and optionally margin) for the first element in the set of matched elements or set the outer width of every matched element.
Traversing > Tree Traversal 
.parent() 
Get the parent of each element in the current set of matched elements, optionally filtered by a selector.
Selectors > Content Filter | Selectors > jQuery Extensions 
:parent Selector 
Select all elements that have at least one child node (either an element or text).
Traversing > Tree Traversal 
.parents() 
Get the ancestors of each element in the current set of matched elements, optionally filtered by a selector.
Traversing > Tree Traversal 
.parentsUntil() 
Get the ancestors of each element in the current set of matched elements, up to but not including the element matched by the selector, DOM node, or jQuery object.
Selectors > Form | Selectors > jQuery Extensions 
:password Selector 
Selects all elements of type password.
CSS | Offset | Manipulation > Style Properties 
.position() 
Get the current coordinates of the first element in the set of matched elements, relative to the offset parent.
Manipulation > DOM Insertion, Inside 
.prepend() 
Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.
Manipulation > DOM Insertion, Inside 
.prependTo() 
Insert every element in the set of matched elements to the beginning of the target.
Traversing > Tree Traversal 
.prev() 
Get the immediately preceding sibling of each element in the set of matched elements. If a selector is provided, it retrieves the previous sibling only if it matches that selector.
Traversing > Tree Traversal 
.prevAll() 
Get all preceding siblings of each element in the set of matched elements, optionally filtered by a selector.
Traversing > Tree Traversal 
.prevUntil() 
Get all preceding siblings of each element up to but not including the element matched by the selector, DOM node, or jQuery object.
Deferred Object 
.promise() 
Return a Promise object to observe when all actions of a certain type bound to the collection, queued or not, have finished.
Attributes | Manipulation > General Attributes 
.prop() 
Get the value of a property for the first element in the set of matched elements or set one or more properties for every matched element.
Internals 
.pushStack() 
Add a collection of DOM elements onto the jQuery stack.
Effects > Custom | Data | Utilities 
.queue() 
Show or manipulate the queue of functions to be executed on the matched elements.
Selectors > Form | Selectors > jQuery Extensions 
:radio Selector 
Selects all elements of type radio.
Events > Document Loading 
.ready() 
Specify a function to execute when the DOM is fully loaded.
Manipulation > DOM Removal 
.remove() 
Remove the set of matched elements from the DOM.
Attributes | Manipulation > General Attributes 
.removeAttr() 
Remove an attribute from each element in the set of matched elements.
Attributes | Manipulation > Class Attribute | CSS 
.removeClass() 
Remove a single class, multiple classes, or all classes from each element in the set of matched elements.
Data | Miscellaneous > Data Storage 
.removeData() 
Remove a previously-stored piece of data.
Attributes | Manipulation > General Attributes 
.removeProp() 
Remove a property for the set of matched elements.
Manipulation > DOM Replacement 
.replaceAll() 
Replace each target element with the set of matched elements.
Manipulation > DOM Replacement 
.replaceWith() 
Replace each element in the set of matched elements with the provided new content and return the set of elements that was removed.
Selectors > Form | Selectors > jQuery Extensions 
:reset Selector 
Selects all elements of type reset.
Events > Browser Events 
.resize() 
Bind an event handler to the “resize” JavaScript event, or trigger that event on an element.
Selectors > Basic Filter 
:root Selector 
Selects the element that is the root of the document.
Events > Browser Events 
.scroll() 
Bind an event handler to the “scroll” JavaScript event, or trigger that event on an element.
CSS | Offset | Manipulation > Style Properties 
.scrollLeft() 
Get the current horizontal position of the scroll bar for the first element in the set of matched elements or set the horizontal position of the scroll bar for every matched element.
CSS | Offset | Manipulation > Style Properties 
.scrollTop() 
Get the current vertical position of the scroll bar for the first element in the set of matched elements or set the vertical position of the scroll bar for every matched element.
Events > Form Events | Forms 
.select() 
Bind an event handler to the “select” JavaScript event, or trigger that event on an element.
Selectors > Form | Selectors > jQuery Extensions 
:selected Selector 
Selects all elements that are selected.
Deprecated > Deprecated 1.7 | Internals | Properties > Properties of jQuery Object Instances | Removed 
.selector 
A selector representing selector passed to jQuery(), if any, when creating the original set.
Forms | Ajax > Helper Functions 
.serialize() 
Encode a set of form elements as a string for submission.
Forms | Ajax > Helper Functions 
.serializeArray() 
Encode a set of form elements as an array of names and values.
Effects > Basics 
.show() 
Display the matched elements.
Traversing > Tree Traversal 
.siblings() 
Get the siblings of each element in the set of matched elements, optionally filtered by a selector.
Deprecated > Deprecated 1.8 | Miscellaneous > DOM Element Methods | Removed 
.size() 
Return the number of elements in the jQuery object.
Traversing > Filtering 
.slice() 
Reduce the set of matched elements to a subset specified by a range of indices.
Effects > Sliding 
.slideDown() 
Display the matched elements with a sliding motion.
Effects > Sliding 
.slideToggle() 
Display or hide the matched elements with a sliding motion.
Effects > Sliding 
.slideUp() 
Hide the matched elements with a sliding motion.
Effects > Custom 
.stop() 
Stop the currently-running animation on the matched elements.
Events > Form Events | Forms 
.submit() 
Bind an event handler to the “submit” JavaScript event, or trigger that event on an element.
Selectors > Form | Selectors > jQuery Extensions 
:submit Selector 
Selects all elements of type submit.
Selectors > Basic Filter 
:target Selector 
Selects the target element indicated by the fragment identifier of the document’s URI.
Manipulation > DOM Insertion, Inside 
.text() 
Get the combined text contents of each element in the set of matched elements, including their descendants, or set the text contents of the matched elements.
Selectors > Form | Selectors > jQuery Extensions 
:text Selector 
Selects all input elements of type text.
Miscellaneous > DOM Element Methods 
.toArray() 
Retrieve all the elements contained in the jQuery set, as an array.
Effects > Basics 
.toggle() 
Display or hide the matched elements.
Deprecated > Deprecated 1.8 | Events > Mouse Events | Removed 
.toggle() 
Bind two or more handlers to the matched elements, to be executed on alternate clicks.
Attributes | Manipulation > Class Attribute | CSS 
.toggleClass() 
Add or remove one or more classes from each element in the set of matched elements, depending on either the class’s presence or the value of the state argument.
Events > Event Handler Attachment 
.trigger() 
Execute all handlers and behaviors attached to the matched elements for the given event type.
Events > Event Handler Attachment 
.triggerHandler() 
Execute all handlers attached to an element for an event.
Deprecated > Deprecated 3.0 | Events > Event Handler Attachment 
.unbind() 
Remove a previously-attached event handler from the elements.
Deprecated > Deprecated 3.0 | Events > Event Handler Attachment 
.undelegate() 
Remove a handler from the event for all elements which match the current selector, based upon a specific set of root elements.
Deprecated > Deprecated 1.8 | Events > Document Loading | Removed 
.unload() 
Bind an event handler to the “unload” JavaScript event.
Manipulation > DOM Insertion, Around | Manipulation > DOM Removal 
.unwrap() 
Remove the parents of the set of matched elements from the DOM, leaving the matched elements in their place.
Attributes | Forms | Manipulation > General Attributes 
.val() 
Get the current value of the first element in the set of matched elements or set the value of every matched element.
Selectors > jQuery Extensions | Selectors > Visibility Filter 
:visible Selector 
Selects all elements that are visible.
CSS | Dimensions | Manipulation > Style Properties 
.width() 
Get the current computed width for the first element in the set of matched elements or set the width of every matched element.
Manipulation > DOM Insertion, Around 
.wrap() 
Wrap an HTML structure around each element in the set of matched elements.
Manipulation > DOM Insertion, Around 
.wrapAll() 
Wrap an HTML structure around all elements in the set of matched elements.
Manipulation > DOM Insertion, Around 
.wrapInner() 
Wrap an HTML structure around the content of each element in the set of matched elements.

JavaScript: The Definitive Guide 
https://github.com/LenguajeJulia/Julia-Tutorial-2/blob/master/%E5%A5%BD%E4%B9%A6/Oreilly.JavaScript.The.Definitive.Guide.6th.Edition.Apr.2011.pdf
Learning JavaScript Design Patterns - https://addyosmani.com/resources/essentialjsdesignpatterns/book/
