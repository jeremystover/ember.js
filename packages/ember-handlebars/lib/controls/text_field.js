require("ember-handlebars/ext");
require("ember-views/views/view");
require("ember-handlebars/controls/text_support");

/**
@module ember
@submodule ember-handlebars
*/

var get = Ember.get, set = Ember.set;

/**
  The `Ember.TextField` view class renders a text
  [input](https://developer.mozilla.org/en/HTML/Element/Input) element. It
  allows for binding Ember properties to the text field contents (`value`),
  live-updating as the user inputs text.

  Example:

  ```handlebars
  {{view Ember.TextField valueBinding="firstName"}}
  ```

  ## Layout and LayoutName properties

  Because HTML `input` elements are self closing `layout` and `layoutName`
  properties will not be applied. See `Ember.View`'s layout section for more
  information.

  ## HTML Attributes

  By default `Ember.TextField` provides support for `type`, `value`, `size`,
  `placeholder`, `disabled`, `maxlength` and `tabindex` attributes on a
  test field. If you need to support more attributes have a look at the
  `attributeBindings` property in `Ember.View`'s HTML Attributes section.

  To globally add support for additional attributes you can reopen
  `Ember.TextField` or `Ember.TextSupport`.

  ```javascript
  Ember.TextSupport.reopen({
    attributeBindings: ["required"]
  })
  ```

  @class TextField
  @namespace Ember
  @extends Ember.View
  @uses Ember.TextSupport
*/
Ember.TextField = Ember.View.extend(Ember.TextSupport,
  /** @scope Ember.TextField.prototype */ {

  classNames: ['ember-text-field'],
  tagName: "input",
  attributeBindings: ['type', 'value', 'size'],

  /**
    The `value` attribute of the input element. As the user inputs text, this
    property is updated live.

    @property value
    @type String
    @default ""
  */
  value: "",

  /**
    The `type` attribute of the input element.

    @property type
    @type String
    @default "text"
  */
  type: "text",

  /**
    The `size` of the text field in characters.

    @property size
    @type String
    @default null
  */
  size: null,

  /**
    The action to be sent when the user presses the return key.

    This is similar to the `{{action}}` helper, but is fired when
    the user presses the return key when editing a text field, and sends
    the value of the field as the context.

   @property action
   @type String
   @default null
  */
  action: null,

  insertNewline: function() {
    var controller = get(this, 'controller'),
        action = get(this, 'action');

    if (action) {
      controller.send(action, get(this, 'value'));
    }

    return false;
  }
});
