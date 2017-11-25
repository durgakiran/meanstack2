export class Poll {
    _id: string;
    userid: string;
    question: string;
    options: any[];
    votes: any[];
}

export const polls: Poll[] = [
    {_id:'1',userid: '4541v1cv22', question: 'lorem ipsum?', options: ['lorem','ipsum'],votes: [1,2]},
    {_id:'2',userid: '4541v1cv22', question: 'lorem ipsum?', options: ['lorem','ipsum','dolar'],votes: [1,2,0]},
    {_id:'2',userid: '4541v1cv22', question: 'lorem ipsum?', options: ['lorem','ipsum','dolar'],votes: [1,2,0]},
    {_id:'2',userid: '4541v1cv22', question: 'lorem ipsum?', options: ['lorem','ipsum','dolar'],votes: [1,2,0]},
    {_id:'2',userid: '4541v1cv22', question: 'lorem ipsum?', options: ['lorem','ipsum','dolar'],votes: [1,2,0]},
    {_id:'2',userid: '4541v1cv22', question: 'lorem ipsum?', options: ['lorem','ipsum','dolar'],votes: [1,2,0]},
    {_id:'2',userid: '4541v1cv22', question: 'lorem ipsum?', options: ['lorem','ipsum','dolar'],votes: [1,2,0]}
    
]