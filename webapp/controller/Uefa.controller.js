sap.ui.define([
    "./BaseController",
], function(
    BaseController
) {
	"use strict";

	return BaseController.extend("torneiobelio.torneiobelio.controller.Uefa", {
		onPlayersPress: function (oEvent) {
            var oItem = oEvent.getSource();
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("Players");
        },
        onLeaguesPress: function (oEvent) {
            var oItem = oEvent.getSource();
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("Leagues");
        },
        onMainPress: function (oEvent) {
            var oItem = oEvent.getSource();
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("Main");
        },
        onPrizesPress: function (oEvent) {
            var oItem = oEvent.getSource();
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("Prizes");
        },
        onUEFAPress: function (oEvent) {
            var oItem = oEvent.getSource();
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("Uefa");
        }
	});
});