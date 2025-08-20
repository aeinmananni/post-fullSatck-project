"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const wellcom_controller_1 = require("../controllers/wellcom.controller");
const router = (0, express_1.Router)();
router.get("/GET", wellcom_controller_1.handelWellcom);
exports.default = router;
