sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MyMessageToast) {
	"use strict";
	return Controller.extend("sap.ui5.walkthrough.controller.App", {
		onShowHello : function () {
			MyMessageToast.show("Hello World");
		}
	});
});