describe("the add function", function() {
    it("should return 0 if string is an empty string", function() {
        expect(calculator.add("")).toEqual(0);
    });

    it("should return 1 if string is \"1\"", function() {
        expect(calculator.add("1")).toEqual(1);
    });

    it("should return 1 if string is \"0,1\"", function() {
        expect(calculator.add("0,1")).toEqual(1);
    });

    it("should return 7 if string is \"2,5\"", function() {
        expect(calculator.add("2,5")).toEqual(7);
    });

    it("should return 9 if string is \",8,1\"", function() {
        expect(calculator.add(",8,1")).toEqual(9);
    });


    it("should return 6 if string is \"2\\n1,3\"", function() {
        expect(calculator.add("2\n1,3")).toEqual(6);
    });

    it("should throw an exception if string is a negative number", function() {
        expect(calculator.add("-1,2")).toBe("negative numbers not allowed");
    });
});
