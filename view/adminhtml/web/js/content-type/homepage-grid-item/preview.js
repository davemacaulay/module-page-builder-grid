define([
    'jquery',
    'underscore',
    'Magento_PageBuilder/js/content-type/preview-collection',
], function ($, _, PreviewCollection) {
    'use strict';
    var $super;

    /**
     * Preview Constructor
     *
     * @param parent
     * @param config
     * @param stageId
     * @constructor
     */
    function Preview(parent, config, stageId) {
        PreviewCollection.call(this, parent, config, stageId);
    }
    Preview.prototype = Object.create(PreviewCollection.prototype);
    $super = PreviewCollection.prototype;

    /**
     * Remove move, duplicate and remove options
     *
     * @returns {*}
     */
    Preview.prototype.retrieveOptions = function () {
        var options = $super.retrieveOptions.call(this, arguments);

        return _.filter(options, function (option) {
            return option.code !== "move" &&  option.code !== "duplicate" && option.code !== "remove";
        });
    };

    return Preview;
});
