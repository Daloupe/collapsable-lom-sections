// ==UserScript==
// @name         Collapsable LOM Sections
// @namespace    https://github.com/daloupe
// @version      0.1
// @source       https://github.com/Daloupe/collapsable-lom-sections
// @match        https://docs.cycling74.com/*/live_object_model
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

(function() {
    const propertyDetails = $(document.createElement('div')).hide();
    $('.liveapi_object_section')
        .children('h3')
        .css('cursor', 'pointer')
        .on('click', (e) => $(e.target)
            .siblings('div:first-of-type')
            .toggle())
        .siblings('div:first-of-type')
        .hide()
        .find('h5')
        .css('cursor', 'pointer')
        .on('click', (e) => $(e.target)
            .next()
            .toggle())
        .each((_, element) => $(element)
             .siblings()
             .wrapAll(propertyDetails));
})();
