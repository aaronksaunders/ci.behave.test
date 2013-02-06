require("behave").andSetup(this);

describe("The model helper package", function() {
    it("*** creates a new model", function() {
        var theID = (new Date).getTime().toString(), model = Alloy.createModel("stuff", {
            name: "Name ",
            nickname: "Nickname",
            fighterId: theID
        });
        model.save();
        expect(model.id).notToBe(null);
        expect(model.id).toBe(theID);
        expect(model.get("name")).toBe("Name ");
        expect(model.get("nickname")).toBe("Nickname");
        model.destroy();
    });
    it("*** updates a model", function() {
        var theID = (new Date).getTime().toString(), model = Alloy.createModel("stuff", {
            name: "A Sample Name",
            nickname: "Nickname",
            fighterId: theID
        });
        model.save();
        model.clear();
        model.set({
            fighterId: theID
        });
        model.fetch();
        expect(model.id).notToBe(null);
        expect(model.id).toBe(theID);
        expect(model.get("name")).toBe("A Sample Name");
        expect(model.get("nickname")).toBe("Nickname");
        var aNewModel = Alloy.createModel("stuff", {
            fighterId: theID,
            name: "Aaron Saunders",
            nickname: "a new model nick name"
        });
        aNewModel.save();
        aNewModel.clear();
        aNewModel.set({
            fighterId: theID
        });
        aNewModel.fetch();
        expect(aNewModel.id).notToBe(null);
        expect(aNewModel.id).toBe(model.id);
        expect(aNewModel.get("name")).toBe("Aaron Saunders");
        expect(aNewModel.get("nickname")).toBe("a new model nick name");
        model.destroy();
        aNewModel.destroy();
    });
    it("*** finds a model", function() {
        var theID = (new Date).getTime().toString(), model = Alloy.createModel("stuff", {
            name: "A Sample Name",
            nickname: "Nickname",
            fighterId: theID
        });
        model.save();
        expect(model.id).notToBe(null);
        expect(model.id).toBe(theID);
        expect(model.get("name")).toBe("A Sample Name");
        expect(model.get("nickname")).toBe("Nickname");
        var aNewModel = Alloy.createModel("stuff", {
            fighterId: theID
        });
        aNewModel.fetch();
        expect(aNewModel.id).notToBe(null);
        expect(aNewModel.id).toBe(theID);
        expect(aNewModel.get("name")).toBe("A Sample Name");
        expect(aNewModel.get("nickname")).toBe("Nickname");
        model.destroy();
    });
    it("*** fetches all models", function() {
        var stuffs = Alloy.createCollection("stuff"), model1 = Alloy.createModel("stuff", {
            name: "A Sample Name",
            nickname: "Nickname",
            fighterId: (new Date).getTime().toString()
        });
        model1.save();
        stuffs.add(model1);
        var model2 = Alloy.createModel("stuff", {
            name: "A Sample Name",
            nickname: "Nickname",
            fighterId: (new Date).getTime().toString()
        });
        model2.save();
        stuffs.add(model2);
        stuffs.fetch();
        expect(stuffs).notToBe(null);
        expect(stuffs.models).notToBe(null);
        expect(stuffs.models.length).toBe(2);
        model1.destroy();
        model2.destroy();
    });
});