pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Check for query params", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.args.a).to.eql('b');
});

pm.test("Check for headers", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.headers.host).to.eql('postman-echo.com');
});