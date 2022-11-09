import { Request, Response } from 'express';
import { Job } from '../protocols/job.js';

function listAllJobs(req: Request, res: Response) {
    const jobs: string[] = ['Tech Lead', 'Developer'];
    const stringArray: string[] = ['Tech Lead', 'Developer'];
    const numberArray: number[] = [1, 2, 3, 4, 5];
    const booleanArray: boolean[] = [true, true, false, true];
    const object: {
        id?: number, //May have or not this property. But if it has, it needs to be number; optional
        title: string,
        active: boolean
        skills: (string | number)[],
        date: string | Date
    } = {
        id: 2,
        title: 'aloha',
        active: true,
        skills: ['aloha', 1],
        date: '2022-11-08'
    };


    const objectArray: Job[] = [
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
    const stringOrBoolean: string | boolean = true;
    const stringOrNumberArray: (string | number)[] = [1, 2, 'apple'];
    res.send(jobs);
}

function double(req: Request, res: Response) {
    if (req.query.value) {
        const double: number = Number(req.query.value) * 2;
        res.send({ double });
        return;
    }
    res.send('Nothing to double');
}

export {
    listAllJobs,
    double
}