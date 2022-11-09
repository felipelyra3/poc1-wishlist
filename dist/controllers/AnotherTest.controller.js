function listAllJobs(req, res) {
    var jobs = ['Tech Lead', 'Developer'];
    var stringArray = ['Tech Lead', 'Developer'];
    var numberArray = [1, 2, 3, 4, 5];
    var booleanArray = [true, true, false, true];
    var object = {
        id: 2,
        title: 'aloha',
        active: true,
        skills: ['aloha', 1],
        date: '2022-11-08'
    };
    var objectArray = [
        {
            id: 2,
            title: 'aloha',
            active: true,
            skills: ['aloha', 1],
            date: '2022-11-08'
        },
        {
            title: 'aloha',
            active: true,
            skills: ['aloha', 1],
            date: '2022-11-08'
        }
    ];
    //Operator OR for var types
    var stringOrBoolean = true;
    var stringOrNumberArray = [1, 2, 'apple'];
    res.send(jobs);
}
function double(req, res) {
    if (req.query.value) {
        var double_1 = Number(req.query.value) * 2;
        res.send({ double: double_1 });
        return;
    }
    res.send('Nothing to double');
}
export { listAllJobs, double };
