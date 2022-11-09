function Double(req, res) {
    var double = Number(req.query.value) * 2;
    res.send(double);
    //res.send('ok');
}
export { Double };
