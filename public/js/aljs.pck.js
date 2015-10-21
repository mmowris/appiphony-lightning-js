(function() {

Ember.TEMPLATES["aljs"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("<img src=\"images/aljs-icon.svg\" class=\"aljs-icon\"> Appiphony Lightning JS");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            <li class=\"slds-list__item slds-has-divider\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "section.path", options) : helperMissing.call(depth0, "link-to", "section.path", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n        ");
  return buffer;
  }
function program4(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "section.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

  data.buffer.push("<header class=\"site-banner\" role=\"banner\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("aljs-home-link")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "home", options) : helperMissing.call(depth0, "link-to", "home", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</header>\n<main class=\"site-main\" role=\"main\">\n    <div class=\"site-content\">\n        ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</main>\n<nav id=\"navigation\" class=\"site-navigation\" role=\"navigation\">\n    <ul class=\"slds-list--vertical slds-has-block-links\">\n        ");
  stack1 = helpers.each.call(depth0, "section", "in", "sections", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </ul>\n</nav>\n<footer class=\"site-contentinfo slds-wrap site-text-longform slds-text-body--small\" role=\"contentinfo\">\n    <p class=\"slds-col--padded slds-p-right--large\">&copy; 2015 <a href=\"http://appiphony.com\" target=\"_blank\">Appiphony, LLC</a>. All rights reserved. The Salesforce Sans Font is used under license from Salesforce.com, Inc.</p>\n</footer>");
  return buffer;
  
});
Ember.TEMPLATES["datepickers"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<header class=\"site-masthead slds-grid\">\n    <div class=\"site-masthead-title slds-col slds-has-flexi-truncate slds-align-middle\">\n        <div class=\"slds-media__body\">\n            <div class=\"slds-grid\">\n                <h1 title=\"Appiphony Lightning JS\" class=\"slds-p-left--large\">Datepickers</h1></div>\n        </div>\n    </div>\n</header>\n<div class=\"site-content slds-p-around--xx-large site-design site-design-layout\">\nTest\n</div>\n<div class=\"site-resources--landing slds-p-vertical--small\">\n    <ul class=\"slds-grid slds-wrap slds-grid--align-spread slds-grid--pull-padded-large\">\n        <li class=\"slds-col--padded-large slds-size--1-of-1 slds-large-size--1-of-2\">\n            <div class=\"grid-card\">\n                <div class=\"slds-grid slds-grid--align-spread\">\n                    <h3 class=\"site-text-heading--label-weak-large slds-align-middle\" id=\"downloads-header\">jQuery</h3></div>\n                <hr class=\"hr hr--pink\">\n                <iframe src=\"./demo-datepicker-1.html\"></iframe>\n        </li>\n        <li class=\"slds-col--padded-large slds-size--1-of-1 slds-large-size--1-of-2\">\n            <div class=\"grid-card\">\n                <div class=\"slds-grid slds-grid--align-spread\">\n                    <h3 class=\"site-text-heading--label-weak-large slds-align-middle\" id=\"tutorials-header\">Ember (Coming Soon)</h3></div>\n                <hr class=\"hr hr--orange\">\n                <p>Blah blah blah</p>\n            </div>\n        </li>\n    </ul>\n</div>");
  
});
Ember.TEMPLATES["home"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<header class=\"site-masthead slds-grid aljs-home-header\">\n    <div class=\"site-masthead-title slds-col slds-has-flexi-truncate slds-align-middle\">\n        <div class=\"slds-media__body aljs-header-container\">\n            <img src=\"images/aljs-logo.svg\" class=\"aljs-logo\">\n            <h2 class=\"slds-p-top--large slds-text-heading--medium\">Your JS Solution for the Lightning Design System</h2>\n            <p class=\"slds-p-top--xx-large\"><a class=\"slds-button slds-button--inverse\" href=\"#\">Download Latest</a> <a class=\"slds-button slds-button--inverse\" href=\"#\">Fork on GitHub</a></p>\n            <p class=\"slds-p-top--medium\"><strong>Current release:</strong> 0.0.1</p>\n        </div>\n    </div>\n</header>\n<div class=\"site-content slds-p-around--xx-large site-design site-design-layout\">\n    <div class=\"slds-grid slds-wrap\">\n        <div class=\"slds-col slds-p-right--xx-large slds-size--1-of-1 slds-large-size--1-of-4\">\n            <h2 class=\"slds-text-heading--medium slds-m-top--xx-small\">Available in Two Flavors</h2>\n            <p class=\"slds-p-vertical--medium\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus vestibulum justo, nec molestie leo. Nam metus nibh, gravida vitae consequat in, molestie ut libero.</p>\n        </div>\n        <div class=\"slds-col slds-size--1-of-1 slds-large-size--3-of-4\">\n            <div class=\"site-resources--landing slds-p-vertical--xx-small\">\n                <ul class=\"slds-grid slds-wrap slds-grid--align-spread slds-grid--pull-padded-large\">\n                    <li class=\"slds-col--padded-large slds-size--1-of-1 slds-large-size--1-of-2\">\n                        <div class=\"grid-card\">\n                            <img src=\"images/jquery-logo.svg\" class=\"jquery-logo\">\n                            <hr class=\"hr hr--blue\">\n                            <p>jQuery is a fast, small, and feature-rich JavaScript library. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.</p>\n                        </div>\n                    </li>\n                    <li class=\"slds-col--padded-large slds-size--1-of-1 slds-large-size--1-of-2\">\n                        <div class=\"grid-card\">\n                            <img src=\"images/ember-logo.svg\" class=\"ember-logo\">\n                            <hr class=\"hr hr--orange\">\n                            <p>Ember.js helps developers be more productive out of the box. Designed with developer ergonomics in mind, its friendly APIs help you get your job done—fast.</p>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>");
  
});
Ember.TEMPLATES["modals"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<header class=\"site-masthead slds-grid\">\n    <div class=\"site-masthead-title slds-col slds-has-flexi-truncate slds-align-middle\">\n        <div class=\"slds-media__body\">\n            <div class=\"slds-grid\">\n                <h1 title=\"Appiphony Lightning JS\" class=\"slds-p-left--large\">Modals</h1></div>\n        </div>\n    </div>\n</header>\n<div class=\"site-content slds-p-around--xx-large site-design site-design-layout\">\nTest\n</div>\n<div class=\"site-resources--landing slds-p-vertical--small\">\n    <ul class=\"slds-grid slds-wrap slds-grid--align-spread slds-grid--pull-padded-large\">\n        <li class=\"slds-col--padded-large slds-size--1-of-1 slds-large-size--1-of-2\">\n            <div class=\"grid-card\">\n                <div class=\"slds-grid slds-grid--align-spread\">\n                    <h3 class=\"site-text-heading--label-weak-large slds-align-middle\" id=\"downloads-header\">jQuery</h3></div>\n                <hr class=\"hr hr--pink\">\n                <p>Blah blah blah</p><a class=\"slds-button slds-button--neutral slds-m-top--large\" href=\"#\">Download</a></div>\n        </li>\n        <li class=\"slds-col--padded-large slds-size--1-of-1 slds-large-size--1-of-2\">\n            <div class=\"grid-card\">\n                <div class=\"slds-grid slds-grid--align-spread\">\n                    <h3 class=\"site-text-heading--label-weak-large slds-align-middle\" id=\"tutorials-header\">Ember (Coming Soon)</h3></div>\n                <hr class=\"hr hr--orange\">\n                <p>Blah blah blah</p>\n            </div>\n        </li>\n    </ul>\n</div>");
  
});
Ember.TEMPLATES["picklists"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n                    <div>\n                        afasdsa\n                    </div>\n                    <highlight><div>\n                        afsaasassa\n                    </div></highlight>\n                ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n                    falkfjalsf\n                ");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n                    <div>\n                        afasdsa\n                    </div>\n                ");
  }

  data.buffer.push("<header class=\"site-masthead slds-grid\">\n    <div class=\"site-masthead-title slds-col slds-has-flexi-truncate slds-align-middle\">\n        <div class=\"slds-media__body\">\n            <div class=\"slds-grid\">\n                <h1 title=\"Appiphony Lightning JS\" class=\"slds-p-left--large\">Picklists</h1></div>\n        </div>\n    </div>\n</header>\n<div class=\"site-main-content slds-p-around--xx-large site-design site-design-layout\">\n    <p class=\"site-text-introduction\">Intro paragraph.</p>\n    <p>Paragraph.</p>\n    <h4 class=\"site-text-heading--label\">Subhead</h4>\n    <p>Paragraph.</p>\n    <h2 class=\"slds-p-top--xx-large site-text-heading--large site-text-heading--callout site-jump-anchor__container slds-m-bottom--medium\" type=\"h2\"><span id=\"base\" class=\"site-text-heading--large site-text-heading--callout\">Base</span><span class=\"slds-badge slds-m-left--medium slds-shrink-none slds-align-middle\">prototype</span></h2>\n    <div class=\"slds-tabs--default\">\n        <ul class=\"slds-tabs--default__nav\" role=\"tablist\">\n            <li class=\"slds-tabs__item slds-text-heading--label slds-active\" aria-controls=\"iframe-1\" aria-describedby=\"components-picklists-base\" content=\"[object Object]\" role=\"presentation\">\n                <a tabindex=\"0\" aria-selected=\"true\">\n                    <svg aria-hidden=\"true\" class=\"slds-icon icon__svg icon-utility-desktop slds-icon--x-small slds-icon-text-default slds-m-right--x-small\">\n                        <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/icons/utility-sprite/svg/symbols.svg#desktop\"></use>\n                    </svg>\n                    Large\n                </a>\n            </li>\n        </ul>\n        <div id=\"iframe-1\" class=\"site-example--content slds-m-bottom--xx-large slds-scrollable--x slds-tabs__content slds-show\" role=\"tabpanel\">\n            <iframe src=\"./demo-picklist-2.html\" height=\"272\" name=\"components-picklists-base\" data-form-factor=\"desktop\" scrolling=\"no\"></iframe>\n        </div>\n    </div>\n    <div class=\"slds-tabs--default\">\n        <ul class=\"slds-tabs--default__nav\" role=\"tablist\">\n            <li class=\"slds-tabs__item slds-text-heading--label slds-active\" aria-controls=\"markup-1\" aria-describedby=\"components-picklists-base\" content=\"[object Object]\" role=\"presentation\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "clickSection", "jQuery", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n                <a tabindex=\"0\" aria-selected=\"true\">\n                    jQuery\n                </a>\n            </li>\n            <li class=\"slds-tabs__item slds-text-heading--label\" aria-controls=\"markup-2\" aria-describedby=\"components-picklists-base\" content=\"[object Object]\" role=\"presentation\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "clickSection", "ember", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data})));
  data.buffer.push(">\n                <a tabindex=\"0\" aria-selected=\"true\">\n                    Ember\n                </a>\n            </li>\n        </ul>\n        Test\n        ");
  stack1 = helpers._triageMustache.call(depth0, "selectedSection", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = helpers._triageMustache.call(depth0, "sectionPartial", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        <div id=\"markup-1\" class=\"site-example--content slds-m-bottom--xx-large slds-scrollable--x slds-tabs__content slds-show\" role=\"tabpanel\">\n            <div class=\"slds-p-horizontal--medium\">\n                ");
  stack1 = (helper = helpers['aljs-pre-container'] || (depth0 && depth0['aljs-pre-container']),options={hash:{
    'type': ("html")
  },hashTypes:{'type': "STRING"},hashContexts:{'type': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "aljs-pre-container", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  stack1 = (helper = helpers['aljs-pre-container'] || (depth0 && depth0['aljs-pre-container']),options={hash:{
    'type': ("js")
  },hashTypes:{'type': "STRING"},hashContexts:{'type': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "aljs-pre-container", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n        </div>\n        <div id=\"markup-2\" class=\"site-example--content slds-m-bottom--xx-large slds-scrollable--x slds-tabs__content slds-show\" role=\"tabpanel\">\n            <div class=\"slds-p-horizontal--medium\">\n                ");
  stack1 = (helper = helpers['aljs-pre-container'] || (depth0 && depth0['aljs-pre-container']),options={hash:{
    'type': ("html")
  },hashTypes:{'type': "STRING"},hashContexts:{'type': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "aljs-pre-container", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                ");
  stack1 = (helper = helpers['aljs-pre-container'] || (depth0 && depth0['aljs-pre-container']),options={hash:{
    'type': ("js")
  },hashTypes:{'type': "STRING"},hashContexts:{'type': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "aljs-pre-container", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n        </div>\n    </div>\n\n</div>");
  return buffer;
  
});
Ember.TEMPLATES["popovers"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<header class=\"site-masthead slds-grid\">\n    <div class=\"site-masthead-title slds-col slds-has-flexi-truncate slds-align-middle\">\n        <div class=\"slds-media__body\">\n            <div class=\"slds-grid\">\n                <h1 title=\"Appiphony Lightning JS\" class=\"slds-p-left--large\">Popovers</h1></div>\n        </div>\n    </div>\n</header>\n<div class=\"site-content slds-p-around--xx-large site-design site-design-layout\">\nTest\n</div>\n<div class=\"site-resources--landing slds-p-vertical--small\">\n    <ul class=\"slds-grid slds-wrap slds-grid--align-spread slds-grid--pull-padded-large\">\n        <li class=\"slds-col--padded-large slds-size--1-of-1 slds-large-size--1-of-2\">\n            <div class=\"grid-card\">\n                <div class=\"slds-grid slds-grid--align-spread\">\n                    <h3 class=\"site-text-heading--label-weak-large slds-align-middle\" id=\"downloads-header\">jQuery</h3></div>\n                <hr class=\"hr hr--pink\">\n                <p>Blah blah blah</p><a class=\"slds-button slds-button--neutral slds-m-top--large\" href=\"#\">Download</a></div>\n        </li>\n        <li class=\"slds-col--padded-large slds-size--1-of-1 slds-large-size--1-of-2\">\n            <div class=\"grid-card\">\n                <div class=\"slds-grid slds-grid--align-spread\">\n                    <h3 class=\"site-text-heading--label-weak-large slds-align-middle\" id=\"tutorials-header\">Ember (Coming Soon)</h3></div>\n                <hr class=\"hr hr--orange\">\n                <p>Blah blah blah</p>\n            </div>\n        </li>\n    </ul>\n</div>");
  
});
Ember.TEMPLATES["tooltips"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<header class=\"site-masthead slds-grid\">\n    <div class=\"site-masthead-title slds-col slds-has-flexi-truncate slds-align-middle\">\n        <div class=\"slds-media__body\">\n            <div class=\"slds-grid\">\n                <h1 title=\"Appiphony Lightning JS\" class=\"slds-p-left--large\">Tooltips</h1></div>\n        </div>\n    </div>\n</header>\n<div class=\"site-content slds-p-around--xx-large site-design site-design-layout\">\nTest\n</div>\n<div class=\"site-resources--landing slds-p-vertical--small\">\n    <ul class=\"slds-grid slds-wrap slds-grid--align-spread slds-grid--pull-padded-large\">\n        <li class=\"slds-col--padded-large slds-size--1-of-1 slds-large-size--1-of-2\">\n            <div class=\"grid-card\">\n                <div class=\"slds-grid slds-grid--align-spread\">\n                    <h3 class=\"site-text-heading--label-weak-large slds-align-middle\" id=\"downloads-header\">jQuery</h3>\n                </div>\n                <hr class=\"hr hr--pink\">\n                <iframe src=\"./demo-tooltip-1.html\"></iframe>\n            </div>\n        </li>\n        <li class=\"slds-col--padded-large slds-size--1-of-1 slds-large-size--1-of-2\">\n            <div class=\"grid-card\">\n                <div class=\"slds-grid slds-grid--align-spread\">\n                    <h3 class=\"site-text-heading--label-weak-large slds-align-middle\" id=\"tutorials-header\">Ember (Coming Soon)</h3></div>\n                <hr class=\"hr hr--orange\">\n                <p>Blah blah blah</p>\n            </div>\n        </li>\n    </ul>\n</div>");
  
});
Ember.TEMPLATES["components/aljs-pre-container"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<pre ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'type': ("type")
  },hashTypes:{'type': "STRING"},hashContexts:{'type': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n	<code>\n	</code>\n</pre>\n\n<div data-aljs=\"yield\">\n	");
  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});

})();

(function() {

// Kick off Ember
App = Ember.Application.create({
    rootElement: '#app'
});

App.AljsView = Ember.View.extend({
    didInsertElement: function() {
        
    }
});

App.SelectedSectionMixin = Ember.Mixin.create({
    needs: ['aljs'],
    selectedSectionBinding: 'controllers.aljs.selectedSection',
    sectionPartial: function() {
        return (this.get('routeName') + ' ' + this.get('selectedSection')).camelize();
    }.property('selectedSection', 'routeName')
});

App.AljsPreContainerComponent = Ember.Component.extend({
    layoutName: 'components/aljs-pre-container',
    classNames: 'aljs-pre-container',
    didInsertElement: function() {
        var $this = this.$();
        console.log($this.find('[data-aljs="yield"]').html());
        var markup = $this.find('[data-aljs="yield"]').remove().html()
                            .replace(/<\/{0,1}([^\/highlight].*)>/g, '&lt;$1&gt;')
                            .replace(/<highlight>/g, '<span class="highlight">')
                            .replace(/<\/highlight>/g, '<\/span>');
                            console.log(markup);
        $this.find('code:first').append(markup);
        //$this.find('pre:first').prettyPre();
    }
});

App.PicklistsController = Ember.ObjectController.extend(App.SelectedSectionMixin, {
    routeName: 'picklist'
});

App.AljsController = Ember.ObjectController.extend({
    init: function() {
        this._super();
    } 
});

App.AljsRoute = Ember.Route.extend({
    model: function (){
        return {
            sections: [
                {
                    path: 'modals',
                    name: 'Modals'
                },
                {
                    path: 'picklists',
                    name: 'Picklists'
                },
                {
                    path: 'tooltips',
                    name: 'Tooltips'
                },
                {
                    path: 'popovers',
                    name: 'Popovers'
                },
                {
                    path: 'datepickers',
                    name: 'Datepickers'
                }
            ]
        };
    },
    setupController: function(controller, model) {
        controller.set('model', model);
        controller.set('selectedSection', 'jQuery');
    },
    actions: {
        clickSection: function(section) {
            this.controllerFor('aljs').set('selectedSection', section);
        }
    }
});

// Router
App.Router.map(function() {
    this.resource('aljs', { path: '/' }, function() {
        this.resource('home', { path: '/' });
    	this.resource('modals');
    	this.resource('picklists');
    	this.resource('tooltips');
    	this.resource('popovers');
    	this.resource('datepickers');
    });
});


// // This setting disables the detail routing from showing up in the navbar.
App.Router.reopen( {
    location: 'none'
});



})();//@ sourceMappingURL=../../public/js/aljs.map