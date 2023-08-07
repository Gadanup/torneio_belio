sap.ui.define([
    "./BaseController"
], function (BaseController) {
    "use strict";

    return BaseController.extend("torneiobelio.torneiobelio.controller.App", {

        onInit: function () {
            this.oRouter = this.getRouter();
            this.oRouter.navTo("Main");
        }
    });

});