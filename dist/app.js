//enumeration in typescript
var parkingSlots;
(function (parkingSlots) {
    parkingSlots[parkingSlots["800"] = 0] = "800";
    parkingSlots[parkingSlots["Q7"] = 1] = "Q7";
    parkingSlots[parkingSlots["A8"] = 2] = "A8";
    parkingSlots[parkingSlots["Q3"] = 3] = "Q3";
})(parkingSlots || (parkingSlots = {}));
;
for (i in parkingSlots) {
    console.log(i);
}
//# sourceMappingURL=app.js.map