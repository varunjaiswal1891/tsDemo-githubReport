//console.log("hello varun");

import {GithubApiService} from './GithubApiService'; 
import { Repo } from './Repo';
import { User } from './User';

//npm init   --generate package.json structure
//tsc --init --generate tsconfig.json structure
//npm install request lodash --save 
//npm install @types/lodash @types/request --save-dev

let svc = new GithubApiService();
svc.getUserInfo("varunjaiswal1891",(user: User) => {
    //console.log(user);
    console.log("user object = "+user);
    console.log("username = "+user.fullName);
});

svc.getRepos("varunjaiswal1891",(repos: Repo[]) => {
 console.log("Repos = "+repos);   
});
