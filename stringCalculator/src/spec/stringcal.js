describe("the add function", function () {
    it("should return 0 if string is an empty string", function () {
        expect(calculator.add("")).toEqual(0);
    });

    it("should return 1 if string is \"1\"", function () {
        expect(calculator.add("1")).toEqual(1);
    });

    it("should return 1 if string is \"0,1\"", function () {
        expect(calculator.add("0,1")).toEqual(1);
    });

    it("should return 7 if string is \"2,5\"", function () {
        expect(calculator.add("2,5")).toEqual(7);
    });

    it("should return 17 if string is \"9,8\"", function () {
        expect(calculator.add("9,8")).toEqual(17);
    });

    it("should return 9 if string is \",8,1\"", function () {
        expect(calculator.add(",8,1")).toEqual(9);
    });

    it("should return 10 if string is \"1,1,1,1,1,1,1,1,1,1\"", function () {
        expect(calculator.add("1,1,1,1,1,1,1,1,1,1")).toEqual(10);
    });

    it("should return 6 if string is \"2\\n1,3\"", function () {
        expect(calculator.add("2\n1,3")).toEqual(6);
    });

    it("should return 4 if string is \"//;\\n2,2\"", function () {
        expect(calculator.add("//;\n2;2")).toEqual(4);
    });

    it("should throw an exception if string is a negative number", function () {
        expect(function () {calculator.add("-1,2")
        }).toThrow("negative numbers not allowed");
    });

});