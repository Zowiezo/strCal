describe("the add function", function () {
    it("should return 0 if input is an empty string", function () {
        expect(calculator.add("")).toEqual(0);
    });

    it("should return 1 if input is \"1\"", function () {
        expect(calculator.add("1")).toEqual(1);
    });

    it("should return 1 if input is \"0,1\"", function () {
        expect(calculator.add("0,1")).toEqual(1);
    });

    it("should return 7 if input is \"2,5\"", function () {
        expect(calculator.add("2,5")).toEqual(7);
    });

    it("should return 17 if input is \"9,8\"", function () {
        expect(calculator.add("9,8")).toEqual(17);
    });

    it("should return 18 if input is \"9,8,1\"", function () {
        expect(calculator.add("9,8,1")).toEqual(18);
    });

    it("should return 11 if input is \"1,1,1,1,1,1,1,1,1,1,1\"", function () {
        expect(calculator.add("1,1,1,1,1,1,1,1,1,1,1")).toEqual(11);
    });

    it("should return 2 if input is \"1\\n0,1\"", function () {
        expect(calculator.add("1\n0,1")).toEqual(2);
    });

    it("should return 3 if input is \"//;\\n1,2\"", function () {
        expect(calculator.add("//;\n1;2")).toEqual(3);
    });

    it("should throw an exception if input is a negative number", function () {
        expect(function () {calculator.add("-1,2")
        }).toThrow("negative numbers not allowed");
    });

});