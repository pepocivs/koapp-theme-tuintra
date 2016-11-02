describe('Theme e2e test', function() {
  beforeAll(function() {
    browser.driver.manage().window().setSize(400, 666);
    browser.get('http://localhost:9001/#/menu-abcd/elements-abcd');
    browser.waitForAngular();
  });

  it('should click the dialog', function(){
    var button = element(by.css('#content > div > div > div > section:nth-child(6) > div:nth-child(4) > nuevo-tema-button'));
    var EC = protractor.ExpectedConditions;

    browser.wait(EC.elementToBeClickable(button), 20000);
    button.click();
  });

  it('should load koa-menu & koa-submenu', function() {
    var identifier = '#content > div > div > div > section:nth-child(14) > h3';
    expect(element(by.css(identifier))).toBeDefined();
    element(by.css(identifier)).getText().then(function(text) {
      expect(text).toBe('koa-menu & koa-submenu');
    });
  });

  it('should display tuintra-menu & tuintra-submenu (koa-menu & koa-submenu)', function() {
    var identifier = '#content > div > div > div > section:nth-child(14)';
    element(by.css(identifier)).getAttribute('outerHTML').then(function(text) {
      expect(text).toMatch(/tuintra-menu/);
    });
    element(by.css(identifier)).getAttribute('outerHTML').then(function(text) {
      expect(text).toMatch(/tuintra-submenu/);
    });
  });

  it('should load koa-input & koa-textarea', function() {
    var identifier = '#content > div > div > div > section:nth-child(12) > h3';
    expect(element(by.css(identifier))).toBeDefined();
    element(by.css(identifier)).getText().then(function(text) {
      expect(text).toBe('koa-input & koa-textarea');
    });
  });

  it('should display tuintra-input & tuintra-textarea (koa-input & koa-textarea)', function() {
    var identifier = '#content > div > div > div > section:nth-child(12)';
    element(by.css(identifier)).getAttribute('outerHTML').then(function(text) {
      expect(text).toMatch(/tuintra-input/);
    });
    element(by.css(identifier)).getAttribute('outerHTML').then(function(text) {
      expect(text).toMatch(/tuintra-textarea/);
    });

  });




  it('should load koa-badge', function() {
    var identifier = '#content > div > div > div > section:nth-child(2) > h3';
    expect(element(by.css(identifier))).toBeDefined();
    element(by.css(identifier)).getText().then(function(text) {
      expect(text).toBe('koa-badge');
    });
  });

  it('should display tuintra-badge (koa-badge)', function() {
    element(by.css('#content > div > div > div > section:nth-child(2)')).getAttribute('outerHTML').then(function(text) {
      expect(text).toMatch(/tuintra-badge/);
    });
  });

    it('should display tuintra-badge (koa-badge with a minimum dimensions)', function() {

      var selector = 'tuintra-badge';

      browser.executeScript(computedDetails(selector,'height')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });


      browser.executeScript(computedDetails(selector,'width')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });

    });

    it('should register tuintra-badge (koa-badge as a Polymer Element)', function() {
      expect(browser.executeScript(isElementRegistered("tuintra-badge"))).toBe(true);
    });




  it('should load koa-button', function() {
    var identifier = '#content > div > div > div > section:nth-child(3) > h3';
    expect(element(by.css(identifier))).toBeDefined();
    element(by.css(identifier)).getText().then(function(text) {
      expect(text).toBe('koa-button');
    });
  });

  it('should display tuintra-button (koa-button)', function() {
    element(by.css('#content > div > div > div > section:nth-child(3)')).getAttribute('outerHTML').then(function(text) {
      expect(text).toMatch(/tuintra-button/);
    });
  });

    it('should display tuintra-button (koa-button with a minimum dimensions)', function() {

      var selector = 'tuintra-button';

      browser.executeScript(computedDetails(selector,'height')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });


      browser.executeScript(computedDetails(selector,'width')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });

    });

    it('should register tuintra-button (koa-button as a Polymer Element)', function() {
      expect(browser.executeScript(isElementRegistered("tuintra-button"))).toBe(true);
    });




  it('should load koa-card', function() {
    var identifier = '#content > div > div > div > section:nth-child(4) > h3';
    expect(element(by.css(identifier))).toBeDefined();
    element(by.css(identifier)).getText().then(function(text) {
      expect(text).toBe('koa-card');
    });
  });

  it('should display tuintra-card (koa-card)', function() {
    element(by.css('#content > div > div > div > section:nth-child(4)')).getAttribute('outerHTML').then(function(text) {
      expect(text).toMatch(/tuintra-card/);
    });
  });

    it('should display tuintra-card (koa-card with a minimum dimensions)', function() {

      var selector = 'tuintra-card';

      browser.executeScript(computedDetails(selector,'height')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });


      browser.executeScript(computedDetails(selector,'width')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });

    });

    it('should register tuintra-card (koa-card as a Polymer Element)', function() {
      expect(browser.executeScript(isElementRegistered("tuintra-card"))).toBe(true);
    });




  it('should load koa-checkbox', function() {
    var identifier = '#content > div > div > div > section:nth-child(5) > h3';
    expect(element(by.css(identifier))).toBeDefined();
    element(by.css(identifier)).getText().then(function(text) {
      expect(text).toBe('koa-checkbox');
    });
  });

  it('should display tuintra-checkbox (koa-checkbox)', function() {
    element(by.css('#content > div > div > div > section:nth-child(5)')).getAttribute('outerHTML').then(function(text) {
      expect(text).toMatch(/tuintra-checkbox/);
    });
  });

    it('should display tuintra-checkbox (koa-checkbox with a minimum dimensions)', function() {

      var selector = 'tuintra-checkbox';

      browser.executeScript(computedDetails(selector,'height')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });


      browser.executeScript(computedDetails(selector,'width')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });

    });

    it('should register tuintra-checkbox (koa-checkbox as a Polymer Element)', function() {
      expect(browser.executeScript(isElementRegistered("tuintra-checkbox"))).toBe(true);
    });




  it('should load koa-dialog', function() {
    var identifier = '#content > div > div > div > section:nth-child(6) > h3';
    expect(element(by.css(identifier))).toBeDefined();
    element(by.css(identifier)).getText().then(function(text) {
      expect(text).toBe('koa-dialog');
    });
  });

  it('should display tuintra-dialog (koa-dialog)', function() {
    element(by.css('#content > div > div > div > section:nth-child(6)')).getAttribute('outerHTML').then(function(text) {
      expect(text).toMatch(/tuintra-dialog/);
    });
  });

    it('should display tuintra-dialog (koa-dialog with a minimum dimensions)', function() {

      var selector = 'tuintra-dialog';

      browser.executeScript(computedDetails(selector,'height')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });


      browser.executeScript(computedDetails(selector,'width')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });

    });

    it('should register tuintra-dialog (koa-dialog as a Polymer Element)', function() {
      expect(browser.executeScript(isElementRegistered("tuintra-dialog"))).toBe(true);
    });




  it('should load koa-dropdown-menu', function() {
    var identifier = '#content > div > div > div > section:nth-child(8) > h3';
    expect(element(by.css(identifier))).toBeDefined();
    element(by.css(identifier)).getText().then(function(text) {
      expect(text).toBe('koa-dropdown-menu');
    });
  });

  it('should display tuintra-dropdown-menu (koa-dropdown-menu)', function() {
    element(by.css('#content > div > div > div > section:nth-child(8)')).getAttribute('outerHTML').then(function(text) {
      expect(text).toMatch(/tuintra-dropdown-menu/);
    });
  });

    it('should display tuintra-dropdown-menu (koa-dropdown-menu with a minimum dimensions)', function() {

      var selector = 'tuintra-dropdown-menu';

      browser.executeScript(computedDetails(selector,'height')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });


      browser.executeScript(computedDetails(selector,'width')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });

    });

    it('should register tuintra-dropdown-menu (koa-dropdown-menu as a Polymer Element)', function() {
      expect(browser.executeScript(isElementRegistered("tuintra-dropdown-menu"))).toBe(true);
    });




  it('should load koa-grid', function() {
    var identifier = '#content > div > div > div > section:nth-child(10) > h3';
    expect(element(by.css(identifier))).toBeDefined();
    element(by.css(identifier)).getText().then(function(text) {
      expect(text).toBe('koa-grid');
    });
  });

  it('should display tuintra-grid (koa-grid)', function() {
    element(by.css('#content > div > div > div > section:nth-child(10)')).getAttribute('outerHTML').then(function(text) {
      expect(text).toMatch(/tuintra-grid/);
    });
  });

    it('should display tuintra-grid (koa-grid with a minimum dimensions)', function() {

      var selector = 'tuintra-grid';

      browser.executeScript(computedDetails(selector,'height')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });


      browser.executeScript(computedDetails(selector,'width')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });

    });

    it('should register tuintra-grid (koa-grid as a Polymer Element)', function() {
      expect(browser.executeScript(isElementRegistered("tuintra-grid"))).toBe(true);
    });




  it('should load koa-icon-button', function() {
    var identifier = '#content > div > div > div > section:nth-child(11) > h3';
    expect(element(by.css(identifier))).toBeDefined();
    element(by.css(identifier)).getText().then(function(text) {
      expect(text).toBe('koa-icon-button');
    });
  });

  it('should display tuintra-icon-button (koa-icon-button)', function() {
    element(by.css('#content > div > div > div > section:nth-child(11)')).getAttribute('outerHTML').then(function(text) {
      expect(text).toMatch(/tuintra-icon-button/);
    });
  });

    it('should display tuintra-icon-button (koa-icon-button with a minimum dimensions)', function() {

      var selector = 'tuintra-icon-button';

      browser.executeScript(computedDetails(selector,'height')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });


      browser.executeScript(computedDetails(selector,'width')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });

    });

    it('should register tuintra-icon-button (koa-icon-button as a Polymer Element)', function() {
      expect(browser.executeScript(isElementRegistered("tuintra-icon-button"))).toBe(true);
    });




  it('should load koa-item', function() {
    var identifier = '#content > div > div > div > section:nth-child(13) > h3';
    expect(element(by.css(identifier))).toBeDefined();
    element(by.css(identifier)).getText().then(function(text) {
      expect(text).toBe('koa-item');
    });
  });

  it('should display tuintra-item (koa-item)', function() {
    element(by.css('#content > div > div > div > section:nth-child(13)')).getAttribute('outerHTML').then(function(text) {
      expect(text).toMatch(/tuintra-item/);
    });
  });

    it('should display tuintra-item (koa-item with a minimum dimensions)', function() {

      var selector = 'tuintra-item';

      browser.executeScript(computedDetails(selector,'height')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });


      browser.executeScript(computedDetails(selector,'width')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });

    });

    it('should register tuintra-item (koa-item as a Polymer Element)', function() {
      expect(browser.executeScript(isElementRegistered("tuintra-item"))).toBe(true);
    });




  it('should load koa-menu-button', function() {
    var identifier = '#content > div > div > div > section:nth-child(15) > h3';
    expect(element(by.css(identifier))).toBeDefined();
    element(by.css(identifier)).getText().then(function(text) {
      expect(text).toBe('koa-menu-button');
    });
  });

  it('should display tuintra-menu-button (koa-menu-button)', function() {
    element(by.css('#content > div > div > div > section:nth-child(15)')).getAttribute('outerHTML').then(function(text) {
      expect(text).toMatch(/tuintra-menu-button/);
    });
  });

    it('should display tuintra-menu-button (koa-menu-button with a minimum dimensions)', function() {

      var selector = 'tuintra-menu-button';

      browser.executeScript(computedDetails(selector,'height')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });


      browser.executeScript(computedDetails(selector,'width')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });

    });

    it('should register tuintra-menu-button (koa-menu-button as a Polymer Element)', function() {
      expect(browser.executeScript(isElementRegistered("tuintra-menu-button"))).toBe(true);
    });




  it('should load koa-progress', function() {
    var identifier = '#content > div > div > div > section:nth-child(17) > h3';
    expect(element(by.css(identifier))).toBeDefined();
    element(by.css(identifier)).getText().then(function(text) {
      expect(text).toBe('koa-progress');
    });
  });

  it('should display tuintra-progress (koa-progress)', function() {
    element(by.css('#content > div > div > div > section:nth-child(17)')).getAttribute('outerHTML').then(function(text) {
      expect(text).toMatch(/tuintra-progress/);
    });
  });

    it('should display tuintra-progress (koa-progress with a minimum dimensions)', function() {

      var selector = 'tuintra-progress';

      browser.executeScript(computedDetails(selector,'height')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });


      browser.executeScript(computedDetails(selector,'width')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });

    });

    it('should register tuintra-progress (koa-progress as a Polymer Element)', function() {
      expect(browser.executeScript(isElementRegistered("tuintra-progress"))).toBe(true);
    });




  it('should load koa-radio-button', function() {
    var identifier = '#content > div > div > div > section:nth-child(18) > h3';
    expect(element(by.css(identifier))).toBeDefined();
    element(by.css(identifier)).getText().then(function(text) {
      expect(text).toBe('koa-radio-button');
    });
  });

  it('should display tuintra-radio-button (koa-radio-button)', function() {
    element(by.css('#content > div > div > div > section:nth-child(18)')).getAttribute('outerHTML').then(function(text) {
      expect(text).toMatch(/tuintra-radio-button/);
    });
  });

    it('should display tuintra-radio-button (koa-radio-button with a minimum dimensions)', function() {

      var selector = 'tuintra-radio-button';

      browser.executeScript(computedDetails(selector,'height')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });


      browser.executeScript(computedDetails(selector,'width')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });

    });

    it('should register tuintra-radio-button (koa-radio-button as a Polymer Element)', function() {
      expect(browser.executeScript(isElementRegistered("tuintra-radio-button"))).toBe(true);
    });




  it('should load koa-slider', function() {
    var identifier = '#content > div > div > div > section:nth-child(19) > h3';
    expect(element(by.css(identifier))).toBeDefined();
    element(by.css(identifier)).getText().then(function(text) {
      expect(text).toBe('koa-slider');
    });
  });

  it('should display tuintra-slider (koa-slider)', function() {
    element(by.css('#content > div > div > div > section:nth-child(19)')).getAttribute('outerHTML').then(function(text) {
      expect(text).toMatch(/tuintra-slider/);
    });
  });

    it('should display tuintra-slider (koa-slider with a minimum dimensions)', function() {

      var selector = 'tuintra-slider';

      browser.executeScript(computedDetails(selector,'height')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });


      browser.executeScript(computedDetails(selector,'width')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });

    });

    it('should register tuintra-slider (koa-slider as a Polymer Element)', function() {
      expect(browser.executeScript(isElementRegistered("tuintra-slider"))).toBe(true);
    });




  it('should load koa-spinner', function() {
    var identifier = '#content > div > div > div > section:nth-child(20) > h3';
    expect(element(by.css(identifier))).toBeDefined();
    element(by.css(identifier)).getText().then(function(text) {
      expect(text).toBe('koa-spinner');
    });
  });

  it('should display tuintra-spinner (koa-spinner)', function() {
    element(by.css('#content > div > div > div > section:nth-child(20)')).getAttribute('outerHTML').then(function(text) {
      expect(text).toMatch(/tuintra-spinner/);
    });
  });

    it('should display tuintra-spinner (koa-spinner with a minimum dimensions)', function() {

      var selector = 'tuintra-spinner';

      browser.executeScript(computedDetails(selector,'height')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });


      browser.executeScript(computedDetails(selector,'width')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });

    });

    it('should register tuintra-spinner (koa-spinner as a Polymer Element)', function() {
      expect(browser.executeScript(isElementRegistered("tuintra-spinner"))).toBe(true);
    });




  it('should load koa-tabs', function() {
    var identifier = '#content > div > div > div > section:nth-child(21) > h3';
    expect(element(by.css(identifier))).toBeDefined();
    element(by.css(identifier)).getText().then(function(text) {
      expect(text).toBe('koa-tabs');
    });
  });

  it('should display tuintra-tabs (koa-tabs)', function() {
    element(by.css('#content > div > div > div > section:nth-child(21)')).getAttribute('outerHTML').then(function(text) {
      expect(text).toMatch(/tuintra-tabs/);
    });
  });

    it('should display tuintra-tabs (koa-tabs with a minimum dimensions)', function() {

      var selector = 'tuintra-tabs';

      browser.executeScript(computedDetails(selector,'height')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });


      browser.executeScript(computedDetails(selector,'width')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });

    });

    it('should register tuintra-tabs (koa-tabs as a Polymer Element)', function() {
      expect(browser.executeScript(isElementRegistered("tuintra-tabs"))).toBe(true);
    });




  it('should load koa-toggle-button', function() {
    var identifier = '#content > div > div > div > section:nth-child(22) > h3';
    expect(element(by.css(identifier))).toBeDefined();
    element(by.css(identifier)).getText().then(function(text) {
      expect(text).toBe('koa-toggle-button');
    });
  });

  it('should display tuintra-toggle-button (koa-toggle-button)', function() {
    element(by.css('#content > div > div > div > section:nth-child(22)')).getAttribute('outerHTML').then(function(text) {
      expect(text).toMatch(/tuintra-toggle-button/);
    });
  });

    it('should display tuintra-toggle-button (koa-toggle-button with a minimum dimensions)', function() {

      var selector = 'tuintra-toggle-button';

      browser.executeScript(computedDetails(selector,'height')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });


      browser.executeScript(computedDetails(selector,'width')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });

    });

    it('should register tuintra-toggle-button (koa-toggle-button as a Polymer Element)', function() {
      expect(browser.executeScript(isElementRegistered("tuintra-toggle-button"))).toBe(true);
    });




  it('should load koa-toolbar', function() {
    var identifier = '#content > div > div > div > section:nth-child(23) > h3';
    expect(element(by.css(identifier))).toBeDefined();
    element(by.css(identifier)).getText().then(function(text) {
      expect(text).toBe('koa-toolbar');
    });
  });

  it('should display tuintra-toolbar (koa-toolbar)', function() {
    element(by.css('#content > div > div > div > section:nth-child(23)')).getAttribute('outerHTML').then(function(text) {
      expect(text).toMatch(/tuintra-toolbar/);
    });
  });

    it('should display tuintra-toolbar (koa-toolbar with a minimum dimensions)', function() {

      var selector = 'tuintra-toolbar';

      browser.executeScript(computedDetails(selector,'height')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });


      browser.executeScript(computedDetails(selector,'width')).then(function(text) {
        expect([true, "auto"]).toContain(text !== "auto" ? parseInt(text.replace("px", "")) > 0 : "auto");
      });

    });

    it('should register tuintra-toolbar (koa-toolbar as a Polymer Element)', function() {
      expect(browser.executeScript(isElementRegistered("tuintra-toolbar"))).toBe(true);
    });





  function isElementRegistered(label){
    return 'return document.createElement("'+label+'").constructor !== HTMLElement'
  }

  function computedDetails(label, property){
    return 'return window.getComputedStyle(document.querySelector("'+label+'"), null).getPropertyValue("'+property+'")';
  }

});
