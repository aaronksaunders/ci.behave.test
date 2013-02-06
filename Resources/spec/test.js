(function() {
    describe("sampleapp.main", function() {
        it("should fail half of the tests and pass half", function() {
            expect("poker").toBe("poker");
            expect("poker").toBe("another thing");
            expect(24).toBe(24);
            expect(24).toBe(12);
        });
        it("should not break with tests cantaining a huge amount of nonsense text in the test title", function() {
            expect(!0).toBe(!1);
        });
    });
})();